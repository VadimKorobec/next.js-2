import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const {GOOGLE_CLIENT_ID,GOOGLE_SECRET} = process.env

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID! ,
            clientSecret: GOOGLE_SECRET!,
        })
    ]
}