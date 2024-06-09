/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2Cc2A4K75zJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Contact({isWhite=false}) {
    return (
        <section id='contact' className={`w-full ${isWhite?'':'bg-gray-100'} py-12 md:py-24 lg:py-24 dark:bg-gray-800`}>
            <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Have a question or want to work together? Find our contact information below.
                    </p>
                </div>
                <div className="grid w-full max-w-5xl grid-cols-1 gap-20 p-10 sm:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            32, GF, Street No. 3, Chander Vihar Delhi, 110092{" "}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                            <Link href="mailto:info@RRE-India.com" prefetch={false}> info@RRE-India.com </Link>
                            <Link href='mailto:sales@RRE-India.com' prefetch={false}>sales@RRE-India.com</Link>
                            <Link href='mailto:RRE-India@gmail.com' prefetch={false}>RRE-India@gmail.com</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
