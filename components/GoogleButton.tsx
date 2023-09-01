'use client'
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'
    return (
        <div className="flex justify-center">
            <button className=" rounded-md px-2 py-2 bg-gray-500 mb-3" onClick={() => signIn('google', { callbackUrl })}>Sign in with Google</button>
            </div>
    )
}

export default GoogleButton