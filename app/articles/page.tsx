import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/transformation-events.jpg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-2 sm:px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-stone-300 via-gray-300 to-stone-200 bg-clip-text text-transparent leading-tight tracking-tight break-words">
            THE LOTUS LIFE
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto px-2 sm:px-0 break-words">
            Insights to nourish your mind, life and potential
            <br />
            micro-evolution, straight from Kanksha's journal
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>

          <p className="text-center">Coming soon...</p>
        </div>
      </section>

      {/* Blog Disclaimer */}
      <section className="py-12 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-stone-900/20 to-gray-900/20 rounded-lg p-6">
            <h5 className="text-sm font-bold text-stone-400 mb-2">
              CONTENT DISCLAIMER
            </h5>
            <p className="text-sm text-gray-300 italic leading-relaxed">
              The content shared is purely for contemplative and educational
              purposes. They are not intended as direct medical advice,
              inductions, neuro-programming, or installation tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
