import { Fragment, useEffect, useState } from "react"
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { logoImg } from "./navbar"

const navigation = [
    { name: "Home", href: "#", current: false },
    { name: "Sections", href: "#", current: false },
    { name: "Products", href: "#", current: false },
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
                className="fixed left-1/2 z-50 w-full -translate-x-1/2 bg-white shadow-lg md:top-5 md:max-w-[800px] md:rounded-[1000px] dark:bg-gray-950"
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
                                <div className="flex flex-1 items-center justify-center sm:items-stretch md:items-center sm:justify-start md:justify-between">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img className="h-12 w-auto" src={logoImg} alt="Your Company" />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-900 hover:bg-gray-700 hover:text-white",
                                                        "rounded-md px-3 py-2 text-sm font-medium"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-900 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <div className="mb-20 md:mb-16" />
        </>
    )
}
