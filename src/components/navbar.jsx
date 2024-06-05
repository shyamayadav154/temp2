/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/F2qKsS3Xb1I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Navbar() {
    return (
        <>
            <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-[800px] bg-white shadow-lg dark:bg-gray-950 rounded-[1000px]">
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
