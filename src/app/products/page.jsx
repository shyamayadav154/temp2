import Link from "next/link"

function Products() {
    return (
        <section className="mx-auto">
            <h2 className="mb-5 text-center text-3xl font-bold tracking-tighter sm:text-5xl">Product Range</h2>
            <article className="flex flex-col gap-6 md:mx-auto mx-5" data-aos="fade-up">
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    ASA Engine Equipment is one stop dependable source of the range of OEM quality, competitively priced
                    and warranty backed Locomotive and Marine replacement engine parts for ALCO, EMD and GE Engines. Our
                    range consists of Locomotive and Marine Engine Parts such as Cylinder heads and Liners, Valves &
                    Valves related parts, Bearings and Bushes, Piston and Piston rings, Oil Coolers & radiators, Engine
                    gears and bull gears, Traction pinion and gears, Exhaust manifold, Chambers and couplings, Camshaft
                    assemblies and Cam Segments, Turbocharger Parts and bearings.
                </p>
            </article>
                        <div className="mx-auto py-20 grid max-w-5xl items-start gap-8 text-center sm:grid-cols-2 md:gap-20 lg:grid-cols-3" data-aos='fade-up'>
                <section className="flex items-start flex-col gap-4">
                    <div className="flex w-full h-52 md:w-52 items-center justify-center rounded-lg bg-gray-100">
                        <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">EMD</h3>
                    </div>
                    <Link href='/products/emd' s className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Part Gallery
                    </Link>
                </section>
                <section className="flex items-start flex-col gap-4">
                    <div className="flex w-full h-52 md:w-52 items-center justify-center rounded-lg bg-gray-100">
                        <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">ALCO</h3>
                    </div>
                    <Link href='/products/alco' className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Part Gallery
                    </Link>
                </section>
                <section className="flex items-start flex-col gap-4">
                    <div className="flex w-full h-52 md:w-52  items-center justify-center rounded-lg bg-gray-100">
                        <h3 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-2xl">GE</h3>
                    </div>
                    <Link href='/products/ge' className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Part Gallery
                    </Link>
                </section>
            </div>
        </section>
    )
}

export default Products
