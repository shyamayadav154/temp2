import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset

            if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                setIsNavbarVisible(false)
            } else {
                setIsNavbarVisible(true)
            }

            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos])


    return (
        <>
            <header className={` ${isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} fixed left-1/2 md:top-5 z-50 w-full md:max-w-[800px] -translate-x-1/2 md:rounded-[1000px] bg-white shadow-lg dark:bg-gray-950`}>
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link className="flex items-center" href="#">
                        <img
                            src="https://asa-equipments.com/wp-content/uploads/2021/02/ASA_new_logo_final.png"
                            width={75}
                            height={75}
                        />
                    </Link>
                    <nav className="flex items-center space-x-6">
                        <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                            Home
                        </Link>
                        <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                            About
                        </Link>
                        <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                            Services
                        </Link>
                        <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
                <div className="mb-14"/>
        </>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
