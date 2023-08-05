import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";


export default function Homey() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[url('/img/BG_1.png')] sm:bg-jade-900] bg-cover md:p-24">
     <nav className="p-4 py-14 flex justify-between items-center">
      <motion.div className="flex-1">
        <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
      </motion.div>
      <motion.div
        className="bg-stone-900/50 rounded-full py-2 px-2 flex-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
          <motion.a href="/Home" className="mx-2 hover:underline"  whileHover={{ scale: 1.1 }}>Home</motion.a>
       
          <motion.a href="/about" className="mx-2 hover:underline" whileHover={{ scale: 1.1 }}>Profile Company</motion.a>
       
          <motion.a href="/services" className="mx-2 hover:underline" whileHover={{ scale: 1.1 }}>Our Services</motion.a>
       
          <motion.a  href="/contact" className="mx-2 hover:underline" whileHover={{ scale: 1.1 }}>Ongoing Event</motion.a>
        
          <motion.a href="/contact" className="mx-2 hover:underline" whileHover={{ scale: 1.1 }}>Contact</motion.a>
      </motion.div>
      <div className="flex-1 text-right">
        {/* Tempatkan elemen kosong di sini */}
      </div>
    </nav>


      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-14 md:container md:mx-auto mt-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-8">
          <div className="md:w-3/12 py-5 px-20">
            {/* Konten untuk Navbar */}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-9/12 py-5 px-20 flex-col md:flex-row items-center justify-center md:justify-start space-y-8"
          >
            {/* Konten untuk Homey */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-start shadow"
            >
              <Image
                src="/img/snaptivestudio.png"
                width={500}
                height={500}
                alt="Snaptive Studio"
                className="mx-auto md:mx-0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex px-28 py-14 mx-3 justify-center md:justify-start"
            >
              <Link href="/">
                <Image
                  src="/img/BUTTON.png"
                  width={250}
                  height={250}
                  alt="Register Now"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
