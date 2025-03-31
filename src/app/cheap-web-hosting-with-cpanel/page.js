import Hero from "@/components/cheap-web-hosting-with-cpanel/Hero";
import OrderNow1 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-1";
import OrderNow2 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-2";
import OrderNow3 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-3";
import OrderNow4 from "@/components/cheap-web-hosting-with-cpanel/OrderNow-4";
import MaintainPage from "@/components/MaintainPage";
import FAQs from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PackagesPrices from "@/components/shared/PackagePrices";
import Reviews from "@/components/shared/Review";
import ControlPanel from "@/components/wordpress-hosting/ControlPanel";
import PeopleCards from "@/components/wordpress-hosting/PeopleCards";
import ScreenshotSlider from "@/components/wordpress-hosting/ScreenshotSlider";

export const metadata = {
    title: "Cheap Web Hosting With cPanel - Sri lanka's Best Host"
}


export default function CheapWebHostingWithcPanel() {
    return (
        <>
        <Navbar />
        <Hero />
        <PackagesPrices />
        <PeopleCards />
        <OrderNow1 />
        <ScreenshotSlider />
        <ControlPanel />
        <OrderNow2 />
        <OrderNow3 />
        <OrderNow4 />
        <Reviews />
        <FAQs />
        <Footer />
        </>
    );
}