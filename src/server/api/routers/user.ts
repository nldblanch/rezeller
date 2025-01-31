import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.users.findMany();
    return users ?? null;
  }),
  getUserById: publicProcedure
    .input(z.object({ id: z.string().transform(Number) }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.users.findUnique({ where: { id: input.id } });
      return user ?? null;
    }),
  addUser: publicProcedure
    .input(
      z.object({
        username: z.string(),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.users.create({
        data: {
          username: input.username,
          name: input.name,
        },
      });
    }),
  updateUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
        username: z.string().optional(),
        name: z.string().optional(),
        avatar_url: z.string().optional(),
        balance: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;

      if (Object.keys(updateData).length === 0) {
        throw new Error("Bad request - no patch data");
      }

      const updatedUser = await ctx.db.users.update({
        where: { id },
        data: updateData,
      });

      return updatedUser;
    }),
});
