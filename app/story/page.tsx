"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shimmer mb-6">Personal Story</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-stone-400 to-stone-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Fire Anecdote Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-200 mb-12 text-center">FIRE ANECDOTE</h2>

            {/* Magazine Layout */}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Kanksha in contemplative moment"
                    className="w-full rounded-lg shadow-2xl"
                  />
                  <p className="text-sm text-stone-400 mt-2 text-center italic">
                    A moment of reflection that changed everything
                  </p>
                </div>
              </div>

              {/* Content Columns */}
              <div className="lg:col-span-2 space-y-6">
                <div className="columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-justify">
                  <p className="text-stone-300 mb-6">
                    I was <span className="font-bold">26</span> when I first encountered the profound question that
                    would reshape my entire existence. It wasn't in a boardroom at Ernst & Young, nor during my MBA at
                    IIM Rohtak. It came in the most unexpected moment—watching a child play in a park.
                  </p>

                  <p className="text-stone-300 mb-6">
                    The child was completely absorbed, creating worlds from nothing, transforming reality with pure
                    imagination. In that moment, I realized something that would haunt me for months:{" "}
                    <em>When did I stop creating and start merely surviving?</em>
                  </p>

                  <p className="text-stone-300 mb-6">
                    My corporate success felt hollow. The prestigious consulting role, the recognition, the financial
                    security—all of it seemed like elaborate distractions from a deeper calling I couldn't yet name. I
                    was living someone else's definition of success while my authentic self remained buried under layers
                    of societal expectations.
                  </p>

                  <p className="text-stone-300 mb-6">
                    That night, I made a decision that terrified everyone around me. I would leave the conventional path
                    and embark on a journey to understand the deepest mechanics of human transformation. Little did I
                    know this decision would lead me to the{" "}
                    <span className="font-bold">Co-originators of Neuro-Linguistic Programming</span> and eventually to
                    creating{" "}
                    <span className="font-bold underline">Asia's First Generation Atelier of Personal Evolution</span>.
                  </p>

                  <p className="text-stone-300 mb-6">
                    The fire that ignited that day wasn't just personal ambition—it was a recognition that we are living
                    far below our potential, accepting limitations that exist only in our programming, not in our
                    essence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 bg-gradient-to-b from-black to-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-200 mb-12 text-center">PERSONAL STORY</h2>

          {/* Magazine Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Content Columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-justify">
                <p className="text-stone-300 mb-6">
                  My journey into the realm of human evolution began with a profound dissatisfaction with the
                  conventional understanding of change and growth. Despite achieving what society deemed success, I felt
                  an inexplicable void—a knowing that there was something far more profound available to human
                  experience.
                </p>

                <p className="text-stone-300 mb-6">
                  This led me to seek out the <span className="font-bold">World's Finest Team</span> in the field of
                  human transformation. My path crossed with <span className="font-bold">Dr. John Grinder</span> and{" "}
                  <span className="font-bold">Carmen Bostic St Clair</span>, the co-creators of New Code NLP, who would
                  become my mentors in understanding the deepest structures of human experience.
                </p>

                <p className="text-stone-300 mb-6">
                  Under their guidance, I discovered that most approaches to personal development barely scratch the
                  surface. They work with symptoms rather than the underlying{" "}
                  <span className="font-bold underline">geometry of being</span> that creates our experience of reality.
                </p>

                <p className="text-stone-300 mb-6">
                  Through intensive training and personal transformation work, I began to understand what I now call{" "}
                  <span className="font-bold">Quanta Installation Technology (QIT)</span>—a sophisticated approach to
                  human evolution that works at the quantum level of consciousness, creating lasting change through
                  precise neurological recalibration.
                </p>

                <p className="text-stone-300 mb-6">
                  The breakthrough came when I realized that traditional change work often requires tremendous effort
                  and time because it's working against the existing internal structure. But what if change could happen
                  through <em>elegance rather than effort</em>? What if evolution was not about adding more but about{" "}
                  <span className="font-bold">removing the interference</span> to our natural state of brilliance?
                </p>

                <p className="text-stone-300 mb-6">
                  This understanding led to the creation of what would become{" "}
                  <span className="font-bold">
                    Asia's First Generation Atelier of Personal Evolution Powered by Neuroscience
                  </span>
                  . Not a coaching practice, not a therapy center, but an atelier—a workshop where human potential is
                  crafted with the precision of a master artisan.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Kanksha studying neuroscience"
                    className="w-full rounded-lg shadow-2xl"
                  />
                  <p className="text-sm text-stone-400 mt-2 text-center italic">Deep dive into neuroscience research</p>
                </div>

                <div>
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Training with mentors"
                    className="w-full rounded-lg shadow-2xl"
                  />
                  <p className="text-sm text-stone-400 mt-2 text-center italic">Training with world-class mentors</p>
                </div>
              </div>
            </div>
          </div>

          {/* QIT Section */}
          <div className="mt-16 pt-16 border-t border-stone-700" id="qit">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-200 mb-8 text-center">
              The Birth of Quanta Installation Technology
            </h3>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="QIT Technology Visualization"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-sm text-stone-400 mt-2 text-center italic">
                  Visualization of quantum consciousness technology
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-stone-300 text-justify leading-relaxed">
                  <span className="font-bold">QIT</span> represents a quantum leap in personal evolution technology.
                  Unlike traditional approaches that work with conscious mind patterns, QIT operates at the{" "}
                  <span className="font-bold underline">quantum field level</span> of human consciousness.
                </p>

                <p className="text-lg text-stone-300 text-justify leading-relaxed">
                  This technology allows for <span className="font-bold">instantaneous recalibration</span> of limiting
                  patterns, creating space for new possibilities to emerge naturally. It's not about fixing what's
                  broken—it's about <em>installing new operating systems</em> for human potential.
                </p>

                <p className="text-lg text-stone-300 text-justify leading-relaxed">
                  The results speak for themselves: clients experience profound shifts not just in their external
                  circumstances, but in their fundamental{" "}
                  <span className="font-bold">relationship with reality itself</span>. They don't just achieve their
                  goals—they transcend the limitations that made those goals seem difficult in the first place.
                </p>

                <p className="text-lg text-stone-300 text-justify leading-relaxed">
                  This is the work we do. Not for everyone. But for those who are ready to step into their{" "}
                  <span className="font-bold">evolutionary potential</span> and create from a place of{" "}
                  <span className="font-bold underline">integrated brilliance</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <p className="text-xl text-stone-300 mb-8 italic">
              "The question isn't whether you're capable of evolution—it's whether you're ready to step into the version
              of yourself that already exists in potential."
            </p>

            <Link
              href="/about"
              className="inline-block text-2xl font-bold text-shimmer hover:text-stone-300 transition-colors duration-300 border-b-2 border-stone-400 hover:border-stone-300 pb-2"
            >
              Kanksha D'Kate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
