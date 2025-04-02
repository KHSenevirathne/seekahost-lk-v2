import Solution from "@/components/shared/Solution";
import Video from "@/components/shared/Video";
import Hero from "@/components/register-domain/Hero";
import OrderNow from "@/components/register-domain/OrderNow";
import Navbar from "@/components/shared/Navbar";
import PackagesPrices from "@/components/shared/PackagePrices";
import Reviews from "@/components/shared/Review";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";

export const metadata = {
    title: "Register Domain"
}

export default function registerDomain() {

    return (
        <>
            {/* <Navbar /> */}
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <OrderNow />
            <Solution />
            <Video />
            <PackagesPrices />
            <Reviews />
            <FAQs />
            <Footer />
        </>
    )
}