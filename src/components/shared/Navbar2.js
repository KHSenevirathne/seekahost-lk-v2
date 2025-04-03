'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Hosting from '../navbar-menu/Hosting';
import WordPress from '../navbar-menu/WordPress';
import Servers from '../navbar-menu/Server';
import Domains from '../navbar-menu/Domains';

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const [desktopWordPressDropdownOpen, setDesktopWordPressDropdownOpen] = useState(false);
    const [desktopServersDropdownOpen, setDesktopServersDropdownOpen] = useState(false);
    const [desktopDomainsDropdownOpen, setDesktopDomainsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };

    const isWebHostingActive = () => {
        const webHostingPaths = ['/business-web-hosting', '/cheap-web-hosting-with-cpanel', '/nodejs-hosting'];
        return webHostingPaths.some(path => pathname === path);
    };

    const isWordpressActive = () => {
        const wordpressPaths = ['/wordpress-hosting'];
        return wordpressPaths.some(path => pathname === path);
    };

    const isServersActive = () => {
        const serversPaths = ['/servers'];
        return serversPaths.some(path => pathname === path);
    };

    const isDomainsActive = () => {
        const domainsPaths = ['/register-domain'];
        return domainsPaths.some(path => pathname === path);
    };

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center md:pr-15">

            <div className={`relative ${isDomainsActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => {
                        setDesktopDomainsDropdownOpen(!desktopDomainsDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                    }}
                >
                    Domains & SSL
                </button>
                {desktopDomainsDropdownOpen && (
                    <Domains />
                )}
            </div>
            <div className={`relative ${isWebHostingActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => {
                        setDesktopWebHostingDropdownOpen(!desktopWebHostingDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                    }}
                >
                    Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <Hosting />
                )}
            </div>
            <Link
                href="#"
                className={`font-medium transition-all duration-300 text-lg p-4 ${isActive('/ecommerce')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                eCommerce
            </Link>
            <div className={`relative ${isWordpressActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => {
                        setDesktopWordPressDropdownOpen(!desktopWordPressDropdownOpen);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                    }}

                >
                    WordPress
                </button>
                {desktopWordPressDropdownOpen && (
                    <WordPress />
                )}
            </div>
            <div className={`relative ${isServersActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => {
                        setDesktopServersDropdownOpen(!desktopServersDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                    }}

                >
                    Servers
                </button>
                {desktopServersDropdownOpen && (
                    <Servers />
                )}
            </div>
            <Link
                href="/blog"
                className={`font-medium transition-all duration-300 text-lg p-4 ${isActive('/blog')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                Blog
            </Link>
        </div>
    );

    const MobileMenu = () => (
        <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/register-domain" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Register Domain
                </Link>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium" aria-expanded={webHostingDropdownOpen}
                    >
                        Web Hosting
                        {webHostingDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {webHostingDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/wordpress-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                WordPress Web Hosting
                            </Link>
                            <Link href="/business-web-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Business Web Hosting
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Cheap cPanel Hosting
                            </Link>
                            <Link href="/nodejs-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Node JS Hosting
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <Link
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-lg font-medium" onClick={() => setMobileMenuOpen(false)}
                >
                    Sign In
                </Link>
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <nav className="relative w-full bg-white p-4 lg:p-0 shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-10">
                <Link href="/" className="lg:hidden">
                    <Image src="/images/shared/navbar-logo.png" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
                <MobileHamburger />
            </div>
            <MobileMenu />
        </nav>
    );
}