"use client";

export default function Footer() {
  return (
    <footer
      className="
        absolute
        bottom-0
        left-0
        w-full
        z-10

        flex
        justify-center
        mb-3
        md:mb-6
      "
    >
      {/* 
        Outer container:
        - Centers content horizontally on all screen sizes
        - 60% width on mobile, full width on desktop
        - Adds vertical padding
        - Uses flex-col on mobile, flex-row on desktop
        - Justify content between on desktop
        - Keeps text left-aligned on mobile and adjusts alignment on desktop
      */}
      <div
        className="
          mx-0
          md:mx-auto
          w-[60%]
          md:w-[95%]
     
          py-4 md:py-6
          flex
          flex-col md:flex-row
          gap-4
          items-start
          md:items-center
          justify-start md:justify-between
          text-left
          md:text-left
     
        "
      >
        {/* Brand */}
        <div
          className="
            order-1
            md:order-1
            flex
            flex-col
            items-start
            text-left
            flex-none
          "
        >
          <h3 className="text-4xl md:text-5xl font-extrabold pr-5">Metaswap</h3>
        </div>

        {/* Nav links */}
        <nav
          className="
            order-2
            md:order-2
            flex-1
            flex
            flex-wrap
            items-start
            justify-start
            gap-4 md:gap-6
          "
        >
          <a
            href="https://metaswapcapital.com"
            className="underline text-sm md:text-xl font-medium hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            MSC
          </a>

          <a
            href="https://unhashlabs.xyz"
            className="underline text-sm md:text-xl font-medium hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metaswap Labs
          </a>

          <a
            href="https://instagram.com/metaswap"
            className="underline text-sm md:text-xl font-medium hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        {/* Legal */}
        <div
          className="
            order-3
            md:order-3
            flex
            flex-col
            items-start
            text-left
            flex-none
            md:text-right
          "
        >
          <p className="text-xs md:text-sm leading-tight">
            © 2025 Metaswap, LLC. All rights reserved.{" "}
            <a href="#" className="hover:underline font-bold">
              Legal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
