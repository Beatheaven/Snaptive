import Image from "next/image";
import Link from "next/link";

export default function Homey() {
  return (
    <div className="my-14 md:container md:mx-auto mt-8"> {/* Tambahkan kelas mt-8 disini */}
      <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-8">
        <div className="md:w-3/12 py-5 px-20">
          {/* Konten untuk Navbar */}
        </div>
        <div className="md:w-9/12 py-5 px-20 flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0">
          {/* Konten untuk Homey */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/img/snaptivestudio.png"
              width={500}
              height={500}
              alt="Snaptive Studio"
              className="mx-auto md:mx-0" // Tambahkan className ini untuk menggeser gambar ke tengah secara horizontal pada tampilan desktop
            />
          </div>
          <div className="flex px-28 py-14 mx-3 justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/img/BUTTON.png"
                width={250}
                height={250}
                alt="Register Now"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
