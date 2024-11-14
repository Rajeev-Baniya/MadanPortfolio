'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const currentPath = usePathname();

    const isActive = (path: string) => {
        return currentPath === path
    }


    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const changeNavBg = () => {
            if (window.scrollY >= 60) {
                setNavBg(true)
            } else {
                setNavBg(false)
            }
        }
        window.addEventListener('scroll', changeNavBg);
    }, [navBg])



    const pages = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up by removing the class when the component unmounts
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [currentPath]);

    return (
        <div>
            <header className={`fixed w-full header nav-padding ${navBg ? 'bg-black' : ''} transition-all z-50`}>
                <nav className="flex justify-between gap-4">
                    <Link href="/" className="logo block">Madan </Link>
                    <ul className="flex gap-[4.2rem] links">
                        {pages.map((each, index) => (
                            <li key={index} className={isActive(each.path) ? "active" : ''}><Link href={each.path}>{each.name}</Link></li>
                        ))}
                    </ul>
                    <GiHamburgerMenu className={`absolute top-1/2  -translate-y-1/2 right-[3rem] text-[2.4rem] hamburger `} onClick={toggleSidebar} />
                    {/* <MdClose className={`absolute top-1/2  -translate-y-1/2 right-[3rem] text-[2.4rem] hamburger`} onClick={toggleSidebar} /> */}
                    <div
                        className={`fixed top-[7rem] left-0 h-full bg-black text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                            } transition-transform duration-300 ease-in-out md:hidden`}
                    >
                        <nav className="p-8 space-y-4">

                            {pages.map((each, index) => (
                                <Link href={each.path} className={`block p-2 hover:bg-gray-700 rounded ${isActive(each.path) ? '!text-primary' : ""}`} key={index}>
                                    {each.name}
                                </Link>
                            ))}

                        </nav>
                    </div>


                </nav>
            </header>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-[#00000055]  ${isOpen ? 'z-40' : '-z-10'}`} onClick={toggleSidebar}>
            </div>
        </div>

    )
}