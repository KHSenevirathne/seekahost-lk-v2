import Image from "next/image"
export default function OrderNow3() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4">
                        Multiple IP WordPress Hosting
                    </h2>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                        If you are looking for multiple IP hosting for WordPress blogs or websites you use for SEO, then SeekaHost offers the best solution.
                    </p>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                        As the leading PBN host for WordPress sites in the world, you get unbeatable prices via the blog hosting control penal.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                        Order Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/wordpress-hosting/order-now-3.webp"
                            alt="Order now Image"
                            width={609}
                            height={486}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>


            </section>
        </>
    )
}