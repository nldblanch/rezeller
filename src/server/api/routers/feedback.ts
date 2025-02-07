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
});
