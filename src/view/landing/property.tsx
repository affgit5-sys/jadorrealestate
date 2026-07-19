"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";

export default function PropertySection() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperty = async () => {
    setLoading(true);
    setError(null);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=6&type=off_plan";
    try {
      const res = await getAllProperties(query);
      setProperties(res?.projects || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <section className="py-24 bg-[#0A0B0E] text-white relative overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#C5A880]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">FEATURED COLLECTION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white mt-4 mb-6 leading-tight">
            Handpicked Luxury Listings in Dubai
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Step into a realm of unparalleled sophistication with our featured properties. Explore these exclusive gems and envision your next luxurious home with Kaadan Real Estate.
          </p>
          <div className="w-12 h-[2px] bg-[#C5A880] mx-auto mt-6"></div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[480px] bg-white/5 border border-white/10 rounded-2xl animate-pulse"
              />
            ))
          ) : error ? (
            <div className="col-span-full text-center py-16 space-y-4">
              <p className="text-red-400 font-light">{error}</p>
              <Button
                onClick={fetchProperty}
                className="bg-[#C5A880] hover:bg-[#AA8B56] text-[#050608] px-6 py-3.5 rounded-xl font-medium"
              >
                Try Again
              </Button>
            </div>
          ) : properties.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 font-light">No featured properties available at the moment.</p>
            </div>
          ) : (
            properties.slice(0, 6).map((property: any, i) => (
              <div key={property.id || i} className="group relative">
                <PropertyCard data={property} />
              </div>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/buy">
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#050608] hover:from-[#C5A880] hover:to-[#AA8B56] px-8 py-6 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 shadow-lg shadow-[#C5A880]/10 border-0">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
