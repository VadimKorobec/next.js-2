'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { FC } from "react"

type NavLink = {
    label: string,
    href:string,
}

type NavigateProps = {
    navLinks:NavLink[]
}

const Navigate:FC<NavigateProps> = ({navLinks}) => {
    const pathname = usePathname()
    return <>{navLinks.map(link => {
        const isActive = pathname === link.href
        return <Link key={link.label} href={link.href} className={isActive ? 'link-active':'link'}>{link.label}</Link>
    })}</>
}

export default Navigate