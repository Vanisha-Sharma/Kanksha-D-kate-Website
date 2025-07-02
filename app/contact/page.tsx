import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-stone-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-stone-400 via-gray-400 to-stone-300 bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Ready to begin your transformation journey? We're here to guide you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full w-16 h-16 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Email Us</h3>
              <p className="text-gray-300 mb-4">For inquiries and information</p>
              <a href="mailto:hello@kankshadkate.com" className="text-stone-400 hover:text-stone-300 transition-colors">
                hello@kankshadkate.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 rounded-2xl p-8 border border-gray-500/30 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-stone-700 to-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak with our guides</p>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-gray-300 transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-gray-700 to-stone-600 rounded-full w-16 h-16 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Virtual Sessions</h3>
              <p className="text-gray-300 mb-4">Connect from anywhere in the universe</p>
              <span className="text-stone-400">Worldwide Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center pb-5 mb-12 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Send Us a Message
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-stone-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30">
              <h3 className="text-xl font-bold mb-4 text-stone-400">How do I know which service is right for me?</h3>
              <p className="text-gray-300">
                The ¡FLo! Immersion is ideal for those seeking deep, transformative experiences with personalized
                guidance. The ¡FLo! Stream is perfect for those who want ongoing support and regular alignment. We're
                happy to discuss your specific needs to help you choose the right path.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 rounded-2xl p-8 border border-gray-500/30">
              <h3 className="text-xl font-bold mb-4 text-gray-400">Are sessions conducted virtually or in-person?</h3>
              <p className="text-gray-300">
                We offer both virtual and in-person sessions, depending on your location and preferences. Our
                experiences are designed to be equally powerful regardless of the medium.
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30">
              <h3 className="text-xl font-bold mb-4 text-stone-400">
                How long does a typical transformation journey take?
              </h3>
              <p className="text-gray-300">
                Each journey is unique. The ¡FLo! Immersion typically spans several weeks to months, while the ¡FLo!
                Stream is an ongoing experience that you can engage with at your own pace. Breakthrough moments can
                happen at any point in your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
