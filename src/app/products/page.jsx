import ProductGallery from "@/components/product-gallery"
import Link from "next/link"

function Products() {
    return (
        <main>
            <section className="">
                <h2 className="mb-5 text-center text-3xl font-bold tracking-tighter sm:text-5xl">Product Range</h2>
                <article className="mx-5  md:mx-auto" data-aos="fade-up">
                    <p className="mx-auto max-w-5xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        RRE India Pvt Ltd is one stop dependable source of the range of OEM quality, competitively
                        priced and warranty backed Locomotive and Marine replacement engine parts for ALCO, EMD and GE
                        Engines. Our range consists of Locomotive and Marine Engine Parts such as Cylinder heads and
                        Liners, Valves & Valves related parts, Bearings and Bushes, Piston and Piston rings, Oil Coolers
                        & radiators, Engine gears and bull gears, Traction pinion and gears, Exhaust manifold, Chambers
                        and couplings, Camshaft assemblies and Cam Segments, Turbocharger Parts and bearings.
                    </p>
                </article>
                <div
                    className="mx-auto grid max-w-5xl items-start gap-8 py-20 text-center sm:grid-cols-2 md:gap-20 lg:grid-cols-3"
                    data-aos="fade-up"
                >
                    <section className="flex flex-col items-center justify-center gap-4">
                        <div className="flex h-52 w-full items-center justify-center rounded-lg bg-gray-100 md:w-52">
                            <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">EMD</h3>
                        </div>
                        <Link
                            href="/products/emd"
                            s
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Part Lists
                        </Link>
                    </section>
                    <section className="flex flex-col items-center justify-center gap-4">
                        <div className="flex aspect-square min-h-52 w-full items-center justify-center rounded-lg bg-gray-100 md:w-52">
                            <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">ALCO</h3>
                        </div>
                        <Link
                            href="/products/alco"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Part Lists
                        </Link>
                    </section>
                    <section className="flex flex-col items-center justify-center gap-4">
                        <div className="flex h-52 w-full items-center justify-center rounded-lg bg-gray-100 md:w-52">
                            <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">GE</h3>
                        </div>
                        <Link
                            href="/products/ge"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Part Lists
                        </Link>
                    </section>
                </div>
            </section>
            <section id='gallery' className="mx-auto bg-gray-100">
                <div className="py-10 space-y-10 max-w-5xl mx-auto ">
                    <h3 className="px-8 text-2xl font-semibold md:text-3xl"> Product Gallery </h3>
                    <ProductGallery />
                </div>
            </section>
        </main>
    )
}

export default Products
