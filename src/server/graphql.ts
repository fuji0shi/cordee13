import { GraphQLClient } from "graphql-request";
import { env } from "@/env";

const globalForGraphql = globalThis as unknown as {
  graphql: GraphQLClient | undefined;
};

export const graphqldb =
  globalForGraphql.graphql ??
  new GraphQLClient(env.GRAPHQL_ENDPOINT, {
    errorPolicy: "all",
    headers: {
      Authorization: `Basic ${btoa(`${env.WORDPRESS_USERNAME}:${env.WORDPRESS_PASSWORD}`)}`,
    },
  });

if (env.NODE_ENV !== "production") globalForGraphql.graphql = graphqldb;
