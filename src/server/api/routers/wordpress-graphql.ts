import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { graphql } from "@/gql";
import type { GetPostsEdgesQuery } from "@/gql/graphql";

export const graphqlRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async ({ ctx }) => {
    const query = graphql(
      "\n  query GetPostsEdges {\n    posts {\n      edges {\n        node {\n          id\n          title\n          date\n          featuredImage {\n            node {\n              id\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n",
    );
    const response = await ctx.graphqldb.request<GetPostsEdgesQuery>(query);
    return response;
  }),
});
