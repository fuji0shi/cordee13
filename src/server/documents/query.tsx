import { graphql } from "@/gql";

export const postsQueryDocument = graphql(`
  query GetPostsEdges {
    posts {
      edges {
        node {
          id
          title
          date
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
`);

export const postsCompleteQueryDocument = graphql(`
  query GetPosts {
    posts(first: 4) {
      edges {
        node {
          date
          title
          slug
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`);
