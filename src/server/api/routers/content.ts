import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const contentRouter = createTRPCRouter({
  getStatsVoies: publicProcedure.query(
    async ({ ctx }) => await ctx.db.statVoies.findMany(),
  ),
  getEscaladeType: publicProcedure.query(async ({ ctx }) => {
    const response = await ctx.db.escaladeType.findMany();
    return response;
  }),
  getVoieCotation: publicProcedure.query(async ({ ctx }) => {
    const response = await ctx.db.voieCotation.findMany();
    return response;
  }),
  getCollectifs: publicProcedure.query(async ({ ctx }) => {
    const response = await ctx.db.collectifs.findMany();
    return response;
  }),
});
