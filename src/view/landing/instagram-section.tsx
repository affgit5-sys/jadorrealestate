"use client";

import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function InstagramSection() {
  return (
    <section className="py-24 bg-[#0A0B0E] text-white relative overflow-hidden">
      {/* Light spots */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#C5A880]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#C5A880]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">SOCIAL STORIES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white mt-4 mb-6 leading-tight">
            Follow Our <span className="text-[#C5A880] font-normal italic">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Discover luxury properties, behind-the-scenes content, and exclusive market insights from Dubai's premier real estate destinations.
          </p>
          <div className="w-12 h-[2px] bg-[#C5A880] mx-auto mt-6"></div>
        </div>

        {/* Social Wall & Embeds Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Instagram Live Feed Embed (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between">
            <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-xl border border-white/5 bg-[#050608]">
              <iframe
                src="https://www.instagram.com/kaadan_real_estate/embed/"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="yes"
                className="rounded-xl w-full h-full"
                title="Kaadan Real Estate Instagram Feed"
                style={{ background: "transparent" }}
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-between items-center mt-6 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500 font-light">
                Instagram Feed is updated live. Tap on posts to interact.
              </p>
              <a
                href="https://www.instagram.com/kaadan_real_estate/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C5A880] hover:text-white transition-colors"
              >
                Go to Instagram
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Social CTA Card (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-white/[0.02] to-white/[0.04] border border-[#C5A880]/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-[#C5A880]/3">
            <div className="absolute inset-0 bg-[#C5A880]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div className="w-14 h-14 bg-[#C5A880]/10 rounded-2xl flex items-center justify-center border border-[#C5A880]/30 shadow-lg shadow-[#C5A880]/5">
                <Instagram className="w-8 h-8 text-[#C5A880]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-light text-white leading-snug">Connect With Us Across Platforms</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Join our growing digital elite community. We showcase daily listings, property walkthrough videos, investment reports, and property insights on both Instagram and TikTok.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/kaadan_real_estate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#AA8B56] text-[#050608] py-4 rounded-xl font-medium tracking-wide transition-all shadow-lg shadow-[#C5A880]/10 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @kaadan_real_estate</span>
              </a>

              {/* TikTok CTA */}
              <a
                href="https://vt.tiktok.com/ZSmqB1trJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-white py-4 rounded-xl font-medium tracking-wide transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-1.12-.86-1.92-2.1-2.28-3.47-.07-.01-.07-.03-.07-.05V13.8c.07 2.29-.6 4.7-2.24 6.32-1.74 1.77-4.49 2.45-6.88 1.83-2.32-.58-4.34-2.29-5.18-4.54-.92-2.43-.65-5.38.93-7.51 1.52-2.09 4.22-3.15 6.78-2.61.18.04.36.1.53.16v4.11c-.36-.12-.74-.2-1.13-.24-1.39-.18-2.91.24-3.83 1.25-.97 1.01-1.22 2.61-.71 3.93.52 1.41 1.99 2.39 3.52 2.34 1.48-.02 2.87-1 3.25-2.42.14-.52.17-1.07.16-1.61V.02z" />
                </svg>
                <span>Follow Us on TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
