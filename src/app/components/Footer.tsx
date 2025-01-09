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
  <div
    className="
      w-[75%]      /* Mobile: Smaller yellow div width */
      md:w-[85%]   /* Tablet: Slightly wider */
      lg:w-[95%]    /* Desktop: Full width */
      
   
      py-4
      md:py-6
      flex
      flex-col

      lg:flex-row  /* Desktop: Horizontal layout */
      items-start   /* Mobile and Tablet: Left-aligned */
      lg:items-center /* Desktop: Center-aligned */
      justify-between
  
    "
  >
    {/* Brand and Navigation */}
    <div
      className="
        flex
        flex-col
        items-start  /* Mobile and Tablet: Left-aligned */
        md:items-start /* Tablet: Left-align */
        lg:flex-row   /* Desktop: Horizontal alignment */
        lg:items-center
        w-full
        gap-4
       
      "
    >
      {/* Brand */}
      <h3 className="text-4xl md:text-5xl font-extrabold">Metaswap</h3>

      {/* Navigation Links */}
      <nav
        className="
          flex
          flex-wrap
          gap-4
          text-sm
          md:text-base
          md:mt-4 /* Tablet: Place below the brand */
          lg:mt-0 /* Desktop: Restore inline layout */
          items-start
          lg:items-center
        "
      >
        <a href="#" className="underline font-medium hover:text-white">
          MSC
        </a>
        <a href="#" className="underline font-medium hover:text-white">
          Unhashlabs
        </a>
        <a href="#" className="underline font-medium hover:text-white">
          Connect
        </a>
       
      </nav>
    </div>

    {/* Legal Section */}
    <div
      className="
        mt-4
        md:mt-6
        lg:mt-0
        text-xs
        md:text-sm
        text-left
        md:text-left
        lg:text-right
      "
    >
      <p className="leading-tight">
        © 2025 Metaswap, LLC. Metaswap and the Metaswap Logo are trademarks of Metaswap, LLC.{" "}
        <a href="#" className="hover:underline font-bold">
          Legal
        </a>
      </p>
    </div>
  </div>
</footer>



  );
}
