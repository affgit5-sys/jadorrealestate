"use client";

import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0E] text-white border-t border-[#C5A880]/10 pt-16 pb-8 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#C5A880]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/Kaadan-Properties-Logo-980x791.png"
                alt="Kaadan Real Estate Logo"
                width={150}
                height={48}
                className="object-contain w-[140px] md:w-[150px] brightness-110"
              />
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Discover unparalleled luxury properties and bespoke real estate brokerage services in Dubai. Crafting exceptional living experiences.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/kaadan_real_estate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSmqB1trJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-1.12-.86-1.92-2.1-2.28-3.47-.07-.01-.07-.03-.07-.05V13.8c.07 2.29-.6 4.7-2.24 6.32-1.74 1.77-4.49 2.45-6.88 1.83-2.32-.58-4.34-2.29-5.18-4.54-.92-2.43-.65-5.38.93-7.51 1.52-2.09 4.22-3.15 6.78-2.61.18.04.36.1.53.16v4.11c-.36-.12-.74-.2-1.13-.24-1.39-.18-2.91.24-3.83 1.25-.97 1.01-1.22 2.61-.71 3.93.52 1.41 1.99 2.39 3.52 2.34 1.48-.02 2.87-1 3.25-2.42.14-.52.17-1.07.16-1.61V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-serif text-[#C5A880] mb-6 font-medium tracking-wide">Sitemap</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-light">
              {sitemapLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-[#C5A880] mb-6 font-medium tracking-wide">Get in Touch</h4>
            <address className="not-italic space-y-4 text-sm font-light text-gray-400 leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C5A880] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Dubai Office</p>
                  <p>DIFC-Al Saqar Business Tower</p>
                  <p>27th Floor, Office 30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C5A880] flex-shrink-0" />
                <a
                  href="tel:+971545224496"
                  className="hover:text-white transition-colors duration-300"
                >
                  +971 54 522 4496
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C5A880] flex-shrink-0" />
                <a
                  href="mailto:jador.property@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  jador.property@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Premium Statement Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-[#C5A880] mb-6 font-medium tracking-wide">Elite Brokerage</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Experience the pinnacle of real estate service in Dubai. Let our expert advisors assist you in securing high-ROI investments and matching you with custom homes.
            </p>
            <div className="p-[1px] bg-gradient-to-r from-[#C5A880] to-transparent rounded-xl">
              <div className="bg-[#121318] p-4 rounded-xl">
                <p className="text-xs text-[#C5A880] uppercase tracking-wider font-semibold">Buying & Selling Brokerage L.L.C</p>
                <p className="text-[11px] text-gray-500 font-light mt-1">Licensed by Dubai Land Department</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-4 text-xs font-light text-gray-500">
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Kaadan Real Estate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
