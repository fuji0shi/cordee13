import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  zInputRegisterLink,
  zInputGetRegisterValidation,
  zInputGetMemberInfosWithEmail,
} from "@/utils/zod/auth";

export const authRouter = createTRPCRouter({
  createRegisterValidation: publicProcedure
    .input(zInputRegisterLink)
    .mutation(async ({ ctx, input }) => {
      try {
        const addLink = await ctx.db.registerSendMail.create({
          data: {
            link: input.link,
            email: input.email,
            code: input.code,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24h durée de validité
          },
        });
        return addLink.id;
      } catch (error) {
        console.log(error);
        return false;
      }
    }),
  getRegisterValidation: publicProcedure
    .input(zInputGetRegisterValidation)
    .query(async ({ ctx, input }) => {
      const response = await ctx.db.registerSendMail.findFirst({
        where: {
          link: input.link,
          code: input.code,
        },
        select: {
          email: true,
          expires: true,
        },
      });
      return response;
    }),
  getMemberInfosWithEmail: publicProcedure
    .input(zInputGetMemberInfosWithEmail)
    .query(async ({ ctx, input }) => {
      const emailMember = await ctx.db.registerSendMail.findFirst({
        where: {
          link: input.link,
        },
        select: {
          email: true,
        },
      });
      if (!emailMember?.email) {
        return {
          errors:
            "Il n'y a pas de compte associé à cet email, merci de contacter l'administrateur",
        };
      }
      const memberInfos = await ctx.db.membres.findFirst({
        where: { email: emailMember.email, licence_fsgt_parent: null },
        select: { nom: true, prenom: true, email: true, licence_fsgt: true },
      });
      return memberInfos;
    }),
});
