import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="content-center py-10 md:container md:mx-auto flex flex-col md:flex-row md:items-center"
    >
      <div>
      <div className="w-full md:w-3/12 py-5 px-20 text-center md:text-left sm:py-30">
        <div className="flex justify-center md:justify-start">
          <Image src="/img/logo.png" width={100} height={100} alt="Logo" loading="eager" />
        </div>
      </div>
      <div className="py-10 px-10 md:w-6/12 md:flex md:space-x-6 md:space-y-0 md:justify-center">
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-stone-900/50 rounded-full md:flex md:px-10 md:py-2 md:items-center space-x-6`}
        >
          <button className="hover:underline font-semibold" onClick={() => {}}>
            <Link href="/">Home</Link>
          </button>
          <button className="hover:underline font-semibold" onClick={() => {}}>
            <Link href="/">Profile Company</Link>
          </button>
          <button className="hover:underline font-semibold" onClick={() => {}}>
            <Link href="/">Our Service</Link>
          </button>
          <button className="hover:underline font-semibold" onClick={() => {}}>
            <Link href="/">Ongoing Event</Link>
          </button>
          <button className="hover:underline font-semibold" onClick={() => {}}>
            <Link href="/">Contact Person</Link>
          </button>
        </motion.div>
      </div>
      </div>
    </motion.nav>
  );
}
