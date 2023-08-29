import Link from "next/link"


const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <h1 className=" text-center font-bold text-3xl mb-2">About us</h1>
        <ul className=" flex justify-center gap-2 font-medium mb-2">
            <li className=" py-1 px-1 bg-gray-400 rounded-md">
                <Link href='/about/contacts'>Contacts</Link>
            </li>
            <li className=" py-1 px-1 bg-gray-400 rounded-md">
                <Link href='/about/team'>Team</Link>
            </li>
        </ul>
        {children}
    </div>
}

export default AboutLayout