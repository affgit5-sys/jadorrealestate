"use client";

import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import { Bed, Bath, Calendar, Hammer, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PriceDisplay from "@/src/components/common/PriceDisplay";

interface PropertyData {
  id?: string | number;
  name?: string;
  location?: {
    city?: string;
    community?: string;
  };
  newParam?: {
    price?: number;
    totalUnits?: number;
    handoverTime?: string;
  };
  photos?: string[];
  area_id?: string;
  bedRooms?: number;
  bathrooms?: number;
  size?: number | string;
  constructionStage?: string;
  completionStatus?: string;
  completionDate?: string;
  handoverTime?: string;
}

export default function PropertyCard({ data }: { data?: PropertyData }) {
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgba(197,168,128,0.08)] hover:border-[#C5A880]/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
      onClick={() => router.push(`/offPlans/details/${data?.id}`)}
    >
      <div className="relative w-full h-80 overflow-hidden">
        {/* Scale Hover Image */}
        <Image
          src={data?.photos?.[0] ?? "/placeholder.jpg"}
          alt={`Image of ${data?.name}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={80}
        />
        {/* Glass Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Dynamic Badges */}
        {data?.newParam?.totalUnits ? (
          <div className="absolute top-4 left-4 bg-[#050608]/70 backdrop-blur-md text-[#C5A880] border border-[#C5A880]/20 text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-xl uppercase">
            {data.newParam.totalUnits} UNITS
          </div>
        ) : null}

        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#050608] text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg">
          FROM <PriceDisplay priceInAED={data?.newParam?.price} className="ml-1" />
        </div>
      </div>

      <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Direct link arrow */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <CardTitle className="text-lg font-serif font-light text-white group-hover:text-[#C5A880] transition-colors duration-300 line-clamp-1">
              {data?.name ?? "Unnamed Property"}
            </CardTitle>
            <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </div>

          <p className="text-xs uppercase tracking-widest text-[#C5A880] font-medium line-clamp-1 mb-4">
            {`${data?.location?.community ?? ""}${
              data?.location?.community && data?.location?.city ? ", " : ""
            }${data?.location?.city ?? ""}`}
          </p>
        </div>

        {/* Specifications Section */}
        <div className="flex items-center justify-between text-gray-400 text-xs font-light border-t border-white/10 pt-4 mt-auto">
          {/* Beds/Baths */}
          {(data?.bedRooms !== undefined || data?.bathrooms !== undefined) && (
            <div className="flex gap-3">
              {data?.bedRooms !== undefined && data?.bedRooms !== null && (
                <div className="flex items-center gap-1.5" title="Bedrooms">
                  <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{data.bedRooms === 0 ? "Studio" : `${data.bedRooms} Bed`}</span>
                </div>
              )}
              {data?.bathrooms && (
                <div className="flex items-center gap-1.5" title="Bathrooms">
                  <Bath className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{data.bathrooms} Bath</span>
                </div>
              )}
            </div>
          )}

          {/* Handover */}
          {(data?.newParam?.handoverTime || data?.handoverTime || data?.completionDate) && (
            <div className="flex items-center gap-1.5" title="Handover Date">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>
                {new Date(data?.newParam?.handoverTime || data?.handoverTime || data?.completionDate || "").toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          )}

          {/* Stage */}
          {(data?.constructionStage || data?.completionStatus) && (
            <div className="flex items-center gap-1.5 max-w-[120px]" title="Construction Stage">
              <Hammer className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="truncate">
                {data?.constructionStage || data?.completionStatus}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
