"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { getAllCommunities } from "@/src/api/communities";

export default function CommunitiesSection() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await getAllCommunities(1, 6);
        setCommunities(res.communities || []);
      } catch (error) {
        console.error("Error loading communities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunities();
  }, []);

  return (
    <section className="py-24 bg-[#050608] text-white relative overflow-hidden">
      {/* Visual decorations */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#C5A880]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#C5A880]/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Editorial Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">COMMUNITIES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white mt-4 mb-6 leading-tight">
            Discover Dubai's Finest Locales
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Explore the diverse tapestry of Dubai's most sought-after areas. From serene waterfront retreats to bustling urban hubs, our curated selection showcases the essence of luxury.
          </p>
          <div className="w-12 h-[2px] bg-[#C5A880] mx-auto mt-6"></div>
        </div>

        {/* Asymmetrical Grid of Communities */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-96 bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {communities.map((community, index) => {
              // Create asymmetrical sizing for cells
              // Item 0: 3 columns, Item 1: 3 columns, Item 2: 2 columns, Item 3: 4 columns, Item 4: 4 columns, Item 5: 2 columns
              let colSpan = "md:col-span-3";
              if (index === 2 || index === 5) colSpan = "md:col-span-2";
              if (index === 3 || index === 4) colSpan = "md:col-span-4";

              const photo = community.photos?.[0] || "/placeholder.jpg";

              return (
                <div
                  key={community.id || index}
                  className={`${colSpan} group relative h-[380px] sm:h-[450px] rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-t from-[#0A0B0E] to-transparent`}
                >
                  {/* Image cover background */}
                  <Image
                    src={photo}
                    alt={community.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-75 z-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent z-10" />

                  {/* Top-right ROI Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-[#C5A880]/30 rounded-xl px-3 py-1.5 text-[10px] sm:text-xs text-[#C5A880] font-medium uppercase tracking-wider">
                    High ROI
                  </div>

                  {/* Content container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-white mb-2 group-hover:text-[#C5A880] transition-colors duration-300">
                      {community.name}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm font-light mb-4 line-clamp-2 leading-relaxed max-w-md">
                      {community.order_description || "Premium luxury real estate development in Dubai's premier residential area."}
                    </p>
                    <div className="w-full border-t border-white/15 my-4" />
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/communities`}
                        className="inline-flex items-center text-xs uppercase tracking-widest text-[#C5A880] hover:text-white font-semibold transition-colors duration-300"
                      >
                        EXPLORE COMMUNITY
                        <ArrowUpRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/communities">
            <Button className="bg-transparent border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#050608] px-8 py-6 rounded-xl font-medium tracking-wide uppercase transition-all duration-300">
              View All Communities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
