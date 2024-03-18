import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { sendMail } from "@/service/mailService";
import { type SendMailProps } from "@/types";
import { zInputSendMail } from "@/utils/zod/auth";

export const sendmailRouter = createTRPCRouter({
  sendRegisterMail: publicProcedure
    .input(zInputSendMail)
    .query(async ({ ctx, input }) => {
      const userMail = await ctx.db.membres.findFirst({
        where: { email: input.email },
      });
      if (!userMail) {
        return false;
      }

      const mailProps: SendMailProps = {
        toEmail: userMail.email,
        subject: input.subject,
        content: input.content as SendMailProps["content"],
      };

      try {
        await sendMail(mailProps);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }),
});
