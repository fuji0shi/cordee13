import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import argon2 from "argon2";
import { zInputRegister } from "@/utils/zod/auth";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(zInputRegister)
    .mutation(async ({ ctx, input }) => {
      // on vérifie si l'email n'existe pas déja
      const mail = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (mail) {
        return {
          errors:
            "Cet email existe déja, merci de vous connecter à votre compte",
        };
      }

      if (input.password !== input.confirm_password) {
        return { errors: "Les mots de passe ne correspondent pas" };
      }

      // enregistrement des données, on hash le mot de passe avec argon2
      try {
        const hash_pasword = await argon2.hash(input.password);

        const new_user = await ctx.db.user.create({
          data: {
            name: input.name,
            email: input.email,
            password: hash_pasword,
            membre: {
              create: {
                nom: input.nom,
                prenom: input.prenom,
                about: input.about,
                licence_fsgt: input.licence,
                annee_grimpe: input.annee_grimpe,
              },
            },
            cotation: {
              create: {
                escalade_a_vue: input.cotation_vue,
                escalade_flash: input.cotation_flashee,
                escalade_apres_travail: input.cotation_travaillee,
              },
            },
          },
          select: {
            id: true,
            email: true,
          },
        });
        return new_user.id;
      } catch (err) {
        throw new Error(err as string);
      }
    }),
});
