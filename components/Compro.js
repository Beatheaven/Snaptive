import Image from "next/image";

export default function Compro() {
  return (
    <div id="About" className="container md:py-96 md:mt-32 flex flex-col md:flex-row md:items-center justify-center md:space-x-8">
      <div className="md:w-1/3 flex justify-center md:justify-start">
        <div className="image-zoom"> {/* Tambahkan div untuk elemen gambar dan beri kelas CSS "image-zoom" */}
          <Image
            src="/img/studio.png"
            width={500}
            height={500}
            alt="Studio"
          />
        </div>
      </div>
      <div className="md:w-2/12 flex justify-center items-center"> {/* Menambahkan kelas items-center pada div ini */}
        <Image
          src="/img/outline.svg"
          width={3}
          height={1}
          alt="Outline"
        />
      </div>
      <div className="md:w-1/3 text-center md:text-left"> {/* Menambahkan kelas text-center dan md:text-left pada div ini */}
        <h1 className="font-bold text-3xl md:text-6xl">ABOUT US</h1>
        <p className="font-normal text-base md:text-lg">
          Snaptive Studio, berdiri sejak 2022, adalah perusahaan Produk dan Jasa
        </p>
        <p className="font-normal text-base md:text-lg">
          dengan spesialisasi dalam bidang fotografi dan videografi.
        </p>
        <p className="font-normal text-base md:text-lg">
          Berlandaskan cinta dan passion dalam teknologi multimedia,
        </p>
        <p className="font-normal text-base md:text-lg">
          kami siap memenuhi kebutuhan pasar.
        </p>
      </div>

      {/* Gaya CSS untuk zoom gambar */}
      <style jsx>{`
        .image-zoom {
          transform: scale(1.5); /* Perbesar gambar sebanyak 1.5 kali */
        }
      `}</style>
    </div>
  );
}
