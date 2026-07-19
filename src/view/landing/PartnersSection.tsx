"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PartnersSection() {
  const router = useRouter();
  const FILES: string[] = [
    "emaar_logo-resize.webp",
    "damac_logo-resize.webp",
    "dubai-holding_logo-resize.webp",
    "meraas_logo-resize.webp",
    "azizi_logo-resize.webp",
    "nakheel_logo-resize.webp",
    "nshama_logo-resize.webp",
    "select-group_logo-resize.webp",
    "sobha_logo-resize.webp",
    "aldar_logo-resize.webp",
    "acube-developments_logo-resize.webp",
    "imtiaz_logo-resize.webp",
    "majid-al-futtaim_logo-resize.webp",
    "binghatti_logo-resize.webp",
    "omniyat_logo-resize.webp",
  ];

  const [logos, setLogos] = useState<string[]>(FILES);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [apiDevelopers, setApiDevelopers] = useState<any[]>([]);

  useEffect(() => {
    const fetchDevs = async () => {
      try {
        const response = await fetch("https://jador-api.propfusion.io/properties/get_developers?size=100");
        const data = await response.json();
        setApiDevelopers(data.developers || data || []);
      } catch (error) {
        console.error("Error fetching developers for PartnersSection:", error);
      }
    };
    fetchDevs();
  }, []);

  useEffect(() => {
    const calc = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 375;
      if (w >= 1024) setItemsPerView(6);
      else if (w >= 640) setItemsPerView(3);
      else setItemsPerView(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % logos.length);
    }, 3000);
    return () => clearInterval(id);
  }, [logos.length, paused]);

  const handleLogoClick = (file: string) => {
    const developerName = file
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(".webp", "")
      .replace(" logo resize", "")
      .replace(" logo-resize", "")
      .trim();

    const matchedDev = apiDevelopers.find((dev) =>
      dev.name.toLowerCase().includes(developerName.toLowerCase()) ||
      developerName.toLowerCase().includes(dev.name.toLowerCase())
    );

    if (matchedDev) {
      router.push(`/offPlans?developer_id=${matchedDev.id}`);
    } else {
      router.push(`/offPlans?developer=${encodeURIComponent(developerName)}`);
    }
  };

  return (
    <section className="py-12 bg-[#050608] border-y border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-[#C5A880] mb-2 font-light">OUR NETWORK</p>
          <h2 className="font-serif text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
            Partnered with Dubai's leading developers
          </h2>
        </div>

        {/* Logo Carousel */}
        <div
          className="relative flex items-center justify-center h-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${itemsPerView}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-8 md:gap-12"
            >
              {Array.from({ length: itemsPerView }).map((_, k) => {
                const file = logos[(index + k) % logos.length];
                const developerName = file
                  .replace(/-/g, " ")
                  .replace(/_/g, " ")
                  .replace(".webp", "")
                  .replace(" logo resize", "")
                  .replace(" logo-resize", "")
                  .trim();

                return (
                  <div key={k} className="flex items-center justify-center">
                    <img
                      src={`/PartnerLogo/${encodeURIComponent(file)}`}
                      alt={`${developerName} - Partner Developer`}
                      width={120}
                      height={48}
                      loading="lazy"
                      className="object-contain w-[100px] h-[40px] md:w-[120px] md:h-[48px] filter brightness-0 invert opacity-45 hover:opacity-100 hover:brightness-100 transition-all duration-300 cursor-pointer"
                      style={{
                        transitionProperty: "opacity, filter",
                      }}
                      onClick={() => handleLogoClick(file)}
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            aria-label="Previous"
            className="absolute left-0 p-2 text-white/40 hover:text-[#C5A880] transition-colors text-2xl"
            onClick={() => setIndex((i) => (i - 1 + logos.length) % logos.length)}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className="absolute right-0 p-2 text-white/40 hover:text-[#C5A880] transition-colors text-2xl"
            onClick={() => setIndex((i) => (i + 1) % logos.length)}
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {logos.map((_, i) => {
            const isMobileView = typeof window !== "undefined" && window.innerWidth < 640;
            if (isMobileView && Math.abs(i - index) > 3) return null;

            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[2px] transition-all duration-300 ${i === index ? "w-8 bg-[#C5A880]" : "w-2 bg-white/20"
                  }`}
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}