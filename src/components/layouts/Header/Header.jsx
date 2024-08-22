import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Navbar from "../../fragments/Navigation/Navbar"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    const [isOpen, setIsOpen] = useState(false);
    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const location = useLocation();

    const navItems = [
        { name: "Beranda", path: "/" },
        { name: "Hiburan", path: "/hiburan-categories" },
        { name: "Gaya Hidup", path: "/gayahidup-categories" },
        { name: "Olahraga", path: "/olahraga-categories" },
        { name: "Ekonomi", path: "/ekonomi-categories" },
        { name: "Teknologi", path: "/teknologi-categories" },
        { name: "Nasional", path: "/nasional-categories" },
        { name: "Internasional", path: "/internasional-categories" },
    ]

    return (
        <>
            <header className={`z-50 fixed w-full bg-white border-b-2 px-7 lg:px-[72px] py-8 transition-all duration-200 ease-in-out ${showNavbar ? `transform translate-y-0` : 'transform -translate-y-full'}`}>
                <div className='flex items-center justify-between'>
                    <a className="mr-20" href="#">
                        <img src="/img/logoHeader.png" alt="" />
                    </a>
                    <Navbar />
                    <button onClick={toogleNavbar} className="block z-50 lg:hidden">
                        {isOpen ? <X size={36} /> : <Menu size={36} />}
                    </button>
                </div>
            </header>
            {isOpen &&
                <nav className="no-doc-scroll fixed bg-white w-[50vw] h-screen right-0 border-l-2 z-50">
                    <button className="relative w-full flex justify-end top-8 right-7" onClick={toogleNavbar}>
                        <X size={36} />
                    </button>
                    <ul className="h-full flex flex-col items-center justify-center gap-10">
                        {navItems.map(item => (
                            <li onClick={toogleNavbar}
                                key={item.path}
                                className={`font-medium hover:underline hover:underline-offset-4 hover:text-blue-400 transition-all duration-300 ease-in-out ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                                    }`}
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            }
        </>
    )
}

export default Header