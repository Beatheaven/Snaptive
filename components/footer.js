// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-stone-900/50 py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Snaptive. All rights reserved.</p>
        <p className="text-sm text-white mt-2 sm:mt-0">Bandung Indonesia</p>
        <p className="text-sm text-white mt-2 sm:mt-0">Contact : +62-822-8564-8528</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com/nama_perusahaan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* Icon Facebook */}
            </svg>
          </a>
          <a href="https://www.twitter.com/nama_perusahaan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* Icon Twitter */}
            </svg>
          </a>
          <a href="https://www.instagram.com/nama_perusahaan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* Icon Instagram */}
            </svg>
          </a>
        </div>
        <div>
          <Link href="/" passHref>
            <p className="text-blue-600 hover:text-blue-800 cursor-pointer">Kembali ke Halaman Utama</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
