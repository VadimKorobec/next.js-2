'use client'
import { SessionProvider } from "next-auth/react"
import { FC } from "react"

type ProvidersProps = {
    children:React.ReactNode
}
 
export const Providers:FC<ProvidersProps> = ({children}) => {
    return <SessionProvider>
        {children}
    </SessionProvider>
}