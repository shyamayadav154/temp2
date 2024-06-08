"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { logoImg } from "./navbar"
 
import {
    NavigationMenuContent,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import Link from "next/link"



const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Sections", href: "#", current: false },
    { name: "Products", href: "/products", current: false },
    { name: "Contact Us", href: "#", current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function NavBarTui() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset

            if (currentScrollPos > prevScrollPos && currentScrollPos > 200) {
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
            <Disclosure
                as="nav"
                className="fixed left-1/2 z-50 w-full -translate-x-1/2 bg-white shadow-lg md:mt-5 md:max-w-[800px] md:rounded-[1000px] dark:bg-gray-950"
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-20 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:items-center md:justify-between">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img className="h-12 w-auto" src={logoImg} alt="Your Company" />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <DesktopNav />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="sm:hidden">
                            <PhoneNav />
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <div className="mb-20 md:mb-16" />
        </>
    )
}

const DesktopNav = () => {
    const pathname = usePathname()
    return (
        <nav className="hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <Link className="flex w-full items-center py-2 " href="/products">
                                    Products
                                </Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[400px] p-2">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                EMD
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Learn more about our flagship product.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                ALCO
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Explore our latest product offering.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                GE
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Check out our enterprise-grade solution.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                Pricing
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[550px] grid-cols-2 p-2">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                Blog
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Read our latest blog posts.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                Documentation
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Learn how to use our products.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            href="#"
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                Help Center
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                Get help with our products.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            />
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>    )
}

const PhoneNav = () => {
    return (
        <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
                <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? "bg-gray-900 text-white" : "text-gray-900 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                >
                    {item.name}
                </DisclosureButton>
            ))}
        </div>
    )
}
