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
          h-24 w-64           /* bigger default for mobile */
          sm:h-20 sm:w-56    /* small tablets */
          md:h-24 md:w-64    /* medium devices */
          lg:h-32 lg:w-80    /* desktop size (unchanged) */
          object-contain
        "
        priority
      />
    </Link>
  );
}

export { BrandLogo };
