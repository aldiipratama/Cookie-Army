import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchUsers = () => useQuery<{ users: User[] }>({
  queryKey: ["users"],
  queryFn: async () => {
    const users = await axios.get(route("getAllUsers"));

    return {
      users: users.data,
    };
  },
});