/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2yBupH4xG1W
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

const productLInks = [
    {
        name: "Piston",
        imgUri: "https://i.imgur.com/2lYkGF8.png",
    },
    {
        name: "Cylinder Linear",
        imgUri: "https://i.imgur.com/nSrf4xm.png",
    },
    {
        name: "Cylinder Head",
        imgUri: "https://i.imgur.com/5tbxcFD.png",
    },
    {
        name: "Bushing",
        imgUri: "https://i.imgur.com/J4g0OXr.png",
    },
    {
        name: "Bearing",
        imgUri: "https://i.imgur.com/7Yq1ati.png",
    },
    {
        name: "Piston Rings",
        imgUri: "https://i.imgur.com/N7BzUjS.png",
    },
    {
        name: "Exhaust Valves",
        imgUri: "https://i.imgur.com/dsaKhhi.png",
    },
    {
        name: "Raditor",
        imgUri: "https://i.imgur.com/3M6YujU.png",
    },
    {
        name: "Lube Oil Cooler",
        imgUri: "https://i.imgur.com/kxq8R2K.png",
    },
    {
        name: "Camshaft Assembly",
        imgUri: "https://i.imgur.com/gE0xB7p.png",
    },
    {
        name: "Connecting Rod Fork",
        imgUri: "https://i.imgur.com/cpcPBQN.png",
    },
    {
        name: "Connecting Rod Blade",
        imgUri: "https://i.imgur.com/f3RZOGM.png",
    },
    {
        name: "Gear",
        imgUri: "https://i.imgur.com/QZx51VK.png",
    },
    {
        name: "Gear",
        imgUri: "https://i.imgur.com/NwCrcbf.png",
    },
    {
        name: "Gear",
        imgUri: "https://i.imgur.com/cPcZJ5h.png",
    },
    {
        name: "Manifold Assembly",
        imgUri: "https://i.imgur.com/Gl17WKU.png",
    },

]

const SingleProducgCard = ({ name, imgUri }) => {
    return (
        <div className="group relative overflow-hidden">
            <img
                src={imgUri}
                alt="Product 1"
                width={400}
                height={300}
                className="aspect-square min-h-60 w-full rounded-lg border bg-white object-contain p-10"
            />
            <div className="prose pt-2 dark:bg-gray-950">
                <h3 className="text-center text-lg text-gray-700 md:text-xl">{name}</h3>
            </div>
        </div>
    )
}

export default function ProductGallery() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <section className="w-full">
                <div className="container grid grid-cols-1 gap-5 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-2 xl:grid-cols-3">
                    {productLInks.map((product, index) => (
                        <SingleProducgCard key={index} {...product} />
                    ))}
                </div>
            </section>
        </div>
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
