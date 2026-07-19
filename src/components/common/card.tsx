"use client";

import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Heart, Bed, Bath, SquareGanttChart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  photos: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  propertyId?: string;
}

export function PropertyCard({
  photos,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  propertyId,
}: PropertyCardProps) {
  const router = useRouter();
  
  const handleCardClick = () => {
    if (propertyId) {
      router.push(`/buy/details/${propertyId}`);
    }
  };

  return (
    <Card 
      className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C5A880]/30 shadow-xl cursor-pointer hover:shadow-[0_8px_30px_rgba(197,168,128,0.08)] transition-all duration-300 flex flex-col justify-between" 
      onClick={handleCardClick}
    >
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={photos}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out hover:scale-108"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#C5A880] text-[#050608] px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase">
            FOR SALE
          </span>
          <span className="bg-[#050608]/70 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-light tracking-wider uppercase border border-white/10">
            AVAILABLE
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:text-[#C5A880] transition-colors"
        >
          <Heart className="w-6 h-6" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      <CardContent className="grid gap-4 p-6">
        <div>
          <h3
            className="text-lg font-serif font-light text-white tracking-wide line-clamp-1 group-hover:text-[#C5A880] transition-colors"
            title={title}
          >
            {title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#C5A880] font-medium mt-1">
            {location}
          </p>
        </div>
        <p className="text-xl font-serif text-white font-light">
          {price}
        </p>
        <div className="flex items-center justify-between text-gray-400 text-xs font-light border-t border-white/10 pt-4 mt-2">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#C5A880]" />
            <span>{bedrooms === 0 ? "Studio" : `${bedrooms} Bed`}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#C5A880]" />
            <span>{bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <SquareGanttChart className="w-4 h-4 text-[#C5A880]" />
            <span>{area}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface BlogCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

export function BlogCard({
  imageSrc,
  date,
  title,
  description,
  href,
}: BlogCardProps) {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className="bg-white/[0.02] border border-white/10 hover:border-[#C5A880]/30 rounded-2xl shadow-xl overflow-hidden group min-h-[550px] max-h-[550px] flex flex-col justify-between"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <div
          className="h-full w-full bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-108"
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
        />
        {/* Soft layout overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent z-10" />
      </div>
      <div className="p-6 text-left flex flex-col justify-between flex-1 space-y-4 z-20">
        <div>
          <p className="text-xs text-gray-400 font-light mb-2">
            {date}
          </p>
          <h3 className="text-lg font-serif font-light text-white group-hover:text-[#C5A880] transition-colors line-clamp-2 tracking-wide leading-snug">
            {title}
          </h3>
          <p className="text-gray-400 text-sm font-light line-clamp-3 leading-relaxed mt-2">
            {description}
          </p>
        </div>
        
        <motion.a
          href={href}
          whileHover={{ x: 4 }}
          className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#C5A880] hover:text-white transition-colors pt-2"
          aria-label={`Read full article: ${title}`}
        >
          <span>Read Article</span>
          <ChevronRight size={14} className="ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}
