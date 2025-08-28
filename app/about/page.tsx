"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/use-scroll-animation";

export default function AboutPage() {
  const heroRef = useScrollAnimation();
  const founderRef = useScrollAnimation();
  const credentialsRef = useStaggerAnimation();
  const futureRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section - Clean and Minimal */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black">
        <div
          ref={heroRef}
          className="relative z-10 max-w-4xl mx-auto text-center scroll-reveal"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-shimmer animate-gradient-shift leading-tight">
            KANKSHA D'KATE
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-4">
            Asia's First Generation Atelier of Personal Evolution
          </p>
          <p className="text-lg sm:text-xl text-stone-400 font-medium">
            Powered by Neuroscience
          </p>
          <div className="w-24 h-0.5 bg-professional-gradient mx-auto mt-8"></div>
        </div>
      </section>

      {/* Main Content - Forbes Magazine Style with Dark Theme */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Kanksha D'Kate Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-shimmer">
              KANKSHA D'KATE
            </h2>

            {/* Professional Headshot */}
            <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-stone-600 to-stone-700 rounded-2xl overflow-hidden border border-stone-500/30">
                    <div className="w-full max-w-md mx-auto mt-8 md:text-left text-center">
                      <img
                        src="/images/logo1.png"
                        alt="Kanksha Dhakate - Professional Portrait"
                        className="w-full h-full object-contain rounded-lg md:mx-0 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full border-2 border-black"></div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-200 mb-6 text-justify">
                    <span className="font-bold">
                      Kanksha D'Kate{" "}
                      <span style={{ fontWeight: "normal" }}>is</span> Asia's
                      First Generation Atelier of Personal Evolution Powered by
                      Neuroscience
                    </span>
                    , and stands among the early pioneers in the global field of
                    Human Evolution. While rooted in Asia, our work and impact
                    extend worldwide, serving people across geographies who seek
                    deep, lasting inner transformation in their{" "}
                    <span className="font-bold">
                      Business, Career, Relationships, Health, Joy, Love &
                      Fulfillment.
                    </span>{" "}
                    Our work is inspired by, but not limited to, the{" "}
                    <span className="font-bold">Co-originators</span> of
                    Neuro-Linguistic Programming -{" "}
                    <span className="font-bold">Dr. John Grinder</span> and{" "}
                    <span className="font-bold">Dr. Richard Bandler</span> and
                    also other global geniuses in the industry of modern change
                    work and human potential.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300 mb-6 text-justify">
                    We have an ecologically integrative approach. Our customized
                    processes are grounded in proven principles of
                    neuroplasticity, cognitive adaptation, emotional regulation,
                    contextual intelligence, systemic thinking, unconscious
                    processing and beyond. We enable transformation at both
                    conscious and unconscious levels by working at the
                    intersection of neuroscience and advanced neuro-linguistic
                    installation technologies. This unique synthesis bridges
                    scientific understanding with practical life enabling us to
                    create lasting, timeless evolution in our clients while also
                    taking the legacy of the genius creators forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-300 mb-8 text-justify">
                Kanksha Dhakate, CEO & Founder of the atelier, brings a depth of
                expertise personally refined by the World's Finest Team
                comprising <span className="font-bold">Dr. John Grinder</span>{" "}
                and <span className="font-bold">Carmen Bostic St Clair</span> at
                its core. While Kanksha has been sharpened by global experience
                of working with varied life paths and redirecting their
                trajectories, her mastery is further cultivated through
                signature programs and practices alongside formal
                certifications. Formally accredited by the originators
                themselves,{" "}
                <span style={{ fontStyle: "italic" }}>
                  Kanksha is also an NLP Practitioner, taught and Certified by
                  the Co-creator Dr. John Grinder, along with his eminent
                  partner Carmen Bostic St Clair.
                </span>
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-8 text-justify">
                While channeling her work into the atelier, Kanksha Dhakate's
                professional background includes former experience in Business
                Consulting at Ernst & Young and her academic background includes
                an MBA at Indian Institute of Management (IIM) Rohtak and a
                Bachelor's degree in Computer Science and Engineering from Amity
                University.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 text-justify">
                While the brilliance of this technology is not widely
                experienced and known, Kanksha intends to enhance the
                accessibility of it through{" "}
                <Link
                  href="/voice-of-kanksha#QIS"
                  className="text-stone-300 hover:text-white transition-colors underline font-bold"
                >
                  Quanta Integration Science (QIS)
                </Link>
                . The{" "}
                <span className="font-bold">
                  Worldwide 1:1 ecological change-technology
                </span>{" "}
                that uses the latest and newest technological developments in
                the field of Neuroscience. Indeed, it is a sophistication to
                true transformation.
              </p>
            </div>
          </div>

          <section className="py-12 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-stone-900/20 to-gray-900/20 rounded-lg p-6">
                <h5 className="text-sm font-bold text-stone-400 mb-2">
                  DISCLAIMERS
                </h5>

                <p className="text-sm text-gray-300 italic leading-relaxed mt-6 max-w-2xl mx-auto text-center">
                  This work is not clinical neuroscience, laboratory
                  neuroscience or medical practice. Our methodology represents a
                  synthesis of scientific principles inspired by neuroscience,
                  psychology, linguistics, and installation technologies,
                  applied exclusively for the purpose of personal growth,
                  transformation, and holistic life evolution.
                </p>
              </div>
            </div>
          </section>

          {/* The Future of Personal Evolution Section */}
          <div className="mb-20 border-t border-stone-500/30 pt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-shimmer">
              The Future of Personal Evolution Powered by Neuroscience
            </h2>

            <p className="text-lg leading-relaxed text-gray-200 mb-8 text-justify">
              We are entering a new era, not of Artificial Intelligence alone,
              but of AUGMENTED HUMANITY. Where the greatest competitive
              advantage is not more data or speed, but what AI cannot replicate.
              As the world witnesses AI rewrite industries and render roles
              obsolete, what sets one apart now is not just knowledge or ability
              to use artificial intelligence but an integrated, SUPER
              INTELLIGENCE which is driven by an evolved internal world. It's
              the kind of intelligence that emerges through inner calibration at
              the deeper levels of the{" "}
              <span className="font-bold italic underline">
                mind-body matrix
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-8 text-justify">
              In today’s dynamic world, where a lot of others are busy learning,
              building and beta testing AI use cases, the geniuses focus on
              learning evolved abilities which not only keeps them up-to-date
              with the global trends in their respective industries but also a
              step ahead to predict and BE READY for what's to revolutionize.
              Because even if the AI pilot programs may fail to make a
              meaningful impact as yet, future will always belong to those who
              can adapt, think smart in 360°, and solve problems creatively
              across different areas, and do so much more with no stress while
              AI successfully takes care of the specialized tasks. The need for
              humans to cultivate evolved, advanced abilities faster keeps
              escalating exponentially and this is where Personal Evolution
              powered by Neuroscience comes to the rescue.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-8 text-justify">
              Neuroscience is no longer just research or theory. It has found
              its ground in real life and is on the verge of revolutionizing
              every sphere it touches - education, sports, media, entertainment,
              business, healthcare, technology, leadership, and even governance.
              It is the frontier where human potential will be amplified like
              never before activating unprecedented levels of performance and
              transformation, driven by the EVOLVED ONES.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-8 text-justify">
              This is the work we do. Not for everyone. But for the ones who are
              done surviving, who are ready to live their design, who are READY
              TO EVOLVE for a RICH INNER WORLD, recalibrating their outer
              reality.
            </p>

            <p className="text-lg leading-relaxed text-gray-200 mb-4 text-justify">
              … and perhaps, you're beginning to sense the same question we did
              a few years ago:
            </p>

            <p className="text-lg italic text-amber-300 font-medium mb-8 text-justify">
              What if your evolution doesn't require more effort and time but a
              shift in your geometry of being?
            </p>
          </div>

          {/* Who Is It For Section */}
          <div className="border-t border-stone-500/30 pt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-shimmer">
              Who is it for?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Individuals */}
              <div>
                <h3 className="text-2xl font-bold text-stone-300 mb-6">
                  People in Business
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">CXOs</h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Entrepreneurs
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Working Professionals
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Coaches
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Consultants
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Therapists
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Parents
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Educators
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Homemakers
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Freelancers
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Artists{" "}
                        <span className="font-light">
                          (Actors, Musicians, Designers, etc.)
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizations */}
              <div>
                <h3 className="text-2xl font-bold text-stone-300 mb-6">
                  Organizations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Businesses
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Educational Institutions
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Communities
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-base italic leading-relaxed text-gray-300 text-justify">
                    Businesses, educational institutions, and communities
                    looking to evolve their people, culture and ecosystem can
                    invite Kanksha for curated sessions, focused conversations,
                    or experiential sessions - powered by neuroscience.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 px-4 py-8 glass-dark rounded-lg border border-stone-500/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Evolve?
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
                Discover how neuroscience-powered transformation can unlock your
                infinite potential and create lasting change in your life.
              </p>

              <div className="w-full flex justify-center">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
                  <Link href="/programs">
                    <Button className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold text-white text-center bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 rounded-full transition-all duration-300 leading-snug whitespace-normal break-words">
                      Explore Our Transformation Experiences
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
