import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOGGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOGGLE_CLIENT_SECRET!,
        })]

})

export { handler as GET, handler as POST }