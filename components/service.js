import Image from "next/image";

export default function Service() {
  return (
    <div className="py-10 md:py-40 px-4 md:px-44 mx-auto">
      <div>
        <h1 className="font-bold text-4xl md:text-6xl">OUR SERVICE</h1>
      </div>
      <div className="container flex flex-col md:flex-row justify-center py-10 md:py-14 space-y-6 md:space-y-0 md:space-x-8">
      <div className="px-2 md:px-4 max-w-md">
        <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
          <Image
            src="/img/videography.png"
            width={350}
            height={350}
            alt="Videography"
          />
          <p className="text-black font-semibold text-lg">Videography</p>
        </div>
      </div>

      <div className="px-2 md:px-4 max-w-md">
        <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
          <Image
            src="/img/photography.png"
            width={350}
            height={350}
            alt="Photograph"
          />
          <p className="text-black font-semibold text-lg">Photography</p>
        </div>
      </div>

      <div className="px-2 md:px-4 max-w-md">
        <div className="bg-white rounded-b-md flex flex-col items-center justify-center">
          <Image
            src="/img/design.png"
            width={350}
            height={350}
            alt="Design"
          />
          <p className="text-black font-semibold text-lg">Design</p>
        </div>
      </div>
    </div>
    </div>
  );
}
