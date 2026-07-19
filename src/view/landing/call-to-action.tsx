"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050608] text-white">
      {/* Background Skyline */}
      <div className="absolute bottom-0 inset-x-0 w-full h-64 sm:h-80 md:h-96 opacity-15 pointer-events-none z-0">
        <Image
          src="/images/dubai-skyline-30.svg"
          alt="Dubai Skyline"
          fill
          className="object-bottom object-cover brightness-0 invert"
          priority
        />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-md shadow-2xl space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            JOIN THE ELITE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-serif text-white leading-tight">
            Elevate Your Real Estate Journey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Ready to embark on a luxurious real estate experience tailored just for you? Take the first step towards unparalleled living and premier investments in Dubai.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block pt-4"
          >
            <Link href="/contactUs">
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#050608] hover:from-[#C5A880] hover:to-[#AA8B56] px-8 py-6 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 shadow-lg shadow-[#C5A880]/10 border-0">
                CONTACT OUR EXPERTS
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
