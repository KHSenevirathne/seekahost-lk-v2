import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Reviews from "@/components/shared/Review";
import Topbar from "@/components/shared/Topbar";
import Video from "@/components/shared/Video";
import ControlPanel from "@/components/wordpress-hosting/ControlPanel";
import Hero from "@/components/wordpress-hosting/Hero";
import OrderNow1 from "@/components/wordpress-hosting/OrderNow-1";
import OrderNow2 from "@/components/wordpress-hosting/OrderNow-2";
import OrderNow3 from "@/components/wordpress-hosting/OrderNow-3";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";
import BacktoTop from "@/components/shared/BacktoTop";
import WpPackagesPrices from "@/components/wordpress-hosting/WpPackagePrice";

export const metadata = {
    title: "WordPress Hosting Sri Lanka: Best WordPress Web Hosting"
}

export default function WordpressHosting() {
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <Hero />
            <div id="wordpress-package-prices-section">
                <WpPackagesPrices />
            </div>
            <PeopleCards />
            <OrderNow1 />
            <ScreenshotSlider />
            <ControlPanel />
            <OrderNow2 />
            <Video />
            <OrderNow3 />
            <Reviews />
            <FAQs />
            <BacktoTop />
            <Footer />
        </>
    )
}