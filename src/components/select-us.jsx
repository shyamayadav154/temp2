import { CircleCheck, CircleCheckBig, Clock, Gem, HandCoins, HeadphonesIcon, ShieldCheckIcon, UserCheck } from "lucide-react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6AzbtYEGTA7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function SelectUs() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="space-y-2 mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Select Us?</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover the key benefits that make our product the top choice for your needs.
                        </p>
                    </div>
                    <div className="grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center space-y-4">
                            <HandCoins className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">Low Costs</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We believe in providing superior quality OEM equivalent parts at lower cost keeping
                                    in view international quality assurance standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <ShieldCheckIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">Quality Assurance</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We are fully committed towards Product Quality, Quality assurance and Quality
                                    Control adhering to requirements of ISO 9001: 2015 standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <HeadphonesIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">Customer Service</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    We strive to achieve profitable growth through superior customer service,
                                    responsiveness to customer requests and sharing our knowledge with our customers.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <CircleCheckBig className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">Warranty</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our dedicated support team is always here to assist you every step of the way.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <Gem className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">Values</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Focus on Customer. Do business with integrity and Trust Deliver Parts as committed
                                    –On time – Every time Act quickly with a sense of Urgency –Every time against every
                                    parts enquiry.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <Clock className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">On Time Delivery</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our on -time delivery of parts drives better collaboration with our customers,
                                    ensures reliability of delivery and most importantly customer loyalty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

