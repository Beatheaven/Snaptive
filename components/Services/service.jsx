import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from 'next/dynamic';

export default function Service() {
  // Kontrol animasi saat screen dirender
  const controls = useAnimation();

  // Animasi saat screen dirender
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  const LazyFooter = dynamic(() => import('@/components/Footer/footer'));

  return (
    <div className="bg-[url('/img/BG_3.png')] sm:bg-[url('/img/BG_3.png')] bg-cover">
    <div className="py-10 md:py-40 px-4 md:px-44 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Animasi muncul dari atas
        animate={controls}
        className="text-center"
      >
        <h1 className="font-bold text-4xl md:text-6xl">OUR SERVICE</h1>
      </motion.div>

      <div className="container flex flex-col md:flex-row justify-center py-10 md:py-14 space-y-6 md:space-y-0 md:space-x-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Animasi muncul dari atas
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-2 md:px-4 max-w-md"
        >
          <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
            <Image
              src="/img/videography.png"
              width={350}
              height={350}
              alt="Videography"
            />
            <p className="text-black font-semibold text-lg">Videography</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }} // Animasi muncul dari atas
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-2 md:px-4 max-w-md"
        >
          <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
            <Image
              src="/img/photography.png"
              width={350}
              height={350}
              alt="Photograph"
            />
            <p className="text-black font-semibold text-lg">Photography</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }} // Animasi muncul dari atas
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="px-2 md:px-4 max-w-md"
        >
          <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
            <Image
              src="/img/design.png"
              width={350}
              height={350}
              alt="Design"
            />
            <p className="text-black font-semibold text-lg">Photobooth</p>
          </div>
        </motion.div>
      </div>
    </div>
    <div>
    <LazyFooter />
    </div>
    </div>
  );
}
