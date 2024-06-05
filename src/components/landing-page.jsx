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
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Carousel } from "react-responsive-carousel";
import FullWidthCarousel from "./carousel";
import { CarouselSh } from "./carousel-sh";
import { Navbar } from "./navbar";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        {/* <section > */}
        {/*   <CarouselSh/> */}
        {/* </section> */}
        <section className="w-full h-[70vh] relative overflow-hidden">
          <img
            alt="Construction site"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gray-900/50 z-10" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-6 text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Ready to Keep Your Locomotives Running?
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
          ASA Engine Equipment is a supplier of locomotive engine parts to railroad operators, rebuilders and marine industries around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Us
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-5">
                  About Us
                </h2>
                <article className="flex gap-6 flex-col"> 
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
ASA Engine Equipment is a supplier of locomotive engine parts to railroad operators, rebuilders and marine industries around the world. An industry leader since 20 years, our reputation in the railroad & marine industry is the direct reflection of our commitment to integrity at every level of our business.
    </p>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

With the strength and experience gained through decades of service, we are able to offer an unbeatable combination of Quality and price. We specialize in aftermarket parts for GE, EMD and ALCO Engines.

                </p>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

ASA Engine  equipment is a privately held exporting company that develops, produces, sources  through its manufacturing associate companies and export quality locomotive  parts for  GE,EMD and ALCO engines. We represent many leading ISO 9001/IATF 16949 Quality Management System Certified Indian companies who are approved/Suppliers to OEM like Indian Railways (DLW), EMD and GE for export of fully machined Quality engine parts for GE, EMD and ALCO engines.

                </p>

                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

Our strength lies in full engineering and manufacturing support and capabilities of several QMS certified companies we represent for export of their locomotive parts. This also allows us to offer even parts which are either absolute or hard to source or not in production through reverse engineering.

                </p>
                </article>

              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 flex flex-col gap-7">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Focus
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ASA Engine Equipments has a portfolio of successful projects that
                  showcase our expertise and commitment to quality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
<div className="grid gap-1">
                <img
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  src="/placeholder.svg"
                />
                <h3 className="text-lg font-bold">
                  Customer Requirments
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
We at ASA Engine equipments are highly responsive to our customer’s part needs, feedbacks and issues. We believe in building long term customer relationship by understanding customer requirements and grow through identifying better ways to serve All customers.
                </p>
              </div>
<div className="grid gap-1">
                <img
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  src="/placeholder.svg"
                />
                <h3 className="text-lg font-bold">
                  Product Quality
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
We provide high quality standard Railway and Marine Replacement spare parts. The new and reconditioned railway & marine replacement spare parts are fully manufactured and sourced by adhering to the requirements of international standards (ISO) with quality assurance and continuous improvement.
</p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  src="/placeholder.svg"
                />
                <h3 className="text-lg font-bold">On Time Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
While any company can promise a quick turn-around, not every company delivers it. ASA Engine Equipments prides our self on providing on time delivery of the finished engine spare parts, using a proven process that allows for a quick turn-around from quote to delivery.
</p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  src="/placeholder.svg"
                />
                <h3 className="text-lg font-bold">Customer Satisfaction</h3>
                <p className=" text-gray-500 dark:text-gray-400">
We at ASA Engine Equipments aims to achieve Customer satisfaction by collecting customer feedback, turning customer feedbacks into action, improving our product and services and follow up with our Customers on regular basis.
</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 flex flex-col gap-7">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ASA Engine Equipments has a team of experienced professionals who
                  specialize in a wide range of construction services, including
                  commercial, residential, and infrastructure projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <BuildingIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Commercial Construction</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We specialize in the construction of commercial buildings,
                  such as office spaces, retail stores, and industrial
                  facilities.
                </p>
              </div>
              <div className="grid gap-1">
                <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Residential Construction</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team has extensive experience in the construction of
                  single-family homes, multi-family units, and custom-built
                  residences.
                </p>
              </div>
              <div className="grid gap-1">
                <RouteIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Infrastructure Projects</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide construction services for infrastructure projects,
                  such as roads, bridges, and public utilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  If you have a Locomotive project in mind, we'd love to hear
                  from you. Contact us today to discuss your needs and get a
                  free quote.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Name"
                    type="text"
                  />
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Email"
                    type="email"
                  />
                </form>
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Project Details"
                    type="text"
                  />
                  <Button type="submit">Contact</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ASA Engine Equipments. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function RouteIcon(props) {
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
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}