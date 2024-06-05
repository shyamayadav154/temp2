/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fxXodd5PXvF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div>
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={600}
          className="w-full rounded-lg overflow-hidden aspect-square object-cover border border-gray-200 dark:border-gray-800"
        />
      </div>
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Acme Wireless Headphones</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
          Experience the ultimate in sound quality and comfort with our Acme Wireless Headphones. Crafted with premium
          materials and advanced audio technology, these headphones deliver an immersive listening experience that will
          transport you to a new level of audio bliss.
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg">Buy Now</Button>
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
