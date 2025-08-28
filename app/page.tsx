"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Star, Sparkles, Zap, ArrowRight } from "lucide-react";
import VideoBackground from "@/components/video-background";
import { AnimatedCard } from "@/components/animated-card";
import { FloatingElements } from "@/components/floating-elements";
import { ParallaxSection } from "@/components/parallax-section";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/use-scroll-animation";

export default function HomePage() {
  const heroRef = useScrollAnimation();
  const staggerRef = useStaggerAnimation();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingElements />

      {/* Hero Section with Edge-to-Edge Video Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <VideoBackground />

        {/* Hero Content - Simplified */}
        <div
          ref={heroRef}
          className="relative z-10 text-left spacing-responsive-md scroll-reveal max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
        >
          {/* Main Heading Only */}
          <div className="px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-shimmer animate-gradient-shift leading-snug sm:leading-tight px-2 sm:px-0">
              POSITIVELY INFLUENCE
              <br className="block sm:hidden" /> YOUR WORLD
            </h1>

            <p className="text-lg sm:text-2xl md:text-2xl italic">
  In Business. Career. Health. Relationships. Fulfillment.{" "}
  <span className="whitespace-nowrap">Full Life Spectrum.</span>
</p>

            <p className="text-sm sm:text-lg md:text-lg italic">
              In a world that's evolving at a quantum speed,
              <br className="block sm:hidden" /> Evolution is not a choice, it's
              a necessity.
            </p>
          </div>

          {/* CTA Button */}

          <div className="w-full flex justify-center px-4">
            <Button
              className=" bg-[#B2A27A] hover:bg-[#9d8c5e] text-white font-bold text-[clamp(12px,3.5vw,18px)] px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full w-full sm:w-auto max-w-full text-center whitespace-normal transition-colors duration-300"
              asChild
            >
              <Link
                href="/programs"
                className="flex flex-col sm:flex-row items-center justify-centergap-2 sm:gap-3 w-full"
              >
                <span className="text-center break-words w-full">
                  BEGIN MY BREAKTHROUGHS
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Tiles Section */}
      <ParallaxSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-stone-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-responsive-3xl font-bold mb-4 text-shimmer">
              EXPLORE
            </h2>
            <p className="font-bold italic text-shimmer text-2xl sm:text-3xl">
              LIVE LIFE IN YOUR FAVOUR
            </p>
          </div>

          <div
            ref={staggerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* About Tile */}
            <Link href="/about" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={100}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      About Kanksha D'Kate
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Know more about KANKSHA D'KATE
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            {/* Services Tile */}
            <Link href="/programs" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={200}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-stone-700 to-gray-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Evolution Plans
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      ¡FLo! Immersion <br /> ¡FLo! Stream
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            <Link href="/articles" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={300}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-gray-700 to-stone-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Insights for <br /> Micro-Evolution
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Articles that build perspectives
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            {/* Voice of Kanksha Tile */}
            <Link href="/voice-of-kanksha" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={300}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-gray-700 to-stone-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Voice Of Kanksha
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      A glimpse into the mind and meaning behind the science
                      <br />
                      KANKSHA, in her own words..
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            {/* Feedback Tile */}
            <Link href="/feedback" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={400}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-stone-600 to-gray-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Whispers Of Change
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Stories of transformation
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            {/* Events Tile */}
            <Link href="/events" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={500}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-gray-600 to-stone-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Upcoming Events
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Stay tuned to register for our upcoming events
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>

            {/* Contact Tile */}
            <Link href="/contact" className="group">
              <AnimatedCard
                animation="slide-up"
                delay={600}
                className="h-full interactive-hover"
              >
                <CardContent className="padding-responsive-sm text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-stone-700 to-gray-700 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-subtle-pulse">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-stone-300 transition-colors">
                      Got Questions? We're here!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                      Reach out to us
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-stone-400" />
                  </div>
                </CardContent>
              </AnimatedCard>
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
