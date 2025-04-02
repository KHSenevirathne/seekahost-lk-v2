import Hero from "@/components/business-web-hosting/Hero";
import OrderNow1 from "@/components/business-web-hosting/OrderNow-1";
import OrderNow2 from "@/components/business-web-hosting/OrderNow-2";
import OrderNow3 from "@/components/business-web-hosting/OrderNow-3";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Navbar2 from "@/components/shared/Navbar2";
import PackagesPrices from "@/components/shared/PackagePrices";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/wordpress-hosting/ControlPanel";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";

export const metadata = {
    title: "Business Web Hosting Sri Lanka: Best Business Web Hosting"
}


export default function BusinessWebHosting() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <PackagesPrices />
            <PeopleCards />
            <OrderNow1 />
            <ScreenshotSlider />
            <ControlPanel />
            <OrderNow2 />
            <Video />
            <OrderNow3 />
            <Reviews />
            <FAQs />
            <Footer />
        </>
    );
}