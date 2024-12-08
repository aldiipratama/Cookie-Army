export interface IUser {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    profile_picture: string,
    profile_background: string,
    bio: string,
    email: string,
    email_verified_at: Date,
    password: string,
    no_telepon: string,
    verified: boolean,
    verified_at: Date,
    is_banned: boolean,
    roleId: number,
    banned_at: Date,
    created_at: Date,
    updated_at: Date
}