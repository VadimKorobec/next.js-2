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
            <Link className="link" href='/profile'>Profile</Link>
        )}
        {session.data ? <Link className="link" href='#' onClick={()=>signOut({callbackUrl:'/'})}>SignOut</Link> : <Link className="link" href='/signin'>SignIn</Link>}
    </>
}

export default Navigate