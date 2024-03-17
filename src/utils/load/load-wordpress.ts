import { api } from "@/utils/api";

export function loadPosts() {
  const posts = api.wordpress.getPosts.useQuery(undefined, {
    cacheTime: 10 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return posts;
}
