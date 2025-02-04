import { z } from "zod";
import type { Item } from "~/app/types/item";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export class NoItemError extends Error {
  category_id: number;
  subcategory_id: number;
  youMightLike: Item[];
  constructor(
    message: string,
    category_id: number | undefined,
    subcategory_id: number | undefined,
    youMightLike: Item[] | undefined,
  ) {
    super(message);
    this.category_id = category_id ?? 0;
    this.subcategory_id = subcategory_id ?? 0;
    this.youMightLike = youMightLike ?? [];
  }
}

export const itemsRouter = createTRPCRouter({
  fetchAllItems: publicProcedure
    .input(
      z.object({
        category_id: z.string().transform(Number).optional(),
        category: z.string().optional(),
        subcategory_id: z.string().transform(Number).optional(),
        tag: z.string().optional(),
        price_from: z.string().transform(Number).optional(),
        price_to: z.string().transform(Number).optional(),
        sort_by: z.enum(["name", "price", "date_listed"]).optional(),
        order: z.enum(["asc", "desc"]).optional(),
        p: z.string().min(1).transform(Number),
      }),
    )
    .query(async ({ ctx, input }) => {
      const {
        category_id,
        category,
        subcategory_id,
        tag,
        price_from,
        price_to,
        sort_by = "name",
        order = "asc",
        p,
      } = input;
      console.log(input);
      const options = !(category || category_id)
        ? { available_item: true }
        : {
            OR: [
              category_id ? { category_id } : null,
              category ? { category: { category_name: category } } : null,
            ].filter((item) => item !== null),
            AND: [
              { available_item: true },
              subcategory_id ? { subcategory_id } : null,
              tag ? { name: { contains: tag } } : null,
              price_from && price_to
                ? {
                    price: {
                      gte: price_from,
                      lte: price_to,
                    },
                  }
                : null,
            ].filter((el) => el !== null),
          };
      const items = await ctx.db.items.findMany({
        where: options,
        orderBy: { [sort_by]: order },
        take: 15,
        skip: (p - 1) * 15,
        include: { category: true, subcategory: true },
      });
      if (!items.length) {
        const relevantItem = await ctx.db.items.findFirst({
          where: {
            OR: [
              category_id ? { category_id } : null,
              category ? { category: { category_name: category } } : null,
            ].filter((item) => item !== null),
            AND: [
              { available_item: false },
              { subcategory_id },
              {
                name: tag ? { contains: tag, mode: "insensitive" } : undefined,
              },

              {
                price: {
                  gte: price_from,
                  lte: price_to,
                },
              },
            ],
          },
        });
        const youMightLike = await ctx.db.items.findMany({
          where: {
            subcategory_id: subcategory_id ?? relevantItem?.subcategory_id ?? 1,
          },
        });
        return Promise.reject(
          new NoItemError(
            "No items found",
            relevantItem?.category_id,
            relevantItem?.subcategory_id,
            youMightLike,
          ),
        );
      }

      return items;
    }),

  fetchItem: publicProcedure
    .input(z.object({ id: z.string().transform(Number) }))
    .query(async ({ ctx, input }) => {
      const item = await ctx.db.items.findUnique({
        where: { id: input.id },
      });

      if (!item) throw new Error("item id not found");
      return item;
    }),

  insertItem: publicProcedure
    .input(
      z.object({
        user_id: z.number(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tag: z.string(),
        category_id: z.number(),
        subcategory_id: z.number(),
        photo_description: z.string(),
        photo_source: z.array(z.string()).nonempty(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        user_id,
        category_id,
        subcategory_id,
        photo_source,
        ...itemData
      } = input;

      const item = await ctx.db.items.create({
        data: {
          ...itemData,
          user: { connect: { id: user_id } },
          category: { connect: { id: category_id } },
          subcategory: { connect: { id: subcategory_id } },
          photo_source: { set: photo_source },
        },
      });

      return item;
    }),

  updateItem: publicProcedure
    .input(
      z.object({
        user_id: z.number(),
        item_id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        tag: z.string().optional(),
        category_id: z.number().optional(),
        subcategory_id: z.number().optional(),
        photo_description: z.string().optional(),
        photo_source: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { user_id, item_id, subcategory_id, ...updateData } = input;

      const item = await ctx.db.items.findUnique({ where: { id: item_id } });

      if (!item) throw new Error("item id not found");
      if (item.user_id !== user_id)
        throw new Error("user id does not match item owner");

      if (subcategory_id) {
        const subcategory = await ctx.db.subcategories.findUnique({
          where: { id: subcategory_id },
        });
        if (!subcategory) throw new Error("subcategory not found");

        updateData.category_id = subcategory.category_id;
      }

      const updatedItem = await ctx.db.items.update({
        where: { id: item_id },
        data: updateData,
      });

      return updatedItem;
    }),

  fetchUserItems: publicProcedure
    .input(z.object({ user_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.items.findMany({
        where: { user_id: input.user_id },
      });
      return items;
    }),

  fetchOrderItems: publicProcedure
    .input(z.array(z.number()))
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.items.findMany({
        where: {
          id: { in: input },
        },
      });
      return items;
    }),
});
