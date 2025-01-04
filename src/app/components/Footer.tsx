"use client";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full px-4 md:px-12 py-4 md:py-8 z-10 flex justify-center mb-2">
      <div className="flex flex-col items-start w-full md:max-w-[70%]">
        <h3 className="text-3xl md:text-5xl font-extrabold leading-none">
          Metaswap
        </h3>
        <div className="flex flex-wrap gap-4 md:gap-8 mt-3 md:mt-5">
          <a
            href="#"
            className="underline text-sm md:text-m font-medium hover:text-white"
          >
            MSC
          </a>
          <a
            href="#"
            className="underline text-sm md:text-m font-medium hover:text-white"
          >
            Bit Map
          </a>
          <a
            href="#"
            className="underline text-sm md:text-m font-medium hover:text-white"
          >
            Unhash Labs
          </a>
          <a
            href="#"
            className="underline text-sm md:text-m font-medium hover:text-white"
          >
            Connect
          </a>
        </div>
        <p className="text-[0.6rem] md:text-[0.7rem] font-normal text-black mt-3 md:mt-5">
          © 2025 Metaswap, LLC. Metaswap and the Metaswap Logo are trademarks of
          Metaswap, LLC.{" "}
          <a href="#" className="hover:underline font-bold">
            Legal
          </a>
        </p>
      </div>
    </footer>
  );
}
