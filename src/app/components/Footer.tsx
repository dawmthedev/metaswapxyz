"use client";

export default function Footer() {
  //working
  return (
    <footer className="absolute bottom-0 left-0 w-full px-12 py-8 z-10 flex justify-center mb-2">
      <div className="flex flex-col items-start max-w-[70%]">
        <h3 className="text-5xl font-extrabold leading-none">Metaswap</h3>
        <div className="flex gap-8 mt-5">
          <a href="#" className="underline text-m font-medium hover:text-white">
            MSC
          </a>
          <a href="#" className="underline text-m font-medium hover:text-white">
            Bit Map
          </a>
          <a href="#" className="underline text-m font-medium hover:text-white">
            Unhash Labs
          </a>
          <a href="#" className="underline text-m font-medium hover:text-white">
            Connect
          </a>
        </div>
        <p className="text-[0.7rem] font-normal text-black mt-5">
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
