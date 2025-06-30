import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KANKSHA D'KATE - Transformation Experiences",
  description:
    "Unlock your infinite potential through transformative experiences. Discover breakthrough moments with ¡FLo! Immersion and ¡FLo! Stream by founder Kanksha Dhakate.",
  keywords:
    "KANKSHA D'KATE, Kanksha Dhakate, transformation, breakthrough, personal development, ¡FLo! Immersion, ¡FLo! Stream, human augmentation scientist",
  authors: [{ name: "Kanksha Dhakate" }],
  creator: "KANKSHA D'KATE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kankshadkate.com",
    title: "KANKSHA D'KATE - Transformation Experiences",
    description: "Unlock your infinite potential through transformative experiences where neuroscience meets destiny.",
    siteName: "KANKSHA D'KATE",
  },
  twitter: {
    card: "summary_large_image",
    title: "KANKSHA D'KATE - Transformation Experiences",
    description: "Unlock your infinite potential through transformative experiences where neuroscience meets destiny.",
    creator: "@kankshadkate",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main className="pt-20 sm:pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
