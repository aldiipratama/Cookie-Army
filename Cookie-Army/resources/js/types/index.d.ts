export declare type ProviderId = 'google' | 'twitter' | 'tiktok';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    bio: string;
    email: string;
    email_verified_at: string;
    profile_picture: string;
    profile_background: string;
    no_telepon: string;
    verified_at: DateTime;
    banned_at: DateTime;
    roleId: number
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
