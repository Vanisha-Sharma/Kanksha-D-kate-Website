"use client"

import Link from "next/link"

export default function VoiceOfKankshaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - White Background */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[80vh]">
            {/* Image Collage - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[4/5]">
                  {/* Single Main Portrait */}
                  <div className="relative w-full h-full">
                    <img
                      src="/placeholder.svg?height=400&width=320&text=Kanksha+Main+Portrait"
                      alt="Kanksha D'Kate - Professional Portrait"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-medium">
                      KANKSHA DHAKATE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Headline - Right Side */}
            <div className="order-1 lg:order-2 space-y-8 flex flex-col justify-center">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight text-gray-900 mb-6">
                  VOICE OF
                  <br />
                  KANKSHA
                </h1>
                <div className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                  The Human Augmentation Scientist who navigates where neuroscience meets destiny, transforming the
                  invisible layers that shape breakthrough from the inside out.
                </div>
              </div>

              <div className="border-t border-gray-300 pt-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  BY KANKSHA DHAKATE
                </div>
                <div className="text-sm text-gray-600">
                  Living My Frequency • Personal Evolution • Human Augmentation Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Anecdote Section - Center Aligned */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header - Red Style */}
          <div className="mb-16">
            <div className="inline-block bg-red-600 px-8 py-4 mb-4">
              <h2 className="text-xl font-bold text-white tracking-wider">HUMAN EVOLUTION</h2>
            </div>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Opening Quote - Large Format */}
          <div className="mb-16">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed italic mb-8 border-l-4 border-gray-600 pl-8 text-left max-w-4xl mx-auto">
              "Since the first fire touched human hands, every age has faced the same silent crossroads: Will we become
              the guardians of power or be consumed by the flame we've ignited?"
            </blockquote>
            <div className="text-lg text-gray-600 font-medium mb-8">
              In reality, Evolution was never about racing ahead. It was about remembering who we must become to hold
              the future well.
            </div>
            <div className="text-base text-gray-700">The arc of Human Evolution was shaped by a pivotal moment…</div>
          </div>

          {/* Multi-column Article Layout - Center Aligned */}
          <div className="max-w-4xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 text-justify">
              <div className="break-inside-avoid mb-8">
                <p className="text-base text-gray-700 leading-relaxed mb-4">Once, fire was the most sacred of gifts.</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Prometheus stole it from the Gods and handed humanity the power of transformation.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">It lit our caves… and our ambitions.</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">It cooked our food… and fueled our wars.</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  It gave us civilization… and nearly burned it down.
                </p>
                <div className="bg-gray-100 border-l-4 border-orange-500 p-4 rounded-r my-6">
                  <p className="text-base font-semibold text-gray-900">We never lacked tools.</p>
                  <p className="text-base text-gray-700">We lacked precision in how we evolved with them.</p>
                </div>
              </div>

              <div className="break-inside-avoid mb-8">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Today, fire looks different - it's data, AI, nanotech, gene-editing, neural decoding.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  It is <strong className="text-gray-900">POWERFUL</strong> and{" "}
                  <strong className="text-gray-900">ACCELERATED</strong>.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  The question isn't: Can we innovate better tools faster?
                </p>
                <div className="bg-gray-100 border-l-4 border-orange-600 p-4 rounded-r my-6">
                  <p className="text-lg font-bold text-gray-900">
                    It is: Can our neurology handle the fire we now hold in our hands?
                  </p>
                </div>
              </div>

              <div className="break-inside-avoid mb-8">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Because tools without integration create noise.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Growth without internal evolution creates collapse.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  And capabilities without context turn brilliance into a burden.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  That's where <strong className="text-gray-900">ECOLOGICAL EVOLUTION</strong> steps in.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  It's not about chasing longevity, speed, or optimization for its own sake.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  It's about installing the internal world SO RICH that it sustains this power without losing joy,
                  meaning, connection, happiness and fulfillment.
                </p>
              </div>

              <div className="break-inside-avoid mb-8">
                <p className="text-base text-gray-700 leading-relaxed mb-4">I'm not a futurist.</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  I'm a <strong className="text-gray-900">HUMAN AUGMENTATION SCIENTIST</strong> and a{" "}
                  <strong className="text-gray-900">PERSONAL EVOLUTIONIST</strong>.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  And in a world where everyone's trying to shape how you think, your inner ecosystem is the ultimate
                  frontier of sovereignty.
                </p>
                <div className="bg-gray-100 border-l-4 border-orange-700 p-4 rounded-r my-6">
                  <p className="text-lg font-semibold text-gray-900">
                    This isn't about more. It's about Wiser. Cleaner. Calmer. Sharper.
                  </p>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  The kind of evolution that feels like truth in your spine.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">Because we no longer need to steal fire.</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">We need to learn how to HOLD IT.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living My Frequency Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Dark Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 px-8 py-4 mb-4">
              <h2 className="text-xl font-bold text-white tracking-wider">LIVING MY FREQUENCY</h2>
            </div>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          {/* The Origin: How It All Began */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-12 leading-tight text-center">
              The Origin: How It All Began
            </h3>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Main Story Column */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base text-gray-700 leading-relaxed mb-6 first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 text-justify">
                    As a child, I didn't blindly rebel against or obey the world. I watched it. Closely. And with an
                    unsettling clarity for someone my age. While I moved through the rhythms of my life - milestones,
                    mirth, celebrations, I was gently attuning to the deeper undercurrents.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                    Where others chose to move fast, I chose to move deep while giving myself the time to feel and
                    observe. Over time, my way of living fueled and sharpened my sensitivity, observation, ability to
                    see subtle patterns, feel quiet energy shifts and see through other's internal worlds, only to
                    realize that there was a <strong className="text-gray-900">WORLD behind the world</strong> and I
                    found myself naturally attuned to it.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                    One afternoon back in school, during my early teenage years, I watched my homeroom teacher speak to
                    another teacher, with her usual warm smile. But something felt off. There was a strange stillness in
                    her tone, it seemed like a familiar piece of music but played in the wrong key. Later, as she passed
                    by, I asked her quietly: "Miss, do you sometimes smile when you're afraid?"
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                    She stared at me, and her expressions melted from surprise into speechless contemplation. It was the
                    first time I realized that even pain could be perfectly performed. Months later, I came across a
                    book in my father's cabinet. The book provided a sneak peek into the minds of Greek philosophers,
                    mainly Socrates and Plato. As I began to read the book, it made me aware of the silent conversations
                    I was having with myself. It nudged me to ask questions that were profound and beyond my age. These
                    questions laid a foundational lens through which I began to see the world.
                  </p>
                </div>
              </div>

              {/* Sidebar with Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Childhood+Observation"
                    alt="Kanksha as a child observing the world"
                    className="w-full h-80 object-cover rounded-lg shadow-lg mb-4"
                  />
                  <div className="text-sm text-gray-600 italic text-center">
                    Early years of deep observation and questioning
                  </div>
                </div>
              </div>
            </div>

            {/* The Pivotal Question - Paragraph Format */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                I remember listening to a renowned priest speak about how God, nature and human beings all originate
                from the same divine source. As he spoke, a question arose within me and the 13-year old me couldn't
                help but ask him, not in the exact same words but similar. And it was this: "How does an apple seed,
                with no eyes, no mind, no manual, know to become an apple tree and not a fig or a fern? How does it have
                that intelligence to grow into exactly what it was meant to be?"
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                The essence was, how does such a tiny structure hold the certainty and intellect to construct something
                as huge as a tree, branch by branch, leaf by leaf, fruit by fruit, without ever mistaking its identity?
                The priest looked at me and said only one word:{" "}
                <span className="text-2xl font-bold text-gray-900">"Intention."</span>
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                The question, I later realized, wasn't just about seeds. It was about everything, be it nature, beliefs,
                and most importantly, human beings. WITH this, something shifted. That answer opened doors across
                disciplines, contexts, and questions I hadn't yet known to ask. There on, I saw{" "}
                <strong className="text-gray-900">INTENTION</strong> as an unseen, guiding force to growth and it gave
                my intellect a curiosity at a young age as I began to search for answers that led me to more questions
                about EVERYTHING: be it science and not-so-science (as if anything like that even exists)!
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                With all of it within, I kept observing and comparing my observations to the real world, real people.
                Not just behaviours, but ecosystems, unseen influencers, subtle cues and how they are connected to each
                other on a map of human life.
              </p>
            </div>

            {/* Professional Journey */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                  <p>
                    Years passed, and I walked a path many aspire to and many do: Computer Science Engineering, an MBA
                    from IIM, accolades, internships across diverse industries, business consulting in one of the Big4s
                    and a lot of extracurriculars alongside. But inside, I was watching. Listening. Feeling. Tallying.
                    To fuel my intellectual curiosity, to everywhere I went and with everyone I met.
                  </p>
                  <p>
                    While others saw coding as logic, I saw it as a way to understand how systems respond to subtle
                    shifts. I observed patterns, spotted anomalies, and decoded systems, which later became a metaphor
                    to gain clarity of an unconscious mind.
                  </p>
                  <p>
                    At IIM, my instincts matured even more, not just through frameworks, but sensing how unconscious
                    beliefs drove strategic decisions. There were zillions of new questions rushing in, like why does
                    one person thrive in an industry while another fails in the same space, with both having equal
                    experience or why does the same person struggle in one field, yet flourish in another although both
                    industries are new to them?
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&text=Professional+Journey"
                  alt="Professional engineering and consulting years"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <div className="text-sm text-gray-600 italic text-center">
                  Professional years: Engineering, IIM, and Big4 consulting
                </div>
              </div>
            </div>

            {/* Strategic Questions */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                Most would say, "right strategy". But the real question is what enables someone to even perceive the
                right strategy without much experience, while the other misses the opportunity entirely?{" "}
                <span className="text-lg font-semibold text-gray-900">
                  What shifts in the mind between those two realities?
                </span>{" "}
                I began to see people like living systems that are complex, adaptive, and programmable at the
                unconscious level.
              </p>
            </div>

            {/* Key Realization */}
            <div className="max-w-4xl mx-auto space-y-6 text-base text-gray-700 leading-relaxed text-justify mb-16">
              <p>
                With all the proven perspectives throughout my life, one truth became glaringly clear: no matter how
                refined the frameworks, plans, solutions and decks were, the real variables were always humans. What
                derailed execution wasn't the plan; it was the internal worlds of the people executing it. Therefore, in
                spite of a sophisticated strategy, the real work had to happen at a deeper level.
              </p>
              <p>
                No matter which professional I interacted with, my observations remained the same (with little to no
                variations) across industries, people, ecosystems and the globe. Behind every well-thought strategy,
                there was an inner pattern at play that deeply influenced the outcomes.
              </p>
            </div>

            {/* The Transition */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                <p>
                  Prima facie, when I quit my job at Ernst & Young, it seemed like I stepped away from the world of
                  logic and leadership. I didn't. I expanded it. People didn't need something as shallow as advice, they
                  needed something far deeper. Something that could transform the root cause of their behaviors and
                  bring true change, and it felt like... I was capable of offering that to them.
                </p>

                <div className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-r my-8">
                  <p className="text-lg text-gray-800 italic leading-relaxed">
                    "There was another pattern I kept encountering across ecosystems which was, most people weren't
                    living their lives. They were living their survival. Even when breathing. Even when smiling. Even
                    when achieving. It looked as if survival could wear a suit, hold degrees, and still feel hollow."
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-900 text-center">
                  And something about that felt… unnecessary.
                </p>
                <p>
                  And I am speaking of the brilliant minds, the high performers, experts of their fields, yet often
                  massively held back by something out of alignment within their inner world.
                </p>
                <p>
                  That's when I knew it was wise to consciously dedicate the time and resources to this life-long
                  research of my unconscious ..and so, I did.
                </p>
              </div>
            </div>

            {/* I AM A HUMAN AUGMENTATION SCIENTIST - No Background Box */}
            <div className="text-center mb-16">
              <h2 className="text-2xl text-gray-900 tracking-wider mb-8">I AM A HUMAN AUGMENTATION SCIENTIST.</h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
                I navigate the space where neuroscience meets destiny by aligning the unconscious mind with DEEPER and
                SUPER INTELLIGENCE that drives personal evolution. Many I have worked with reflect that my work begins
                where conventional strategies end, in the invisible layers that shape choices, actions, and
                breakthroughs from the inside out.
              </div>
            </div>

            {/* Research Journey */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                  <p>
                    For years consciously and unconsciously, I have immersed myself in the structures behind the
                    structures: Generative Neurological Learning, Neuroplasticity, Unconscious repatterning, modern
                    change work, applied psychology and much more. Not to add more techniques to my bag of tools but to
                    decode how transformation truly works. Not temporarily, not on the surface, but at the level where
                    identity quietly breathes.
                  </p>
                  <p>
                    The structures felt like a natural extension of what I had been intuitively living and practicing,
                    only now, with a structure. Having experienced them first-hand as my own client zero, I don't just
                    understand their depth, I embody it. And as I continue to embody, it is what allows me to facilitate
                    rare and powerful shifts in those I work with.
                  </p>
                  <p>
                    At first, it was subtle with my clients. A client no longer scared at the sound of her own memories.
                    Another, executing results he could have only dreamt of. It was without more willpower, just less
                    resistance. What shifted wasn't their effort. It was their intrinsic wiring. And so I began to see
                    what I call:
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&text=Research+Work"
                  alt="Deep research and development work"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <div className="text-sm text-gray-600 italic text-center">
                  Years of research into the structures behind transformation
                </div>
              </div>
            </div>

            {/* The Hidden Geometry of Change */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-block bg-gray-900 px-8 py-4 mb-4">
                  <h3 className="text-xl font-bold text-white tracking-wider">THE HIDDEN GEOMETRY OF CHANGE</h3>
                </div>
                <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                <p>
                  Every person is a constellation of patterns, experiences, memories, beliefs, instincts and most
                  importantly, undiscovered codes. My work is not about healing the past or forcing the future. It's
                  about accessing the sequences that were always there… waiting, ultimately shaping both the past and
                  the future.
                </p>
                <p>
                  No two clients are the same. Even when they walk in with what seems like the same issue, their
                  internal architecture is unique, their geometry is unique. The lens through which they experience
                  reality is their own. And therefore, each installation must be tailored not just to their symptoms,
                  but to the specific structure of their being.
                </p>

                <div className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-r my-8">
                  <p className="text-lg font-semibold text-gray-900">
                    "Because precision matters and so does ecology. When an intervention is aligned with the
                    individual's unique internal wiring, it activates something far deeper."
                  </p>
                </div>

                <p>
                  You know how a world-class athlete can feel the ball before it leaves the bowler's hand? Or how a
                  mother can sense her child's cry even in a crowd? That's not magic. That's a neurological attunement.
                  And it can be designed, installed and embedded - systematically.
                </p>
                <p>In my journey so far I have curated a one-on-one change process, now known as</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quanta Installation Technology (QIT) Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-lg text-gray-400 uppercase tracking-wider mb-4">INTRODUCING</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Quanta Installation Technology (QIT)</h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A highly elegant process of embedding precise and powerful abilities at the source of one's being through
              which ECOLOGICAL evolution occurs in RECORD TIME. This is neuro-experiential evolution which brings quiet
              revolution at the neurological level.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">500+</div>
              <div className="text-lg text-gray-400">Clients Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">15+</div>
              <div className="text-lg text-gray-400">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-purple-400 mb-4">98%</div>
              <div className="text-lg text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-base text-gray-300 leading-relaxed text-justify">
            <p>
              It's a highly elegant process of embedding precise and powerful abilities at the source of one's being
              through which ECOLOGICAL evolution occurs in RECORD TIME. This is not coaching or therapy, or motivational
              speaking. It's far beyond. It is a neuro-experiential evolution which brings in quiet revolution at the
              neurological level. It is where the subconscious gets recalibrated to who you were meant to be while you
              do what you do, not just who you became through your circumstances.
            </p>
            <p>
              So far, I have been fortunate to work with a cross-section of thoughtful individuals from diverse
              backgrounds and put QIT into action. QIT welcomes those from all walks of life - People in Business
              (CXOs/leaders/corporate professionals), educators, community workers, change agents, artists & creators,
              parents, students, or homemakers. Irrespective of their life paths, what unites them is a deeper calling
              to EVOLVE themselves and their loved ones. QIT has helped and continues to help them expand their capacity
              and transform across life domains from building visionary businesses and deepening personal relationships,
              to restoring health and accelerating inner evolution, all by upgrading the foundational codes within them.
            </p>
            <p>
              While the world races towards artificial intelligence, research in the space of personal intelligence has
              receded. That's why my work is also deeply investigative. I continue to research, question, refine and
              enrich my clients' inner world with newer methods as I aim to contribute to the field and TAKE FORWARD THE
              LEGACY of the genius creators through my living discipline:
            </p>
          </div>
        </div>
      </section>

      {/* Final Brand Declaration */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16 border-t border-gray-200">
            <Link
              href="/about"
              className="inline-block text-6xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300"
            >
              KANKSHA D'KATE
            </Link>
            <div className="w-32 h-0.5 bg-gray-900 mx-auto mt-8"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
