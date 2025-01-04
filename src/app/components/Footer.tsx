"use client";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full px-12 py-8 z-10 flex justify-center items-center mb-10">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <h3 className="text-5xl font-black leading-none">Metaswap</h3>
        <div className="flex gap-6 mt-4">
          <a href="#" className="underline text-sm hover:text-white">
            MSC
          </a>
          <a href="#" className="underline text-sm hover:text-white">
            Crypto Map
          </a>
          <a href="#" className="underline text-sm hover:text-white">
            Dev Agency
          </a>
        </div>
        <p className="text-[0.7rem] font-normal text-black mt-4">
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
