import { Comment } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchComments = () => useQuery<{ comments: Comment[] }>({
  queryKey: ["comments"],
  queryFn: async () => {
    const comments = await axios.get(route("getAllComments"));

    return {
      comments: comments.data,
    };
  },
});