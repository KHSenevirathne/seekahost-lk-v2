'use client';

import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScreenshotSlider() {
    // Array of screenshot images
    const screenshots = [
        "/images/wordpress-hosting/screenshot-1.webp",
        "/images/wordpress-hosting/screenshot-1.webp",
        "/images/wordpress-hosting/screenshot-1.webp",
        "/images/wordpress-hosting/screenshot-1.webp"
    ];

    // State for current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    // State to track the slide that's transitioning out
    const [prevSlide, setPrevSlide] = useState(null);
    // State to track if a transition is happening
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Handle slide change
    const changeSlide = (index) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setPrevSlide(currentSlide);
        setCurrentSlide(index);
        
        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
            setPrevSlide(null);
        }, 500);
    };

    // Handle auto sliding
    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % screenshots.length;
            changeSlide(nextSlide);
        }, 5000); // Increased time to allow for transitions

        return () => clearInterval(interval);
    }, [currentSlide, screenshots.length, isTransitioning]);

    return (
        <section className="bg-[#F5FAFF]">
            <div className="max-w-7xl container mx-auto flex flex-col md:flex-row">
                <div className="md:w-3/5 w-full bg-gradient-to-t from-[#136CC9] to-[#09407A] flex justify-end items-right py-20 relative">
                    <div className="w-3/4 relative overflow-hidden">
                        {/* Container has overflow hidden to clip animations */}
                        <div className="relative" style={{ height: "auto" }}>
                            {screenshots.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out`}
                                    style={{
                                        transform: index === currentSlide 
                                            ? 'translateX(0)' 
                                            : index === prevSlide 
                                                ? 'translateX(100%)' 
                                                : 'translateX(100%)',
                                        opacity: index === currentSlide ? 1 : index === prevSlide ? 0 : 0,
                                        zIndex: index === currentSlide ? 2 : index === prevSlide ? 1 : 0,
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`WordPress Hosting Control Panel ${index + 1}`}
                                        width={760}
                                        height={530}
                                        className="w-full h-auto rounded-l-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Static image for layout reference - hidden from view */}
                        <div className="opacity-0 invisible">
                            <Image
                                src={screenshots[0]}
                                alt="WordPress Hosting Control Panel placeholder"
                                width={760}
                                height={530}
                                className="w-full h-auto rounded-l-lg shadow-lg"
                            />
                        </div>
                        
                        {/* Dots indicator */}
                        
                    </div>
                    <div className="absolute bottom-8 right-8 flex justify-center space-x-2">
                            {screenshots.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => changeSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full ${
                                        index === currentSlide ? "bg-white" : "bg-white opacity-30"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    disabled={isTransitioning}
                                />
                            ))}
                        </div>
                </div>
                <div className="md:w-2/5 w-full md:pl-12 mt-10 md:mt-0 flex flex-col justify-center px-4 md:px-0">
                    <div><h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">Our Solutions</h1></div>
                    <h2 className="mt-2 text-2xl md:text-4xl font-bold">
                        Inside WordPress Hosting Control Panel
                    </h2>
                    <ul className="space-y-2 mb-8 my-8">
                        <li className="flex items-start md:text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start md:text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start md:text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                            Get Started
                        </button>
                        <Link
                            href="#"
                            className="flex items-center justify-center text-black text-base sm:text-lg md:text-xl font-medium hover:text-blue-600 transition-colors gap-1 sm:gap-2 py-2"
                        >
                            Learn More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}