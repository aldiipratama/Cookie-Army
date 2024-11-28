import { Like } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchLikes = () => useQuery<{ likes: Like[] }>({
  queryKey: ["likes"],
  queryFn: async () => {
    const likes = await axios.get(route("getAllLikes"));

    return {
      likes: likes.data,
    };
  },
});