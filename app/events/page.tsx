import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[url('/images/Transformation-insights.jpg?height=800&width=1920')] bg-cover bg-center opacity-20 pointer-events-none"></div>

        {/* Content container */}
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-2 sm:px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-stone-300 via-gray-300 to-stone-200 bg-clip-text text-transparent leading-tight tracking-tight break-words">
            UPCOMING EVENTS
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto px-2 sm:px-0 break-words">
            Join us for powerful, immersive experiences that awaken your
            potential and spark deep, lasting transformation.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            REGISTER FOR EVENTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 border-stone-500/30">
              <CardHeader>
                <CardTitle className="text-stone-400 text-2xl font-bold">
                  WORKSHOP FOR PARENTS AND EDUCATORS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-stone-400" />
                  <span className="font-bold">NOVEMBER 09, 2025 (Tentative)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-stone-400" />
                  <span className="font-bold">4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-stone-400" />
                  <span className="font-bold">VIRTUAL EVENT</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="w-5 h-5 text-stone-400" />
                  <span className="font-bold">
                    ONLY FOR PARENTS AND EDUCATORS
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="uppercase">
                    Learn powerful neuroscience tools to support your children
                    and students in reaching their next level of growth.
                  </span>
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 text-white font-bold">
                    REGISTER NOW
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 border-gray-500/30">
              <CardHeader>
                <CardTitle className="text-gray-400 text-2xl font-bold">
                  BREAKTHROUGH SERIES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="font-bold">
                    NOVEMBER 03-DECEMBER 10, 2025 (Tentative)
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="font-bold">
                    1:1 2-hour BREAKTHROUGH SESSION
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="font-bold">VIRTUAL EVENT</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="font-bold">
                    OPEN FOR ALL{" "}
                    <span className="uppercse">
                      (Adults in their personal and professional journey)
                    </span>
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="uppercase">
                    Book a 2-hour slot to experience powerful, life-changing
                    breakthroughs for yourself.
                  </span>
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold">
                    REQUEST INVITATION
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Disclaimer */}
      <section className="py-12 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-stone-900/20 to-gray-900/20 rounded-lg p-6">
            <h5 className="text-sm font-bold text-stone-400 mb-2">
              DISCLAIMER
            </h5>
            <p className="text-sm text-gray-300 italic leading-relaxed mt-6 max-w-2xl mx-auto text-center">
              For closed-door immersions, retreats, or in-person events,
              participants have to pay the venue fees as charged directly by the
              hosting premises, in addition to the core program investment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
