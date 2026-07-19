"use client";

import { BlogCard } from "@/src/components/common/card";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    imageSrc: "/images/blog1.webp",
    date: "Jul 16, 2025",
    title: "Why Your Home Should Feel as Good as It Looks: The Psychology of Luxury Living",
    description: "Have you ever stepped into a space that looked stunning... yet somehow felt wrong?...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/blog2.webp",
    date: "Dec 24, 2024",
    title: "Why Buying Property in Dubai is Better than Renting",
    description: "Dubai's real estate market continues to be one of the most dynamic and sought-after...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Jan 8, 2024",
    title: "Why Invest in Dubai's Real Estate? A Look into the Future",
    description: "Introduction in the heart of the Middle East, Dubai shines as a beacon of progress...",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
];

export function InsightsInspiration() {
  return (
    <section className="py-24 bg-[#050608] text-white relative overflow-hidden">
      {/* Visual highlights */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C5A880]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">INSIGHTS & INSPIRATION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white mt-4 mb-6 leading-tight">
            Unveiling Dubai's Luxurious Real Estate Landscape
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Dive into our curated collection of articles, designed to enlighten, inspire, and guide you through the dynamics of the Dubai real estate market.
          </p>
        </motion.div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/blog">
            <Button className="bg-transparent border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#050608] px-8 py-6 rounded-xl font-medium tracking-wide uppercase transition-all duration-300">
              View All Blogs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
