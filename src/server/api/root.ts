import { contentRouter } from "@/server/api/routers/content";
import { graphqlRouter } from "@/server/api/routers/wordpress-graphql";
import { sendmailRouter } from "@/server/api/routers/send-mail";
import { authRouter } from "@/server/api/routers/auth";
import { userRouter } from "@/server/api/routers/user";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  content: contentRouter,
  wordpress: graphqlRouter,
  mail: sendmailRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
