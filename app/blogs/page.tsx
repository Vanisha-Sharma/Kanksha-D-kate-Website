import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
     <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black overflow-hidden">
  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h1 className="text-[8vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-stone-400 via-gray-400 to-stone-300 bg-clip-text text-transparent leading-tight px-2 sm:px-0">
      <span className="whitespace-nowrap">TRANSFORMATION</span>
      <br />
      INSIGHTS
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0">
      EXPLORE THE DEPTHS OF TRANSFORMATION
    </p>
  </div>
</section>


      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            LATEST ARTICLES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30">
              <CardHeader>
                <CardTitle className="text-stone-400 text-xl font-bold">THE SCIENCE OF TRANSFORMATION</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">MARCH 10, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="font-bold">KANKSHA D'KATE</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  DISCOVER HOW NEUROSCIENCE AND ANCIENT WISDOM CONVERGE TO CREATE PROFOUND PERSONAL TRANSFORMATION...
                </p>
                <Button
                  variant="outline"
                  className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-black font-bold bg-transparent"
                >
                  READ MORE <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 border-gray-500/30">
              <CardHeader>
                <CardTitle className="text-gray-400 text-xl font-bold">UNLOCKING YOUR INFINITE POTENTIAL</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">MARCH 5, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="font-bold">KANKSHA D'KATE</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  EXPLORE THE KEYS TO ACCESSING THE UNLIMITED POWER THAT LIES DORMANT WITHIN EVERY SOUL...
                </p>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-black font-bold bg-transparent"
                >
                  READ MORE <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30">
              <CardHeader>
                <CardTitle className="text-stone-400 text-xl font-bold">
                  THE JOURNEY FROM INTENTION TO MANIFESTATION
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">FEBRUARY 28, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="font-bold">KANKSHA D'KATE</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  UNDERSTAND HOW PURE INTENTION BECOMES THE DRIVING FORCE BEHIND EXTRAORDINARY TRANSFORMATION...
                </p>
                <Button
                  variant="outline"
                  className="border-stone-500 text-stone-400 hover:bg-stone-500 hover:text-black font-bold bg-transparent"
                >
                  READ MORE <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Disclaimer */}
      <section className="py-12 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-stone-900/20 to-gray-900/20 rounded-lg p-6">
            <h5 className="text-sm font-bold text-stone-400 mb-2">CONTENT DISCLAIMER</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              ALL CONTENT IS FOR EDUCATIONAL AND PERSONAL DEVELOPMENT PURPOSES ONLY. NOT MEDICAL ADVICE. INDIVIDUAL
              RESULTS VARY. CONSULT HEALTHCARE PROFESSIONALS FOR MEDICAL CONCERNS.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
