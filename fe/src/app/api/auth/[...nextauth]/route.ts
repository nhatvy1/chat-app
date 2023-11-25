import { axiosInstanceNonAuth } from '@/axios/instance'
import { NextAuthOptions, Session } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'Nhập email'
        },
        password: { label: 'Password', type: 'password', placeholder: 'Nhập mật khẩu' }
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const { email, password } = credentials
        const response:any = await axiosInstanceNonAuth.post('/auth/sign-in', { email, password })
        if(response && response.statusCode === 200) {
          // console.log('Check response: ', response.result)
          return response.result
        }

        return null
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log('Check jwt token: ', user)
        return {...token, ...user }
      }
      return token
    },
    async session({ token, session }) {
      // const sessionInfo = {
      //   user: {
      //     id: token.user.id,
      //     fullName: token.user.fullName,
      //     email: token.user.email,
      //     avatar: token.user.avatar,
      //     phone: token.user.phone,
      //   },
      //   access_token: token.access_token,
      //   refresh_token: token.refresh_token,
      //   // expires: session.expires
      // }
      // return sessionInfo as Session

      session.user = token.user
      session.access_token = token.access_token
      session.refresh_token = token.refresh_token
      return Promise.resolve(session)
    }
  },
  pages: {
    signIn: '/sign-in'
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
