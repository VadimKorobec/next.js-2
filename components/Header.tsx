import Navigate from "./Navigate"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    {label:'About',href:'/about'}
]

const Header = () => {
    return <header className=" px-3 py-3 bg-gray-500  flex justify-evenly mb-6">
        <Navigate navLinks={navItems}/>
    </header>
}

export default Header