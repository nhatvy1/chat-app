import { axiosInstanceNonAuth } from '@/axios/instance'
import { backend_url } from '@/lib/constant'
import { NextAuthOptions } from 'next-auth'
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

        const response = await axiosInstanceNonAuth.post('/auth/sign-in', { email, password })
        if(response) {
          console.log('Check res: ', response)
          return response
        }

        return null
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('Check token: ', token)
      if (user) {
        return {  ...token,...user }
      }
      return token
    },
    async session({ token, session }) {
      session.user = token.user
      session.access_token = token.access_token
      session.refresh_token = token.refresh_token

      return session
    }
  },
  // pages: {
  //   signIn: '/sign-in'
  // }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
