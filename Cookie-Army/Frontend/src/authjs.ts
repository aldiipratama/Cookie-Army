import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Twitter from 'next-auth/providers/twitter'
import Tiktok from 'next-auth/providers/tiktok'

export const { auth, handlers } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    newUser: '/register/set-username'
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      profile(profile) {
        let username = profile.email

        if (username) {
          username = username.replace(/@gmail\.com$/, "")
        }

        return {
          ...profile,
          username,
          roleId: profile.role ?? 3
        }
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    Twitter({
      clientId: process.env.AUTH_TWITTER_ID,
      clientSecret: process.env.AUTH_TWITTER_SECRET
    }),
    Tiktok({
      clientId: process.env.AUTH_TIKTOK_ID,
      clientSecret: process.env.AUTH_TIKTOK_SECRET
    })
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        return profile?.email_verified && profile.email?.endsWith('@gmail.com') ? true : false
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...user,
          username: user.username,
          roleId: user.roleId
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
        username: token.username,
        roleId: token.roleId
      }

      return session
    },
    async authorized({ auth }) {
      return !!auth
    },
  },
  // debug: process.env.NODE_ENV !== 'production'
})