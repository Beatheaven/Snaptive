import Image from "next/image"
import Homey from "./Homey";
import Compro from "./Compro";
import React from "react";

export default function Navbar() {
    return(
        <nav className='content-center py-10 md:container md:mx-auto flex'>
      <div className='w-3/12 py-5 px-20'>
        <Image
          src="/img/logo.png"
          width={100}
          height={100}
          alt="Logo"
        />
      </div>
      <div className="py-10 px-10 ">
        <div className='bg-stone-900/50 rounded-full flex item-center  py-2 px-6 space-x-6'>
        <button className='hover:underline font-semibold' href="/e">Home</button>
        <button className='hover:underline font-semibold' href="/">Profile Company</button>
        <button className='hover:underline font-semibold' href="/">Our Service</button>
        <button className='hover:underline font-semibold' href="/">Ongoing Event</button>
        <button className='hover:underline font-semibold' href="/">Contact Person</button>
        </div>
      </div>
    </nav>
    )
}