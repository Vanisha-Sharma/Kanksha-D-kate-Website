"use client"

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, TrendingUp, ExternalLink, FileText, Globe, Target, ArrowRight } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"
import { FloatingElements } from "@/components/floating-elements"
import { ParallaxSection } from "@/components/parallax-section"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export default function CredibilityPage() {
  const heroRef = useScrollAnimation()
  const researchRef = useStaggerAnimation()

  const researchLinks = [
    {
      title: "European Association for Neuro-Linguistic Psychotherapy",
      url: "http://researchandrecognition.org/research.html",
      description: "Comprehensive research database and recognition project for NLP psychotherapy",
    },
    {
      title: "Research and Recognition Project",
      url: "http://researchandrecognition.org/",
      description: "Ongoing studies and validation of neurolinguistic programming methodologies",
    },
    {
      title: "Neuro-linguistic Wiki",
      url: "https://nlpedia.org/",
      description: "Collaborative knowledge base for NLP research and applications",
    },
    {
      title: "The Encyclopedia of Systemic NLP and NLP New Coding",
      url: "https://systemicnlp.com/encyclopedia/",
      description: "Comprehensive reference for systemic NLP and new coding methodologies",
    },
  ]

  const journalArticles = [
    {
      authors: "Reiner, Melita; Renner, Walter; Schütz, Peter; Dond, Renata",
      title: "Effects of Neuro-Linguistic Psychotherapy on psychological difficulties and perceived quality of life",
      journal: "Counselling and Psychotherapy Research",
      year: "March 2010",
      volume: "10 (1): 39-49",
      category: "Clinical Effectiveness",
      url: "https://www.nlpt.at/res1.pdf",
    },
    {
      authors: "Zaharia, Catalin; Reiner, Melita; Schütz, Peter",
      title: "Evidence-based Neuro-Linguistic Psychotherapy: A Meta-Analysis",
      journal: "Psychiatria Danubina",
      year: "2015",
      volume: "Vol 27, No 4, pp 355-363",
      category: "Meta-Analysis",
      url: "https://www.nlpt.at/res2.pdf",
    },
    {
      authors: "Gray, Richard M.; Bourke, Frank",
      title:
        "Remediation of intrusive symptoms of PTSD in fewer than five sessions: a 30-person pre-pilot study of the RTM Protocol",
      journal: "Journal of Military, Veteran and Family Health",
      year: "2015",
      volume: "1(2), pp 13-20",
      category: "PTSD Treatment",
      url: "https://www.nlpt.at/res3.pdf",
    },
    {
      authors: "Sahebalzamani, Mohammed",
      title: "Efficacy of neurolinguistic programming training on mental health in nursing and midwifery students",
      journal: "Iranian Journal of Nursing and Midwifery Research",
      year: "2014",
      volume: "Sept-Oct; 19(5): 503-507",
      category: "Educational Applications",
      url: "https://www.nlpt.at/res4.pdf",
    },
    {
      authors:
        "Ojanen, M.; Kotokopri, S.; Kumpula, S.; Tankklu, M.; Vadén, T.; Vikevainen-Tervonen, L.; Kiviaho, M. & Hiltunen, S.",
      title:
        "NLP-Perustaisen Psykoterapian Tuloksellisuus / Solution form therapy – results of NLP-based psychotherapy",
      journal: "Finnish Research Study",
      year: "2004",
      volume: "Complete Study",
      category: "Psychotherapy Outcomes",
      url: "https://www.nlpt.at/res5.pdf",
    },
    {
      authors: "Bigley, J.; Griffiths, P.D.; Prydderch, A.; Romanoswki, C.A.J.; Miles, L.; Lidiard, H.; Hoggard, N.",
      title:
        "Neurolinguistic programming used to reduce the need for anaesthesia in claustrophobic patients undergoing MRI",
      journal: "British Journal of Radiology",
      year: "2010",
      volume: "Feb; 83(986): 113-117",
      category: "Medical Applications",
      url: "https://www.nlpt.at/res6.pdf",
    },
    {
      authors: "Witt, Klaus",
      title:
        "Neuro-Linguistic-Psychotherapy (NLPt) treatment can modulate the reaction in pollen allergic humans and their state of health",
      journal: "Journal of The European Association for Psychotherapy",
      year: "2008",
      volume: "Vol 12, 1, 03/2008, pp 50-68",
      category: "Allergy Treatment",
      url: "https://www.nlpt.at/res7.pdf",
    },
    {
      authors: "Gray, Richard M.",
      title: "The Brooklyn Program: Innovative Approaches to Substance Abuse Treatment",
      journal: "Federal Probation Quarterly",
      year: "2002",
      volume: "Vol. 66. no.3. December 2002",
      category: "Substance Abuse",
      url: "https://www.nlpt.at/res8.pdf",
    },
    {
      authors: "Genser-Medlitsch, M.; Schütz, Peter",
      title: "Does neurolinguistic psychotherapy has effects",
      journal: "Nowiny Psychologiczne",
      year: "2004",
      volume: "1, 23-48",
      category: "Effectiveness Studies",
      url: "https://www.nlpt.at/res9.pdf",
    },
    {
      authors: "Gray, Richard; Liotte, Richard",
      title: "PTSD. Extinction, Reconsolidation, and the Visual-Kinesthetic Dissociation Protocol",
      journal: "Traumatology",
      year: "2012",
      volume: "Vol 18, No 2, 3-16",
      category: "Trauma Treatment",
      url: "https://journals.sagepub.com/doi/abs/10.1177/1534765612437380",
    },
    {
      authors: "Wake, Lisa; Leighton, Margaret",
      title: "Pilot study using Neurolinguistic Programming (NLP) in post-combat PTSD",
      journal: "Mental Health Review Journal",
      year: "2014",
      volume: "Vol. 19 Iss 4 pp. 251 – 264",
      category: "Combat PTSD",
      url: "http://www.nlpnl.eu/nouveau_site/images/biblio/NLP%20Pilot%20study%20PTSD%20treatment%20Lisa%20Wake.pdf",
    },
    {
      authors: "Przemyslaw Turkowski, Jan Jedrzejczyk, Miroslawa Huflejt-Lukasik, Joanna Wieliczko",
      title: "Neuro-Linguistic Psychotherapy in treatment of anxiety disorders",
      journal: "Psychoterapia",
      year: "2016",
      volume: "3 (178) 2016, 53-62",
      category: "Anxiety Treatment",
      url: "https://www.nlpt.at/res11.pdf",
    },
    {
      authors: "Davis JI, et al",
      title: "Psychological distance and emotional experience: what you see is what you get",
      journal: "Psychological Research",
      year: "2016",
      volume: "Current Studies",
      category: "Psychological Distance",
      url: "https://www.ncbi.nlm.nih.gov/m/pubmed/21500912/",
    },
    {
      authors: "Bruce Grimley",
      title: "Removal of PTSD Symptoms in a Client Using Neuro-Linguistic Programming – a case history",
      journal: "Journal of Experiential Psychotherapy",
      year: "2016",
      volume: "vol. 19, no 3 (75) September 2016",
      category: "Case Study",
      url: "https://www.nlpt.at/res12.pdf",
    },
    {
      authors: "Joscha Reinhard, et al",
      title:
        "The Effects of Clinical Hypnosis versus Neurolinguistic Programming (NLP) before External Cephalic Version (ECV): A Prospective Off-Centre Randomised, Double-Blind, Controlled Trial",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      year: "2012",
      volume: "Volume 2012, Article ID 626740",
      category: "Clinical Trial",
      url: "https://www.nlpt.at/res13.pdf",
    },
    {
      authors: "Crawley, Esther, et al.",
      title:
        "Clinical and cost-effectiveness of the Lightning Process in addition to specialist medical care for paediatric chronic fatigue syndrome: randomised controlled trial",
      journal: "BMJ-Journal",
      year: "2018",
      volume: "Randomised Controlled Trial",
      category: "Chronic Fatigue",
      url: "https://adc.bmj.com/content/103/5/501",
    },
    {
      authors:
        "Arroll B., Henwood S. M., Sundram F. I., Kingsford D. W., Mount V., Humm S. P., Wallace H. B., Pillai A.",
      title: "A brief treatment for fear of heights",
      journal: "The International Journal of Psychiatry in Medicine",
      year: "2017",
      volume: "52(1): 21-33",
      category: "Phobia Treatment",
      url: "#",
    },
  ]

  const categories = [...new Set(journalArticles.map((article) => article.category))]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black cosmic-bg overflow-hidden">
  {/* Subtle background image */}
  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-20 pointer-events-none"></div>

  <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center scroll-reveal px-2 sm:px-4">
    <div className="animate-fade-in-blur">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-shimmer animate-gradient-shift leading-tight tracking-tight break-words">
        CREDIBILITY & RESEARCH
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-stone-400 font-semibold px-2 sm:px-0 leading-relaxed">
        Grounded in Scientific Research & Global Recognition
      </p>

      <div className="w-24 sm:w-32 h-1 bg-professional-gradient mx-auto rounded-full mt-6 sm:mt-8 animate-shimmer"></div>
    </div>
  </div>
</section>


      {/* Applied Neuropsychology Research Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Heading Section */}
    <div className="text-center mb-12 sm:mb-16 px-2">
      <h2 className="text-center text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-shimmer animate-gradient-shift leading-tight break-words max-w-[90vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
  RESEARCH IN <span className="inline-block">APPLIED</span> <span className="inline-block">NEUROPSYCHOLOGY</span>
</h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
        There is ample amount of ongoing research in the field of neuroscience across the globe. The links below
        will help you explore both current and past studies.
      </p>
      <div className="w-24 sm:w-32 h-1 bg-professional-gradient mx-auto rounded-full" />
    </div>

    {/* Research Links */}
    <div className="mb-12 sm:mb-16">
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-stone-400">
        Key Research Resources
      </h3>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {researchLinks.map((link, index) => (
          <AnimatedCard key={index} animation="slide-up" delay={index * 100} className="card-hover">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex-shrink-0">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{link.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">{link.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white bg-transparent"
                    asChild
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Explore Research
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </div>

    {/* Journal Articles Section */}
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-stone-400">Published Journal Articles</h3>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Several journal articles cover Neurolinguistic Programming and other aspects of neuroscience. If you
          come across more articles, feel free to share them with us.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-stone-700 to-gray-700 rounded-full text-sm font-medium text-gray-300 border border-stone-500/30"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Articles Grid */}
      <div ref={researchRef} className="space-y-6">
        {journalArticles.map((article, index) => (
          <AnimatedCard key={index} animation="slide-up" delay={index * 50} className="card-hover">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="p-3 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30 mb-3">
                        {article.category}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{article.title}</h4>
                      <p className="text-stone-400 text-sm font-medium mb-2">{article.authors}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 font-medium">{article.journal}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{article.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{article.volume}</span>
                    </div>
                  </div>

                  {article.url && article.url !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-white bg-transparent"
                      asChild
                    >
                      <Link href={article.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Article
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Research Collaboration Section */}
      <ParallaxSection className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-blue-900/10" speed={0.1}>
  <div className="max-w-6xl mx-auto">
    <AnimatedCard animation="scale" className="text-center card-glow">
      <CardContent className="px-4 py-10 sm:p-12">
        {/* Icon Glow */}
        <div className="relative mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-subtle-pulse">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          CONTRIBUTE TO RESEARCH
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto px-2">
          We welcome collaboration with researchers, institutions, and practitioners who are advancing the field
          of applied neuropsychology and human transformation in practical use cases of daily life.
        </p>

        {/* Info Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-10">
          {[
            { icon: FileText, title: "Share Research", desc: "Submit relevant studies and findings" },
            { icon: Users, title: "Collaborate", desc: "Partner on research projects" },
            {
              icon: Globe,
              title: "Global Network",
              desc: "Exchange, brainstorm and discuss your observations, research and studies over a virtual/physical meet",
            },
          ].map((item, index) => (
            <div key={index} className="text-center px-4 sm:px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-center px-4">
  <Button
    className="
      bg-[#B2A27A] hover:bg-[#9d8c5e]
      text-white font-semibold
      text-sm sm:text-base md:text-lg
      px-4 sm:px-6 md:px-8
      py-3 sm:py-4 md:py-5
      rounded-full
      w-full sm:w-auto
      max-w-full
      text-center
      transition-colors duration-300
      min-w-0
    "
    asChild
  >
    <Link
      href="/contact"
      className="
        flex flex-nowrap items-center justify-center
        gap-2 sm:gap-3 w-full overflow-hidden
      "
    >
      <span className="
        text-center truncate
        text-[clamp(12px,3vw,18px)]
        leading-tight
      ">
        Connect With Our Research Team
      </span>
      <ArrowRight className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
    </Link>
  </Button>
</div>


      </CardContent>
    </AnimatedCard>
  </div>
</ParallaxSection>

    </div>
  )
}
