import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const ordersRouter = createTRPCRouter({
  fetchOrder: publicProcedure
    .input(z.object({ id: z.string().transform(Number) }))
    .query(async ({ ctx, input }) => {
      const order = await ctx.db.orders.findUnique({
        where: { id: input.id },
      });

      if (!order) throw new Error("item id not found");
      return order;
    }),

  //   insertItem: publicProcedure
  //     .input(
  //       z.object({
  //         user_id: z.number(),
  //         name: z.string(),
  //         description: z.string(),
  //         price: z.number(),
  //         tag: z.string(),
  //         category_id: z.number(),
  //         subcategory_id: z.number(),
  //         photo_description: z.string(),
  //         photo_source: z.array(z.string()).nonempty(),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       const {
  //         user_id,
  //         category_id,
  //         subcategory_id,
  //         photo_source,
  //         ...itemData
  //       } = input;

  //       const item = await ctx.db.items.create({
  //         data: {
  //           ...itemData,
  //           user: { connect: { id: user_id } },
  //           category: { connect: { id: category_id } },
  //           subcategory: { connect: { id: subcategory_id } },
  //           photo_source: { set: photo_source },
  //         },
  //       });

  //       return item;
  //     }),

  //   updateItem: publicProcedure
  //     .input(
  //       z.object({
  //         user_id: z.number(),
  //         item_id: z.number(),
  //         name: z.string().optional(),
  //         description: z.string().optional(),
  //         price: z.number().optional(),
  //         tag: z.string().optional(),
  //         category_id: z.number().optional(),
  //         subcategory_id: z.number().optional(),
  //         photo_description: z.string().optional(),
  //         photo_source: z.array(z.string()).optional(),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       const { user_id, item_id, subcategory_id, ...updateData } = input;

  //       const item = await ctx.db.items.findUnique({ where: { id: item_id } });

  //       if (!item) throw new Error("item id not found");
  //       if (item.user_id !== user_id)
  //         throw new Error("user id does not match item owner");

  //       if (subcategory_id) {
  //         const subcategory = await ctx.db.subcategories.findUnique({
  //           where: { id: subcategory_id },
  //         });
  //         if (!subcategory) throw new Error("subcategory not found");

  //         updateData.category_id = subcategory.category_id;
  //       }

  //       const updatedItem = await ctx.db.items.update({
  //         where: { id: item_id },
  //         data: updateData,
  //       });

  //       return updatedItem;
  //     }),

  fetchUserOrders: publicProcedure
    .input(z.object({ user_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const orders = await ctx.db.orders.findMany({
        where: { buyer_id: input.user_id },
      });
      return orders;
    }),
});
