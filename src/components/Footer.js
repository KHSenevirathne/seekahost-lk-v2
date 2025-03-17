import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      <div className="flex justify-center items-center py-10">
        <div className="relative bg-blue-600 rounded-3xl px-10 md:px-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


          <div className="text-white md:w-1/2 py-10 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to make a secure future?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6">
              Get your personalized insurance quote now and take the first step
              toward a worry-free future. Your security matters.
            </p>


            <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow outline-none text-black px-2"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Sign Up Free
              </button>
            </div>
          </div>


          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/phone-mockup.webp"
              alt="Phone Mockup"
              width={292}
              height={369}
              className="w-60 h-auto drop-shadow-lg md:mt-21"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-[#001F40] text-white py-10">
        <div className="container mx-auto lg:px-32 px-5">
          <div className="mb-8">
            <div className="mb-4">
              <Image src="/footer-logo.webp" alt="SeekaHost" width={147} height={62} />
            </div>
            <hr className="border-gray-700 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About</h3>
              <p className="text-gray-300 mb-2">© 2024 SeekaHost™ Ltd.</p>
              <p className="text-gray-300">Web Hosting Company</p>

              <div className="flex mt-6 space-x-2">
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">ig</span>
                </Link>
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">tw</span>
                </Link>
                <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-navy-950 transition-colors">
                  <span className="text-sm">fb</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Hosting Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Blog Hosting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Domain Registration</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Blog Hosting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Support Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Hosting Plans</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Different Class IP Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">SEO Hosting A-Class IP</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Website Hosting</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">WordPress Blog Hosting</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © Seekahost 2024
            </div>
            <div className="text-gray-400 text-sm">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-white">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}