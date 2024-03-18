import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { zInputRegisterLink } from "@/utils/zod/auth";

export const authRouter = createTRPCRouter({
  createRegisterValidation: publicProcedure
    .input(zInputRegisterLink)
    .mutation(async ({ ctx, input }) => {
      try {
        const addLink = await ctx.db.registerSendMail.create({
          data: {
            link: input.link,
            email: input.email,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          },
        });
        return addLink.id;
      } catch (error) {
        console.log(error);
        return false;
      }
    }),
});
