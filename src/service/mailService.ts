import nodemailer, { type SendMailOptions } from "nodemailer";
import { env } from "@/env";
import type { SendMailProps } from "@/types";

export const sendMail = async (props: SendMailProps) => {
  const { toEmail, subject, content } = props;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: env.NODEMAILER_EMAIL,
      pass: env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: SendMailOptions = {
    from: "cordee13@gmail.com",
    to: toEmail,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      return info;
    }
  });
};
