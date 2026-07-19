"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Search, MapPin, Building, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [bedsFilter, setBedsFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isMobile ? 800 : 1500
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleSearch = () => {
    const route = activeTab === "Buy" ? "/buy" : activeTab === "Rent" ? "/rent" : "/offPlans";
    router.push(route);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#050608] overflow-hidden pt-20 px-4 md:px-8">
      {/* Cinematic Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 bg-[#050608] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative text-center"
            >
              {/* Premium circular loader */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#C5A880]/20 border-t-[#C5A880] rounded-full"
                />
                <Image
                  src="/Kaadan-Properties-Logo-980x791.png"
                  alt="Kaadan Real Estate Logo Logo"
                  width={64}
                  height={64}
                  className="object-contain w-[50px] h-[50px] brightness-125"
                />
              </div>
              <motion.h2
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[#C5A880] font-serif text-sm tracking-[0.4em] uppercase"
              >
                KAADAN REAL ESTATE
              </motion.h2>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">Elite Living Spaces</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video & Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!isLoading && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            className="absolute inset-0 w-full h-full object-cover scale-[1.03] animate-zoomInOut opacity-40 md:opacity-50"
            poster="/images/bgImage.webp"
          >
            <source src="/her.mp4" type="video/mp4" />
            <Image
              src="/images/bgImage.webp"
              alt="Luxury Living in Dubai"
              fill
              className="object-cover"
            />
          </video>
        )}
        {isLoading && (
          <Image
            src="/images/bgImage.webp"
            alt="Luxury Living in Dubai"
            fill
            className="object-cover opacity-30"
            priority
          />
        )}
        {/* Dynamic Dark Gradients for Glassmorphism Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-[#050608]/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/80 via-transparent to-[#050608]/80 z-10" />
      </div>

      {/* Floating Ambient Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#AA8B56]/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Main Content Area: Elegant Asymmetrical Layout */}
      <div className="relative container mx-auto z-20 flex flex-col items-start justify-center min-h-[calc(100vh-80px)] py-12">
        <div className="max-w-4xl text-left space-y-6 mb-12">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-[#C5A880]/20 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-light">Dubai's Most Prestigious Residences</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-light font-serif leading-[1.1] tracking-tight text-white"
          >
            Redefining <span className="font-normal text-[#C5A880] relative">Elite Living</span> <br />
            in Dubai
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            Kaadan Real Estate offers bespoke investments and custom properties tailored for the global elite. From ultra-luxury penthouses to waterfront villas, discover your sanctuary.
          </motion.p>
        </div>

        {/* Dynamic Glassmorphic Search Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl transition-all duration-500"
        >
          {/* Search Tabs */}
          <div className="flex space-x-3 mb-6">
            {["Buy", "Rent", "Off Plan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-[#C5A880] border-[#C5A880] text-[#050608] font-semibold"
                    : "bg-transparent border-white/10 text-white hover:border-[#C5A880]/50 hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input (Area, Project or Community) */}
            <div className="md:col-span-5 flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#C5A880]/50 transition-colors">
              <Search className="w-5 h-5 text-[#C5A880] mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Area, project or community..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-gray-400 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base font-light"
                aria-label="Location Search"
              />
            </div>

            {/* Beds Filter */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#C5A880]/50 transition-colors">
              <Select value={bedsFilter} onValueChange={setBedsFilter}>
                <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 focus:outline-none text-sm w-full py-6 px-4">
                  <SelectValue placeholder="Beds" />
                </SelectTrigger>
                <SelectContent className="bg-[#121318] border-white/10 text-white">
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1">1 Bed</SelectItem>
                  <SelectItem value="2">2 Beds</SelectItem>
                  <SelectItem value="3">3 Beds</SelectItem>
                  <SelectItem value="4">4 Beds</SelectItem>
                  <SelectItem value="5+">5+ Beds</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Min Price */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#C5A880]/50 transition-colors">
              <Select value={minPrice} onValueChange={setMinPrice}>
                <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 focus:outline-none text-sm w-full py-6 px-4">
                  <SelectValue placeholder="Min Price" />
                </SelectTrigger>
                <SelectContent className="bg-[#121318] border-white/10 text-white">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="500000">500K AED</SelectItem>
                  <SelectItem value="1000000">1M AED</SelectItem>
                  <SelectItem value="2000000">2M AED</SelectItem>
                  <SelectItem value="3000000">3M AED</SelectItem>
                  <SelectItem value="5000000">5M AED</SelectItem>
                  <SelectItem value="10000000">10M AED</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Max Price */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#C5A880]/50 transition-colors">
              <Select value={maxPrice} onValueChange={setMaxPrice}>
                <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 focus:outline-none text-sm w-full py-6 px-4">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent className="bg-[#121318] border-white/10 text-white">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1000000">1M AED</SelectItem>
                  <SelectItem value="2000000">2M AED</SelectItem>
                  <SelectItem value="3000000">3M AED</SelectItem>
                  <SelectItem value="5000000">5M AED</SelectItem>
                  <SelectItem value="10000000">10M AED</SelectItem>
                  <SelectItem value="20000000">20M AED</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Submit Button */}
            <div className="md:col-span-1">
              <Button
                onClick={handleSearch}
                className="w-full bg-[#C5A880] hover:bg-[#AA8B56] text-[#050608] font-medium py-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#C5A880]/20 flex items-center justify-center border-0"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
