import Link from "next/link"

const Header = () => {
    return <header className=" px-3 py-3 bg-gray-500  flex justify-evenly mb-6">
        <Link href='/' className="font-bold text-base text-white no-underline hover:underline ">Home</Link>
        <Link href='/blog' className="font-bold text-base text-white no-underline hover:underline">Blog</Link>
        <Link href='/about' className="font-bold text-base text-white no-underline hover:underline">About</Link>
    </header>
}

export default Header