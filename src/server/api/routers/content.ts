import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const contentRouter = createTRPCRouter({
  getStatsVoies: publicProcedure.query(
    async ({ ctx }) => await ctx.db.statVoies.findMany(),
  ),
});
