// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
  }

  interface User {
    username?: string | undefine
    roleId?: number | unknown
  }
}