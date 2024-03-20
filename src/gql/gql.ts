/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetPostsEdges {\n    posts(first: 4) {\n      edges {\n        node {\n          id\n          title\n          date\n          featuredImage {\n            node {\n              id\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetPostsEdgesDocument,
    "\n  query GetPosts {\n    posts {\n      edges {\n        node {\n          date\n          title\n          slug\n          excerpt\n          featuredImage {\n            node {\n              mediaDetails {\n                file\n                sizes {\n                  sourceUrl\n                  width\n                  height\n                }\n              }\n            }\n          }\n          categories {\n            nodes {\n              name\n              slug\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n": types.GetPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostsEdges {\n    posts(first: 4) {\n      edges {\n        node {\n          id\n          title\n          date\n          featuredImage {\n            node {\n              id\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsEdges {\n    posts(first: 4) {\n      edges {\n        node {\n          id\n          title\n          date\n          featuredImage {\n            node {\n              id\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts {\n    posts {\n      edges {\n        node {\n          date\n          title\n          slug\n          excerpt\n          featuredImage {\n            node {\n              mediaDetails {\n                file\n                sizes {\n                  sourceUrl\n                  width\n                  height\n                }\n              }\n            }\n          }\n          categories {\n            nodes {\n              name\n              slug\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts {\n    posts {\n      edges {\n        node {\n          date\n          title\n          slug\n          excerpt\n          featuredImage {\n            node {\n              mediaDetails {\n                file\n                sizes {\n                  sourceUrl\n                  width\n                  height\n                }\n              }\n            }\n          }\n          categories {\n            nodes {\n              name\n              slug\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;