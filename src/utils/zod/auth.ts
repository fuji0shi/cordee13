import { z } from "zod";

const zObjectEmail = z.string().email().trim().min(1);

export const zInputObjectEmail = z.object({
  email: zObjectEmail,
});

export const zInputSendMail = z.object({
  email: zObjectEmail,
  subject: z.string().min(1),
  content: z.any(),
});

export const zInputRegisterLink = z.object({
  email: zObjectEmail,
  link: z.string().min(16),
});
