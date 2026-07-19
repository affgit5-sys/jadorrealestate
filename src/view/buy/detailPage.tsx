import { getAllBuyPropertiesById } from "@/src/api/buy";
import { getAgentById } from "@/src/api/agents";
import EnquireForm from "@/src/components/common/enquireForm";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Bed, Bath, Square, SquareGanttChart, MapPin, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft, Share2, Heart, CheckCircle2 } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

export default function DetailPage({ id }: any) {
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const amenityMap: Record<string, { label: string; icon: string }> = {
    "AC": { label: "Central A/C", icon: "material-symbols:ac-unit" },
    "SP": { label: "Shared Pool", icon: "material-symbols:pool" },
    "SY": { label: "Shared Gym", icon: "material-symbols:fitness-center" },
    "SS": { label: "Shared Spa", icon: "material-symbols:spa" },
    "SE": { label: "Security", icon: "material-symbols:security" },
    "PA": { label: "Parking", icon: "material-symbols:local-parking" },
    "PR": { label: "Private Garden", icon: "material-symbols:yard" },
    "LB": { label: "Lobby in Building", icon: "material-symbols:meeting-room" },
    "BA": { label: "Balcony", icon: "material-symbols:balcony" },
    "VW": { label: "Water View", icon: "material-symbols:water" },
    "CU": { label: "Concierge", icon: "material-symbols:support-agent" },
    "MR": { label: "Maid's Room", icon: "material-symbols:person" },
    "BK": { label: "Built-in Kitchen Appliances", icon: "material-symbols:kitchen" },
  };

  const fetchPropertyDetails = async () => {
    setLoading(true);
    try {
      const res = await getAllBuyPropertiesById(id);
      setProperty(res?.properties?.[0]);
    } catch (error) {
      console.error("Error fetching property details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  useEffect(() => {
    if (!property?.photos || property.photos.length <= 1) return;

    const interval = setInterval(() => {
      setHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % property.photos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [property?.photos]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === property.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? property.photos.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  if (!property?.photos || property.photos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Icon icon="line-md:loading-twotone-loop" className="w-10 h-10 text-[#DC2626]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Mobile Top Carousel / Desktop Hero */}
      <section className="relative h-[45vh] md:h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full"
            >
              <Image
                src={property.photos[heroImageIndex]}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                quality={90}
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
          
          {/* Top Actions */}
          <div className="absolute top-20 md:top-24 left-6 right-6 flex justify-between items-center z-40">
            <button 
              onClick={() => window.history.back()}
              className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              <button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium z-20">
            {heroImageIndex + 1} / {property.photos.length}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {property.photos.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setHeroImageIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === heroImageIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto md:px-6 lg:px-8 md:py-12 flex flex-col lg:flex-row gap-8">
        {/* Main Content Column */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Header Info */}
          <div className="bg-white p-6 md:rounded-3xl md:shadow-sm border-b md:border border-gray-100">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Badge className="bg-[#DC2626]/10 text-[#DC2626] border-0 hover:bg-[#DC2626]/20 mb-2">
                    {property.listingType === 'SELL' ? 'For Sale' : 'For Rent'}
                  </Badge>
                  <h1 className="text-2xl md:text-4xl font-serif text-gray-900 leading-tight">
                    {property.title}
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm md:text-base font-light">
                  {property.location?.community}, {property.location?.city}
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-3xl font-bold text-[#DC2626]">
                  AED {property.price?.toLocaleString()}
                </span>
                {property.listingType === 'RENT' && (
                  <span className="text-gray-500 font-light">/ Yearly</span>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50">
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold text-gray-900">{property.bedRooms === 0 ? 'Studio' : property.bedRooms}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold text-gray-900">{property.bathrooms}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold text-gray-900">{property.size}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Sqft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 md:rounded-3xl md:shadow-sm md:border border-gray-100">
            <h2 className="text-xl font-serif text-gray-900 mb-4">Description</h2>
            <div className="relative">
              <p className={cn(
                "text-gray-600 leading-relaxed font-light",
                !showFullDescription && "line-clamp-6"
              )}>
                {property.description}
              </p>
              {!showFullDescription && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-4 text-[#DC2626] font-medium flex items-center gap-1 hover:underline"
            >
              {showFullDescription ? "Read Less" : "Read More"}
              <Icon icon={showFullDescription ? "lucide:chevron-up" : "lucide:chevron-down"} />
            </button>
          </div>

          {/* Property Facts */}
          <div className="bg-white p-6 md:rounded-3xl md:shadow-sm md:border border-gray-100">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Property Facts</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Property Type</span>
                <span className="text-sm md:text-base text-gray-900 font-medium">{property.property_type}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Occupancy</span>
                <span className="text-sm md:text-base text-gray-900 font-medium">{property.occupancy || 'Vacant'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Furnishing</span>
                <span className="text-sm md:text-base text-gray-900 font-medium">{property.isFurnished === 'Yes' ? 'Furnished' : 'Unfurnished'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Completion</span>
                <span className="text-sm md:text-base text-gray-900 font-medium capitalize">{property.completionStatus}</span>
              </div>
              {property.buildYear && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Build Year</span>
                  <span className="text-sm md:text-base text-gray-900 font-medium">{property.buildYear}</span>
                </div>
              )}
              {property.parking > 0 && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Parking</span>
                  <span className="text-sm md:text-base text-gray-900 font-medium">{property.parking} Spaces</span>
                </div>
              )}
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-white p-6 md:rounded-3xl md:shadow-sm md:border border-gray-100">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Location</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5 text-[#DC2626]" />
                <span className="font-light">
                  {property.location?.sub_community ? `${property.location.sub_community}, ` : ''}
                  {property.location?.community}, {property.location?.city}
                </span>
              </div>
              
              {/* Map Placeholder with external link */}
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${property.location?.latitude},${property.location?.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 md:h-64 w-full rounded-2xl overflow-hidden group border border-gray-100"
              >
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">View on Google Maps</span>
                  </div>
                </div>
                {/* Visual Map Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </a>
            </div>
          </div>
          {property.amenities && property.amenities.length > 0 && (
            <div className="bg-white p-6 md:rounded-3xl md:shadow-sm md:border border-gray-100">
              <h2 className="text-xl font-serif text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {property.amenities.map((code: string) => {
                  const amenity = amenityMap[code];
                  if (!amenity) return null;
                  return (
                    <div key={code} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#DC2626]">
                        <Icon icon={amenity.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-gray-600 font-light">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Agent Card (In content for mobile, sidebar for desktop) */}
          <div className="bg-white p-6 md:rounded-3xl md:shadow-sm md:border border-gray-100">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Listed By</h2>
            <div className="flex items-center gap-4 mb-6">
              <Link href={`/team/${property.agent_Id}`} className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 hover:border-[#DC2626] transition-colors">
                {property.agent?.avatar ? (
                  <Image src={property.agent.avatar} alt={property.agent.name} layout="fill" objectFit="cover" />
                ) : (
                  <div className="w-full h-full bg-[#DC2626] flex items-center justify-center text-white text-xl font-bold">
                    {property.agent?.name?.charAt(0)}
                  </div>
                )}
              </Link>
              <div>
                <Link href={`/team/${property.agent_Id}`} className="text-lg font-bold text-gray-900 hover:text-[#DC2626] transition-colors">
                  {property.agent?.name}
                </Link>
                <p className="text-sm text-[#DC2626] font-medium uppercase tracking-wider">Property Specialist</p>
                <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>Verified Agent</span>
                </div>
              </div>
            </div>
            
            {/* Desktop only contact buttons inside the card */}
            <div className="hidden md:flex gap-3">
              <Button className="flex-1 bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl py-6">
                Call Now
              </Button>
              <Button variant="outline" className="flex-1 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/5 rounded-xl py-6">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar Column (Desktop Only) */}
        <div className="hidden lg:block w-[400px] space-y-8">
          <div className="sticky top-24">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Enquire Now</h3>
              <EnquireForm type="contact" />
            </div>

            {property.permitQRCode && (
              <div className="mt-8 bg-[#F8F6F0] p-6 rounded-3xl border border-[#E5E1D8] flex items-center gap-4">
                <div className="w-20 h-20 bg-white p-1 rounded-xl shadow-inner shrink-0">
                  <Image src={property.permitQRCode} alt="DLD Permit" width={80} height={80} />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Verified listing by <span className="font-bold text-gray-900">Dubai Land Department</span>. Scan to view permit details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar (Mobile Only) */}
      <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
        <div className="flex gap-2">
          <a 
            href={`tel:${property.agent?.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-[#DC2626] text-white py-3.5 rounded-2xl font-medium shadow-2xl active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Call</span>
          </a>
          <a 
             href={`https://wa.me/${property.agent?.phone?.replace(/[^0-9]/g, '')}?text=Hi ${property.agent?.name}, I'm interested in ${property.title}`}
             target="_blank"
             rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-2xl font-medium shadow-2xl active:scale-95 transition-transform"
          >
            <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a 
            href={`mailto:${property.agent?.email}?subject=Inquiry: ${property.title}`}
            className="w-14 flex items-center justify-center bg-[#3B82F6] text-white py-3.5 rounded-2xl font-medium shadow-2xl active:scale-95 transition-transform"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Register Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#F2EEE8] rounded-none px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <DialogTitle className="mb-4 sm:mb-6 flex justify-between">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-black text-center">
                Take the First Step
              </h2>
              <p className="font-light text-center text-xs sm:text-sm md:text-[15px] text-neutral-400">
                Get a free consultation and exclusive access to Dubai's best properties.
              </p>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <Icon icon="material-symbols-light:cancel-outline" className="text-neutral-400 text-2xl" />
            </button>
          </DialogTitle>
          <EnquireForm type="contact" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
