"use client";

import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function generateWhatsAppUrl(phoneNumber: string, message: string) {
  if (!phoneNumber) return null;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

const WhatsAppButton = ({ phoneNumber, message, children }: { 
  phoneNumber: string, 
  message: string, 
  children: React.ReactNode 
}) => {
  const handleClick = () => {
    const url = generateWhatsAppUrl(phoneNumber, message);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("Invalid phone number");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="block group w-full"
    >
      {children}
    </button>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-stone-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/connect.jpg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>
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
            {/* Email */}
            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full w-16 h-16 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Email Us</h3>
              <p className="text-gray-300 mb-4">
                For inquiries and information
              </p>
              <a
                href="mailto:info@kankshadkate.com"
                className="text-stone-400 hover:text-stone-300 transition-colors"
              >
                info@kankshadkate.com
              </a>
            </div>

            {/* WhatsApp */}
            <WhatsAppButton
              phoneNumber="919324266322"
              message="Hello Kanksha! I am interested in learning more about your services. Following is/are my question(s):"
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-stone-900/30 rounded-2xl p-8 border border-gray-500/30 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-stone-700 to-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  WhatsApp Us
                </h3>
                <p className="text-gray-300 mb-4">Feel free to drop a text for clarifications</p>
                <p className="text-xl text-gray-400 group-hover:text-gray-300 transition-colors">
                  +91 9324266322
                </p>
              </div>
            </WhatsAppButton>

            <div className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-gray-700 to-stone-600 rounded-full w-16 h-16 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Social Coordinates
              </h3>
              <p className="text-gray-300 mb-4">Join us in these spaces as we unfold insights and ideas</p>
              <div className="flex justify-center space-x-5 mt-4 text-xl">
                <a
                  href="https://www.threads.net/@kankshadkate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <SiThreads />
                </a>
                <a
                  href="https://www.instagram.com/kankshadkate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Vb67P9cISTkI7C9hsz1x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/company/kanksha-d-kate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@kankshadkate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://x.com/kankshadkate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400"
                >
                  <FaXTwitter />
                </a>
              </div>
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
    </div>
  );
}