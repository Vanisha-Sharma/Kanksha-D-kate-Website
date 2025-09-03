"use client";

import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si"; 
import { FaXTwitter } from "react-icons/fa6"; 

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
  <div className="lg:ml-0 ml-[-12px]">
    <BrandLogo />
  </div>
  <p className="text-gray-400 mt-4 max-w-md">
    Activating latent abilities of the human mind through
    integration of QIS and precision-driven personal
    evolution.
  </p>
</div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/voice-of-kanksha" className="text-gray-400 hover:text-white transition-colors">Voice of Kanksha</Link></li>
              <li><Link href="/feedback" className="text-gray-400 hover:text-white transition-colors">Whispers of Change</Link></li>
              <li><Link href="/programs#FAQs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-4 text-xl">
              <a href="https://www.threads.net/@kankshadkate" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><SiThreads /></a>
              <a href="https://www.instagram.com/kankshadkate" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><FaInstagram /></a>
              <a href="https://whatsapp.com/channel/0029Vb67P9cISTkI7C9hsz1x" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/company/kanksha-d-kate/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@kankshadkate" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><FaYoutube /></a>
              <a href="https://x.com/kankshadkate" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex justify-center items-center text-center text-sm text-gray-400 space-x-2 flex-wrap">
          <p>© {new Date().getFullYear()} Kanksha D&apos;Kate. All rights reserved.</p>
          <span className="text-gray-500">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
