import { Post } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchPosts = () => useInfiniteQuery<{
  posts: { data: Post[]; current_page: number; last_page: number };
}>({
  queryKey: ["posts"],
  queryFn: async ({ pageParam = 1 }) => {
    const posts = await axios.get(
      route("getAllPosts") + `?page=${pageParam}`
    );

    return {
      posts: posts.data,
    };
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage) => {
    return lastPage.posts.data.length
      ? lastPage.posts.current_page + 1
      : undefined;
  },
});