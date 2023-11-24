import { Module } from '@nestjs/common';
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number,
      email: string
      fullName: string
    }

    access_token: string
    refresh_token: string
  }
}

import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {

  interface JWT {
    user: {
      id: number
      email: string
      fullName: string
    }

    access_token: string
    refresh_token: string

  }
}