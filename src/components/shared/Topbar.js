'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Topbar() {

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center space-x-10 md:pr-15">
            <Link href="/about" className="hover:underline font-medium transition-all duration-300 text-lg">
                About
            </Link>
            <Link href="/contact" className="hover:underline font-medium transition-all duration-300 text-lg">
                Contact Us
            </Link>
            <Link
                href="#"
                className="hover:underline font-medium transition-all duration-300 text-lg"
            >
                Sign In
            </Link>
        </div>
    );

    return (
        <nav className="relative z-10 w-full bg-white shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-5">
                <Link href="/">
                    <Image src="/images/shared/navbar-logo.webp" alt="SeekaHost" width={200} height={93} priority />
                </Link>
                <DesktopMenu />
            </div>
        </nav>
    );
}