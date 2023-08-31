'use client'
import { useSession,signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { FC } from "react"

type NavLink = {
    label: string,
    href: string,
}

type NavigateProps = {
    navLinks: NavLink[]
}

const Navigate: FC<NavigateProps> = ({ navLinks }) => {
    const pathname = usePathname()
    const session = useSession()
    console.log(session)

    return <>{navLinks.map(link => {
        const isActive = pathname === link.href
        return <Link key={link.label} href={link.href} className={isActive ? 'link-active' : 'link'}>{link.label}</Link>
    })}
        {session.data && (
            <Link href='/profile'>Profile</Link>
        )}
        {session.data ? <Link href='#' onClick={()=>signOut({callbackUrl:'/'})}>SignOut</Link> : <Link href='/api/auth/signin'>SignIn</Link>}
    </>
}

export default Navigate