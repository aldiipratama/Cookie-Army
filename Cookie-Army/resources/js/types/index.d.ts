export interface ConnectedAccount {
    id: number;
    provider: string;
    provider_id: number;
    created_at: string
}

export declare type ProviderId = 'google' | 'tiktok' | 'twitter-oauth-2';

export interface Provider {
    id: ProviderId;
    name: string;
    buttonLabel?: string;
}

export interface Socialstream {
    show: boolean;
    prompt: string;
    hasPassword: boolean;
    providers: Provider[];
    connectedAccounts: ConnectedAccount[];
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    bio: string;
    email: string;
    email_verified_at: DateTime;
    verified_at: DateTime;
    banned_at: DateTime;
    profile_picture: string;
    profile_background: string;
    created_at: DateTime;
    updated_at: DateTime;
}

interface IPosts {
    slug: string;
    description: string;
    image: string
    userId: number
    users: User
    created_at: DateTime
    updated_at: DateTime
}

interface IStories {
    id: number;
    caption: string;
    image: string
    userId: number
    users: User
    created_at: DateTime
    updated_at: DateTime
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
