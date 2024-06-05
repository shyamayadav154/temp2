"use client"
import { LandingPage } from "@/components/landing-page"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])
    return <LandingPage />
}
