import { Relationships, User } from "@/types";
import { useFetchUsers } from "../users/useFetchUsers";
import { useFetchRelationships } from "./useFetchRelationships";

interface useRelationshipsType {
  peopleYouMayKnow?: User[]
  sumFollowers?: number;
  sumFollowings?: number
}

export const useRelationships = (currentUserId: number): useRelationshipsType => {
  if (!currentUserId) return { peopleYouMayKnow: [], sumFollowers: 0, sumFollowings: 0 }

  const { data: dataUsers } = useFetchUsers()
  const { data: dataRelationships } = useFetchRelationships()

  const peopleYouMayKnow = usePeopleYouMayKnow(currentUserId, { users: dataUsers?.users, relationships: dataRelationships?.relationships })
  const sumFollowers = useSumFollowers(currentUserId, { relationships: dataRelationships?.relationships })
  const sumFollowings = useSumFollowings(currentUserId, { relationships: dataRelationships?.relationships })

  return { peopleYouMayKnow, sumFollowers, sumFollowings }

}

interface dataType {
  relationships?: Relationships[],
  users?: User[]
}

export const usePeopleYouMayKnow = (currentUserId: number, data?: dataType) => {
  if (!currentUserId) return;

  const followerId = new Set(data?.relationships?.filter(rel => rel.follower_id === currentUserId).map(rel => rel.follower_id))
  const followingId = new Set(data?.relationships?.filter(rel => rel.following_id === currentUserId).map(rel => rel.following_id))

  return data?.users?.filter(user => {
    if (user.id === currentUserId || followerId.has(user.id) || followingId.has(user.id)) {
      return false;
    }

    return data?.relationships?.some(rel =>
      (followerId.has(rel.follower_id) || followingId.has(rel.following_id)) && (rel.follower_id === user.id || rel.following_id === user.id)
    )
  })
}

export const useSumFollowers = (userId: number, data?: dataType) => data?.relationships?.filter(rel =>
  rel.follower_id === userId
).length

export const useSumFollowings = (userId: number, data?: dataType) => data?.relationships?.filter(rel =>
  rel.following_id === userId
).length