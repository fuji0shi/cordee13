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
  code: z.number().min(100000).max(999999),
});

export const zInputGetRegisterValidation = zInputRegisterLink.omit({
  email: true,
});

export const zInputGetMemberInfosWithEmail = zInputRegisterLink.pick({
  link: true,
});

const PATTERN_PASSWORD =
  /^(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{12,}$/;

export const zInputRegister = z.object({
  name: z.string().trim().min(1).max(30),
  email: zObjectEmail,
  password: z.string().regex(PATTERN_PASSWORD),
  confirm_password: z.string().regex(PATTERN_PASSWORD),
  nom: z.string().trim().min(1).max(30),
  prenom: z.string().trim().min(1).max(30),
  licence: z.string().min(1).max(20),
  about: z.string().trim().min(1).max(1000),
  cotation_vue: z.string().min(1).max(5),
  cotation_flashee: z.string().min(1).max(5),
  cotation_travaillee: z.string().min(1).max(5),
  annee_grimpe: z.string().min(1).max(30),
  collectifs: z.array(z.string().min(1).max(50)),
});
