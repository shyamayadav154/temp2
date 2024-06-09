/* eslint-disable @next/next/no-img-element */
"use client"
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Wq64ZKJQVCQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckIcon, ClockIcon, StarIcon, ThumbsUpIcon } from "lucide-react"
import { CarouselSh } from "./carousel-sh"
import Footer from "./footer"
import NavBarTui from "./navtui"
import { Navbar } from "./navbar"
import { NavLat } from "./nav-lat"
import Link from "next/link"
import ProductGallery from "./product-gallery"
import SelectUs from "./select-us"
import Contact from "./contact"

const pimg1 = "https://asa-equipments.com/wp-content/uploads/2021/02/Engine-Gears-Pinions-1.jpeg"
const pimg2 = "https://asa-equipments.com/wp-content/uploads/2021/02/Piston-Pins.jpeg"
const pimg3 = "https://asa-equipments.com/wp-content/uploads/2021/02/Connecting-Rod-Fork-blade.jpg"
const pimg4 = "https://asa-equipments.com/wp-content/uploads/2021/02/Manifold-Assemblies.jpg"

export function LandingPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <NavLat />
            {/* <NavBarTui/> */}
            {/* <Navbar /> */}
            <main className="flex-1">
                <section>
                    <CarouselSh />
                </section>
                {/* <section className="relative h-[70vh] w-full overflow-hidden"> */}
                {/*     <img */}
                {/*         alt="Construction site" */}
                {/*         className="absolute inset-0 h-full w-full object-cover object-center" */}
                {/*         src="/placeholder.svg" */}
                {/*     /> */}
                {/*     <div className="absolute inset-0 z-10 bg-gray-900/50" /> */}
                {/*     <div className="relative z-20 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center md:px-6"> */}
                {/*         <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"> */}
                {/*             Ready to Keep Your Locomotives Running? */}
                {/*         </h1> */}
                {/*         <p className="max-w-[700px] text-gray-300 md:text-xl"> */}
                {/*             RRE India Pvt Ltd is a supplier of locomotive engine parts to railroad operators, */}
                {/*             rebuilders and marine industries around the world. */}
                {/*         </p> */}
                {/*         <div className="flex flex-col gap-4 sm:flex-row"> */}
                {/*             <Link */}
                {/*                 className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" */}
                {/*                 href="#" */}
                {/*             > */}
                {/*                 Contact Us */}
                {/*             </Link> */}
                {/*             <Link */}
                {/*                 className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" */}
                {/*                 href="#" */}
                {/*             > */}
                {/*                 Learn More */}
                {/*             </Link> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </section> */}

                <section id='about' className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6" data-aos="">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="mb-5 text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
                                <article className="flex flex-col gap-6" data-aos="fade-up">
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        RRE India Pvt Ltd is a supplier of locomotive engine parts to railroad
                                        operators, rebuilders and marine industries around the world. An industry leader
                                        since 2010, our reputation in the railroad & marine industry is the direct
                                        reflection of our commitment to integrity at every level of our business.
                                    </p>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        With the strength and experience gained through decades of service, we can offer
                                        an unbeatable combination of Quality and price. We specialize in aftermarket
                                        parts for GE, EMD and ALCO Engines.
                                    </p>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        RRE India Pvt Ltd is a privately held exporting company that develops, produces,
                                        sources through its manufacturing associate companies and export quality
                                        locomotive parts for GE,EMD and ALCO engines. We represent many leading ISO
                                        9001/IATF 16949 Quality Management System Certified Indian companies who are
                                        approved/Suppliers to OEM like Indian Railways (DLW), EMD and GE for export of
                                        fully machined Quality engine parts for GE, EMD and ALCO engines.
                                    </p>

                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Our strength lies in full engineering and manufacturing support and capabilities
                                        of several QMS certified companies we represent for the export of their
                                        locomotive parts. This also allows us to offer even parts which are either
                                        absolute or hard to source or not in production through reverse engineering.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto flex flex-col gap-7 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Focus</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

                                    RRE India Pvt Ltd has a team of experienced professionals who specialize in a wide
                                    range of construction services, including commercial, residential, and
                                    infrastructure projects.
                                </p>
                            </div>
                        </div>
                        <div className="items-middle mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
                            <div className="grid gap-1 rounded-lg bg-white p-6 shadow-lg" data-aos="fade-up">
                                {/* <img */}
                                {/*   alt="Project 1" */}
                                {/*   className="aspect-video overflow-hidden rounded-xl object-cover" */}
                                {/*   src="/placeholder.svg" */}
                                {/* /> */}
                                <div className="flex items-center">
                                    <CheckIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                                </div>
                                <h3 className="text-lg font-bold">Customer Requirements</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We at RRE India are highly responsive to our customer’s part needs, feedback and
                                    issues. We believe in building long-term customer relationship by understanding
                                    customer requirements and grow through identifying better ways to serve all our
                                    customers.
                                </p>
                            </div>
                            <div className="grid gap-1 rounded-lg bg-white p-6 shadow-lg" data-aos="fade-up">
                                {/* <img */}
                                {/*   alt="Project 1" */}
                                {/*   className="aspect-video overflow-hidden rounded-xl object-cover" */}
                                {/*   src="/placeholder.svg" */}
                                {/* /> */}
                                <div className="flex items-center">
                                    <StarIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                                </div>
                                <h3 className="text-lg font-bold">Product Quality</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We provide high quality standard Railway and Marine Replacement spare parts. The new
                                    and reconditioned railway & marine replacement spare parts are fully manufactured
                                    and sourced by adhering to the requirements of international standards (ISO) with
                                    quality assurance and continually improving the effectiveness of our quality
                                    management system.
                                </p>
                            </div>
                            <div className="grid gap-1 rounded-lg bg-white p-6 shadow-lg" data-aos="fade-up">
                                {/* <img */}
                                {/*   alt="Project 2" */}
                                {/*   className="aspect-video overflow-hidden rounded-xl object-cover" */}
                                {/*   src="/placeholder.svg" */}
                                {/* /> */}
                                <div className="flex items-center">
                                    <ClockIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                                </div>
                                <h3 className="text-lg font-bold">On Time Delivery</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    While any company can promise a quick turn-around, not every company delivers it.
                                    RRE India prides our self on providing on time delivery of the finished engine spare
                                    parts, using a proven process that allows for a quick turn-around from quote to
                                    delivery.
                                </p>
                            </div>
                            <div className="grid gap-1 rounded-lg bg-white p-6 shadow-lg" data-aos="fade-up">
                                {/* <img */}
                                {/*   alt="Project 3" */}
                                {/*   className="aspect-video overflow-hidden rounded-xl object-cover" */}
                                {/*   src="/placeholder.svg" */}
                                {/* /> */}
                                <div className="flex items-center">
                                    <ThumbsUpIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                                </div>
                                <h3 className="text-lg font-bold">Customer Satisfaction</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We at RRE India aims to achieve Customer satisfaction by collecting customer
                                    feedback, turning customer feedback into action, improving our product and services
                                    and follow up with our customers on regular basis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container mx-auto flex flex-col gap-20 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2" data-aos="fade-up">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
                            </div>
                        </div>
                        <section className="mx-auto max-w-5xl space-y-20">
                            <article className="prose ">
                                <h3>Our Products Range Includes Following:</h3>
                                <ul className="overflow-hidden">
                                    <li data-aos="fade-left">Cylinder heads and Liners</li>
                                    <li data-aos="fade-left" data-aos-delay="200">
                                        Valves & Valves related parts
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="300">
                                        Bearings and Bushes
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="400">
                                        Piston and Piston rings
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="500">
                                        Oil Coolers & Radiators
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="600">
                                        Engine gears and bull gears
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="700">
                                        Traction pinion and gears
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="800">
                                        Exhaust manifold, Chambers and couplings
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="900">
                                        Camshaft assemblies and Cam Segments
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="1000">
                                        Turbocharger Parts and bearings.
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="1200">
                                        Critical Parts like Crankcase, Camshaft Section, Oil pan, Cam housing, Frame and
                                        Cover Assembly, Air duct, Tri-Axle Bogie frame, 2 Axle bogie frame etc.
                                    </li>
                                </ul>
                            </article>
                            <div className="space-y-10">
                                    <h3 className="font-semibold px-8 text-2xl md:text-3xl"> Product Gallery </h3>
                                <ProductGallery />
                            </div>
                        </section>

                    </div>
                </section>
                <SelectUs/>

                {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"> */}
                {/*     <div className="flex flex-col items-center justify-center space-y-4 text-center"> */}
                {/*         <div className="space-y-2"> */}
                {/*             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product in Details</h2> */}
                {/*             <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"> */}
                {/*                 We understand Customer requirements and develop any locomotive engine or marine parts */}
                {/*                 based on Customer Drawings or Sample. */}
                {/*             </p> */}
                {/*         </div> */}
                {/*     </div> */}
                {/*     <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-6 md:grid-cols-2 md:px-6 md:py-16 lg:gap-12 lg:py-20"> */}
                {/*         <div data-aos="fade-right"> */}
                {/*             <img */}
                {/*                 src={pimg1} */}
                {/*                 alt="Product Image" */}
                {/*                 width={600} */}
                {/*                 height={600} */}
                {/*                 className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800" */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div className="space-y-4 md:space-y-6"> */}
                {/*             <h2 className="text-3xl font-bold md:text-3xl">Engine gear & Pinions</h2> */}
                {/*             <p className="text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400"> */}
                {/*                 A gear is a toothed wheel designed to transmit torque to another gear or toothed */}
                {/*                 component. Geared devices can change the speed, torque and direction of the power */}
                {/*                 source. Gears of different sizes produce a change in torque, creating a mechanical */}
                {/*                 advantage, through their gear ratio. */}
                {/*             </p> */}
                {/*         </div> */}
                {/*     </div> */}
                {/*     <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden px-4 py-6 md:grid-cols-2 md:px-6 md:py-10 lg:gap-12 lg:py-12"> */}
                {/*         <div data-aos="fade-left" className="md:order-2"> */}
                {/*             <img */}
                {/*                 src={pimg2} */}
                {/*                 alt="Product Image" */}
                {/*                 width={600} */}
                {/*                 height={600} */}
                {/*                 className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800" */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div className="space-y-4 md:order-1 md:space-y-6"> */}
                {/*             <h2 className="text-3xl font-bold md:text-3xl">Piston & Pins</h2> */}
                {/*             <p className="text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400"> */}
                {/*                 In an Internal combustion engine, the Piston pin connects the piston to the connecting */}
                {/*                 rod, and provides a bearing for the connecting rods to pivot upon as the piston moves. */}
                {/*             </p> */}
                {/*         </div> */}
                {/*     </div> */}
                {/*     <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-6 md:grid-cols-2 md:px-6 md:py-16 lg:gap-12 lg:py-12"> */}
                {/*         <div data-aos="fade-right"> */}
                {/*             <img */}
                {/*                 src={pimg3} */}
                {/*                 alt="Product Image" */}
                {/*                 width={600} */}
                {/*                 height={600} */}
                {/*                 className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800" */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div className="space-y-4 md:space-y-6"> */}
                {/*             <h2 className="text-3xl font-bold md:text-3xl">Connecting Rod-Fork & Blade</h2> */}
                {/*             <p className="text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400"> */}
                {/*                 Connecting rod is a high volume production critical component that is being used in */}
                {/*                 Internal Combustion (IC) engines. It connects a reciprocating piston to a rotating crank */}
                {/*                 shaft through a crank and transmits the power of combustion through the piston and to */}
                {/*                 the crank shaft. */}
                {/*             </p> */}
                {/*         </div> */}
                {/*     </div> */}
                {/*     <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden px-4 py-6 md:grid-cols-2 md:px-6 md:py-10 lg:gap-12 lg:py-12"> */}
                {/*         <div className="md:order-2" data-aos="fade-left"> */}
                {/*             <img */}
                {/*                 src={pimg4} */}
                {/*                 alt="Product Image" */}
                {/*                 width={600} */}
                {/*                 height={600} */}
                {/*                 className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800" */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div className="space-y-4 md:order-1 md:space-y-6"> */}
                {/*             <h2 className="text-3xl font-bold md:text-3xl">Manifold Assemblies</h2> */}
                {/*             <p className="text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400"> */}
                {/*                 This EMS 64 fabricated exhaust manifold finds usage in different horsepower ratings of */}
                {/*                 GM (EMD) locomotives. The assembly is fitted on the exhaust outlets and serves to guide */}
                {/*                 the exhaust gases to a common chamber and is designed to withstand the corrosive */}
                {/*                 atmosphere of the exhaust gases at temperature in excess of 600°C . */}
                {/*             </p> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </section> */}
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
