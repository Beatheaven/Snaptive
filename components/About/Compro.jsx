import Image from "next/image";

export default function Compro() {
  return (
    <div className="bg-cover p-24 bg-[url('/img/BG_2.png')] sm:bg-[url('/img/BG_2.png')]">
      <main className="flex items-center justify-center h-full p-8">
        <div className="w-full lg:w-1/3">
          {/* Konten kiri */}
          <div className="p-4 rounded shadow">
            <Image src="/img/studio.png" width={500} height={500} alt="snaptivestudio" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          {/* Konten tengah */}
          <div className="ml-40">
          <Image src="/img/outline.svg" width={3} height={5} alt="snaptivestudio" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          {/* Konten kanan */}
          <div className="p-4 rounded shadow">
            <h2 className="text-6xl font-semibold mb-2">About Us</h2>
            <p>Snaptive Studio, berdiri sejak 2022, adalah perusahaan Produk dan Jasa
              dengan spesialisasi dalam bidang fotografi dan videografi.
              Berlandaskan cinta dan passion dalam teknologi multimedia,
              kami siap memenuhi kebutuhan pasar.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
