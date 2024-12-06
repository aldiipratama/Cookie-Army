import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Twitter from 'next-auth/providers/twitter'
import Tiktok from 'next-auth/providers/tiktok'

export const { auth, handlers } = NextAuth({
  pages: {
    signIn: '/login'
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
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
  }
})