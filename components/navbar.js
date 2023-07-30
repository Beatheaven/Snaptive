import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="content-center py-10 md:container md:mx-auto flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-3/12 py-5 px-20 text-center md:text-left sm:px-30">
        <Image src="/img/logo.png" width={100} height={100} alt="Logo" />
      </div>
      <div className="py-10 px-10 md:w-6/12 md:flex md:space-x-6 md:space-y-0 md:justify-center"> {/* Tambahkan md:justify-center disini */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block text-gray-600 hover:text-gray-800"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-stone-900/50 rounded-full md:flex md:px-10 md:py-2  md:items-center space-x-6`}
        >
          <button className="hover:underline font-semibold" href="/e">
            Home
          </button>
          <button className="hover:underline font-semibold" href="/">
            Profile Company
          </button>
          <button className="hover:underline font-semibold" href="/">
            Our Service
          </button>
          <button className="hover:underline font-semibold" href="/">
            Ongoing Event
          </button>
          <button className="hover:underline font-semibold" href="/">
            Contact Person
          </button>
        </div>
      </div>
    </nav>
  );
}
