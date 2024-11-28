import { SharePost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchSharePosts = () => useQuery<{ sharePosts: SharePost[] }>({
  queryKey: ["sharePosts"],
  queryFn: async () => {
    const sharePosts = await axios.get(route("getAllSharePosts"));

    return {
      sharePosts: sharePosts.data,
    };
  },
});