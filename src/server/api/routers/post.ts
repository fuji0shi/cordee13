import { z } from "zod";
import type { Post } from "@/types/post";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async () => {
    const res = await fetch("https://cordee13.fr/wp-json/wp/v2/posts");
    const posts: Post[] = await res.json();
    return posts;
  }),
});
