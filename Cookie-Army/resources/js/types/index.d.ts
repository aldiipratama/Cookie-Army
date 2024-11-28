export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  email_verified_at?: string;
  no_telepon: string;
  verified: boolean;
  profile_picture: string;
  role_id: number;
  bio: string;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  role_name: string;
}

export interface Post {
  id: number;
  user_id: number;
  description: string;
  image: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  description: string;
  post_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface Like {
  id: number;
  comment_id: number;
  post_id: number;
  user_id: number;
}

export interface SharePost {
  id: number;
  post_id: number;
  user_id: number;
  created_at: string;
}

export interface Relationships {
  id: number;
  follower_id: number;
  following_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};
