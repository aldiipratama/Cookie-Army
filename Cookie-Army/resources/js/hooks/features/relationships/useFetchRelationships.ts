import { Relationships } from "@/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useFetchRelationships = () => useQuery<{ relationships: Relationships[] }>({
  queryKey: ['useRelationships'],
  queryFn: async () => {
    const relationships = await axios.get(route('getAllRelationships'))

    return {
      relationships: relationships.data
    }
  }
})