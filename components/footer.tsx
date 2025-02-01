"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black relative min-h-80 pt-10 pb-28 lg:pb-0 px-16 font-sans flex justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-[1700px]">
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
          <img className="w-60 h-auto grayscale" src="/thecptlocal2.png" />
          <p className="text-yellow text-sm pt-3">info@thecapetownlocal.com</p>
        </div>
        <div className="flex text-center lg:text-left lg:ml-auto flex-col lg:flex-row">
          <div className="lg:pl-20 pt-10 lg:pt-0">
            <p className="text-white text-sm pb-1">Company</p>
            <ul className="flex flex-col text-xs text-gray-400">
              <Link className="py-0.5 hover:text-yellow" href="/">
                Home
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/tours">
                Tours
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/about">
                About
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/contact">
                Contact
              </Link>
            </ul>
          </div>
          <div className="lg:pl-20 pt-10 lg:pt-0">
            <p className="text-white text-sm pb-1">Tours</p>
            <ul className="flex flex-col text-xs text-gray-400">
              <Link className="py-0.5 hover:text-yellow" href="/">
                Lion's head
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/tours">
                Table Mountain
              </Link>
            </ul>
          </div>
          <div className="lg:pl-20 pt-10 lg:pt-0">
            <p className="text-white text-sm pb-1">Other links</p>
            <ul className="flex flex-col text-xs text-gray-400">
              <Link className="py-0.5 hover:text-yellow" href="/indemnity">
                Indemnity Form
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="py-0.5 hover:text-yellow" href="/refund-policy">
                Refund Policy
              </Link>
            </ul>
          </div>
          <div className="lg:pl-20 pt-10 lg:pt-0">
            <p className="text-white text-sm pb-1">Social links</p>
            <ul className="flex flex-col text-xs text-gray-400">
              <Link
                className="py-0.5 hover:text-yellow"
                href="https://www.instagram.com/thecapetownlocal/?hl=en"
              >
                Instagram
              </Link>
              <Link
                className="py-0.5 hover:text-yellow"
                href="https://www.facebook.com/thecapetownlocal"
              >
                Facebook
              </Link>
              <Link
                className="py-0.5 hover:text-yellow"
                href="https://www.tripadvisor.co.za/Attraction_Review-g312659-d17543425-Reviews-The_Cape_Town_Local-Cape_Town_Central_Western_Cape.htmly"
              >
                Trip Advisor
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 mt-10 h-16 text-xs text-gray-400 border-t border-gray-800 border-1 w-full left-0 flex items-center lg:pl-16 justify-center lg:justify-normal">
        &copy; 2025 The Cape Town Local. All rights reserved
      </div>
    </footer>
  );
}
