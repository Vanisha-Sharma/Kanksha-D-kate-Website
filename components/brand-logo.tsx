"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrandLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo1.png"
        alt="KANKSHA D'KATE"
        width={320}
        height={120}
        className="
          h-20 w-64           /* default for mobile */
          sm:h-16 sm:w-56     /* small tablets */
          md:h-20 md:w-64     /* medium devices */
          lg:h-27 lg:w-80     /* desktop */
          object-contain
        "
        priority
      />
    </Link>
  );
}

export { BrandLogo };
