import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const feedbackRouter = createTRPCRouter({
  fetchUserFeedback: publicProcedure
    .input(z.object({ user_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const feedback = await ctx.db.feedback.findMany({
        where: { seller_id: input.user_id },
      });
      return feedback;
    }),
  getBuyerDetails: publicProcedure
    .input(z.object({ buyer_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirst({
        where: { id: input.buyer_id },
      });
      const feedbackCount = await ctx.db.feedback.count({
        where: { buyer_id: input.buyer_id },
      });
      return { username: user?.username, feedbackCount };
    }),
});
