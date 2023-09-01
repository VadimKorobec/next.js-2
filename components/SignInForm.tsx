'use client'

import { useRouter } from "next/navigation"
import {signIn} from 'next-auth/react'
import type { FormEventHandler } from "react"
import { redirect } from "next/dist/server/api-utils"

const SignInForm = () => {
    const router = useRouter()

    const handleSubmit:FormEventHandler<HTMLFormElement> =async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

       const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect:false,
       })
        
        if (res && !res.error) {
            router.push('/profile') 
        } else {
            console.log(res)
        }
    }

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col justify-center w-72 m-auto gap-2" >
            <input className= 'border-slate-950 rounded border px-1 py-1 outline-none' type="email" name="email" placeholder="Email" required />
            <input className= 'border-slate-950 rounded border px-1 py-1 outline-none' type="password" name="password" placeholder="Password" required />
            <button className=" bg-gray-500 px-1 py-1 rounded-md font-medium  text-base" type="submit">Sign In</button>
        </form>
    )
}

export default SignInForm