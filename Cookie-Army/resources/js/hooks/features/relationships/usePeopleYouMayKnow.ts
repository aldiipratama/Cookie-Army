import { useFetchRelationships } from "../relationships/useFetchRelationships";
import { useFetchUsers } from "../users/useFetchUsers";

export const usePeopleYouMayKnow = (currentUserId: number) => {
  if (!currentUserId) return { peopleYouMayKnow: [] };

  const { data: dataUsers } = useFetchUsers()
  const { data: dataRelationships } = useFetchRelationships()
  const followerId = new Set(dataRelationships?.relationships.filter(rel => rel.follower_id === currentUserId).map(rel => rel.follower_id))
  const followingId = new Set(dataRelationships?.relationships.filter(rel => rel.following_id === currentUserId).map(rel => rel.following_id))

  const peopleYouMayKnow = dataUsers?.users.filter(user => {
    if (user.id === currentUserId || followerId.has(user.id) || followingId.has(user.id)) {
      return false;
    }

    return dataRelationships?.relationships.some(rel =>
      (followerId.has(rel.follower_id) || followingId.has(rel.following_id)) && (rel.follower_id === user.id || rel.following_id === user.id)
    )
  })

  return { peopleYouMayKnow }
}
