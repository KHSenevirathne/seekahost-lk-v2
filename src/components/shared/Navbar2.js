'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Hosting from '../navbar-menu/Hosting';
import WordPress from '../navbar-menu/WordPress';
import Servers from '../navbar-menu/Server';
import Domains from '../navbar-menu/Domains';
import Ecommers from '../navbar-menu/Ecommers';

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);
    const [wordPressDropdownOpen, setWordPressDropdownOpen] = useState(false);

    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const [desktopWordPressDropdownOpen, setDesktopWordPressDropdownOpen] = useState(false);
    const [desktopServersDropdownOpen, setDesktopServersDropdownOpen] = useState(false);
    const [desktopDomainsDropdownOpen, setDesktopDomainsDropdownOpen] = useState(false);
    const [desktopEcommersDropdownOpen, setDesktopEcommersDropdownOpen] = useState(false);
    const pathname = usePathname();

    // Create a single ref for the entire navbar
    const navbarRef = useRef(null);

    // Function to close all desktop dropdowns
    const closeAllDropdowns = () => {
        setDesktopWebHostingDropdownOpen(false);
        setDesktopWordPressDropdownOpen(false);
        setDesktopServersDropdownOpen(false);
        setDesktopDomainsDropdownOpen(false);
        setWebHostingDropdownOpen(false);
        setDesktopEcommersDropdownOpen(false);
    };

    // Handle outside clicks
    useEffect(() => {
        function handleClickOutside(event) {
            // Close all dropdowns if the click is outside the navbar
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeAllDropdowns();
            }
        }

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    const isEcommersActive = () => {
        const ecommersPaths = ['/ecommers'];
        return ecommersPaths.some(path => pathname === path);
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
                        setDesktopEcommersDropdownOpen(false);
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
                        setDesktopEcommersDropdownOpen(false);
                    }}
                >
                    Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <Hosting />
                )}
            </div>
            <div className={`relative ${isEcommersActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => {
                        setDesktopEcommersDropdownOpen(!desktopEcommersDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                    }}

                >
                    eCommers
                </button>
                {desktopEcommersDropdownOpen && (
                    <Ecommers />
                )}
            </div>
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
                        setDesktopEcommersDropdownOpen(false);
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
                        setDesktopEcommersDropdownOpen(false);
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
                <div>
                    <button
                        onClick={() => setDomainsDropdownOpen(!domainsDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium" aria-expanded={webHostingDropdownOpen}
                    >
                        Domains & SSL
                        {domainsDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {domainsDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/register-domain" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                    </svg>
                                </div>
                                <div>
                                    Register Domain
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium" aria-expanded={webHostingDropdownOpen}
                    >
                        Hosting
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
                            <Link href="/business-web-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Business Web Hosting
                                </div>
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Cheap cPanel Hosting
                                </div>
                            </Link>
                            <Link href="/nodejs-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Node JS Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    eCommers
                </Link>
                <div>
                    <button
                        onClick={() => setWordPressDropdownOpen(!wordPressDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium" aria-expanded={webHostingDropdownOpen}
                    >
                        WordPress
                        {wordPressDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {wordPressDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/wordpress-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WordPress Web Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
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
        <nav ref={navbarRef} className="relative w-full bg-white p-4 lg:p-0 shadow">
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