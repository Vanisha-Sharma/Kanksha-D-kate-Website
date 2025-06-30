import Link from "next/link"
import Image from "next/image"

export default function BrandLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="KANKSHA D'KATE"
        width={320}
        height={120}
        className="h-16 w-48 sm:h-20 sm:w-56 md:h-24 md:w-64 lg:h-32 lg:w-80 object-contain"
        priority
      />
    </Link>
  )
}

export { BrandLogo }
