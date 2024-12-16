import { z } from "zod";

export const postSchema = z.object({
  description: z.string({ message: 'Description must be a valid type of string' }),
  image: z.any().refine(files => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(files?.[0]?.type)).refine(files => files?.[0]?.size <= 1024 * 10, 'Image must be a valid Image ex: Jpeg, JPG, PNG, WebP'),
  slug: z.string(),
  userId: z.number()
})