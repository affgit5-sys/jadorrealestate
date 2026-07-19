"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getAgentById, Agent } from "@/src/api/agents";
import { getAllBuyProperties } from "@/src/api/buy";
import { BuyCard } from "@/src/view/buy/buyCard";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function AgentDetailPage({ id }: { id: string }) {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Utility function to parse nationality
  const parseNationality = (nationality: string) => {
    if (!nationality) return "";
    try {
      if (nationality.startsWith("{")) {
        const parsed = JSON.parse(nationality);
        return parsed.label || parsed.value || nationality;
      }
      return nationality;
    } catch (e) {
      return nationality;
    }
  };

  // Utility function to parse language
  const parseLanguage = (language: string) => {
    if (!language) return "";
    try {
      // Handle "ar: 🇸🇦 Arabic (العربية)" format or JSON
      if (language.startsWith("{")) {
        const parsed = JSON.parse(language);
        return parsed.label || parsed.value || language;
      }
      
      let withoutCode = language.replace(/^[a-z]{2}:\s*/, "");
      const spaceIndex = withoutCode.indexOf(" ");
      if (spaceIndex > 0) {
        withoutCode = withoutCode.substring(spaceIndex).trim();
      }
      withoutCode = withoutCode.replace(/\s*\([^)]+\)$/, "");
      return withoutCode.trim() || language;
    } catch (e) {
      return language;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [agentRes, propsRes] = await Promise.all([
          getAgentById(parseInt(id)),
          getAllBuyProperties(`agent_id=${id}&size=12`)
        ]);
        setAgent(agentRes);
        setProperties(propsRes.properties || []);
      } catch (error) {
        console.error("Error fetching agent data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader className="w-10 h-10 animate-spin text-[#DC2626]" />
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Agent not found</h2>
        <Link href="/team" className="text-[#DC2626] hover:underline">Return to Team</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F6F0]/50 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DC2626]/5 z-0 rounded-l-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm md:w-1/3"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                {agent.avatar ? (
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">{agent.name.charAt(0)}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <span className="inline-block px-4 py-1.5 bg-[#DC2626]/10 text-[#DC2626] rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                {agent.designation || agent.role_name || "Real Estate Expert"}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 leading-tight">
                {agent.name}
              </h1>

              {agent.team_name && agent.team_name !== "No team assigned" && (
                <p className="text-xl text-gray-600 font-light mb-8 italic">
                   {agent.team_name}
                </p>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto md:mx-0">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-[#DC2626] text-2xl font-bold">{agent.experience_years || 5}+</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-[#DC2626] text-2xl font-bold">{properties.length || 0}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Active Listings</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
                  <div className="flex justify-center md:justify-start gap-1">
                    <Icon icon="ic:round-star" className="text-yellow-400 w-5 h-5" />
                    <Icon icon="ic:round-star" className="text-yellow-400 w-5 h-5" />
                    <Icon icon="ic:round-star" className="text-yellow-400 w-5 h-5" />
                    <Icon icon="ic:round-star" className="text-yellow-400 w-5 h-5" />
                    <Icon icon="ic:round-star" className="text-yellow-400 w-5 h-5" />
                  </div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Client Rating</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                <a
                  href={`https://wa.me/${agent.phone?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Icon icon="material-symbols:call" className="w-6 h-6" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Icon icon="material-symbols:mail" className="w-6 h-6" />
                  <span className="font-medium">Email Me</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: About & Specialities */}
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-gray-900 mb-6 relative inline-block">
                  About {agent.name.split(' ')[0]}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#DC2626]"></div>
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="leading-relaxed">
                    {agent.remarks || `${agent.name} is a dedicated ${agent.designation || 'Real Estate Expert'} at EVID Properties, specializing in Dubai's most prestigious developments. With a deep understanding of the market and a commitment to excellence, ${agent.name.split(' ')[0]} ensures every client finds their perfect home or investment.`}
                  </p>
                </div>
              </motion.div>

              {agent.specialities && agent.specialities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-serif text-gray-900 mb-6">Specialities</h3>
                  <div className="flex flex-wrap gap-3">
                    {agent.specialities.map((speciality, index) => (
                      <span 
                        key={index}
                        className="px-6 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium"
                      >
                        {speciality}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column: Details & Languages */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F8F6F0] p-8 rounded-3xl"
              >
                <h3 className="text-xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-4">Profile Details</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Service Area</span>
                    <span className="text-gray-900 font-medium">Dubai, UAE</span>
                  </div>
                  {agent.nationality && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm uppercase tracking-wider">Nationality</span>
                      <span className="text-gray-900 font-medium">{parseNationality(agent.nationality)}</span>
                    </div>
                  )}
                  {agent.brn_number && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm uppercase tracking-wider">BRN</span>
                      <span className="text-gray-900 font-medium">{agent.brn_number}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Experience</span>
                    <span className="text-gray-900 font-medium">{agent.experience_years || 5} Years</span>
                  </div>
                </div>
              </motion.div>

              {agent.languages && agent.languages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-serif text-gray-900 mb-6">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((lang, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm">
                        <Icon icon="material-symbols:language" className="text-[#DC2626] w-4 h-4" />
                        <span className="text-sm text-gray-700">{parseLanguage(lang)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      {properties.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Active Listings</h2>
                <p className="text-gray-600">Discover properties managed by {agent.name}</p>
              </div>
              <Link 
                href="/offPlans"
                className="hidden md:flex items-center gap-2 text-[#DC2626] font-medium hover:underline"
              >
                View All Properties
                <Icon icon="material-symbols:arrow-right-alt" className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <BuyCard key={index} data={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#05162d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            Looking for a <span className="text-[#DC2626]">Luxury Experience</span>?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let {agent.name} guide you through Dubai's most exclusive real estate opportunities.
          </p>
          <a
            href="/contactUs"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
}
