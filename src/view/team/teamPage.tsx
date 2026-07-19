"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { getAllAgents, Agent } from "@/src/api/agents";

export default function TeamPage() {
  const router = useRouter();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'management' | 'sales_manager' | 'broker'>('management');

  // Utility function to parse nationality
  const parseNationality = (nationality: string) => {
    try {
      if (typeof nationality === 'string' && nationality.startsWith('{')) {
        const parsed = JSON.parse(nationality);
        return parsed.label || nationality;
      }
      return nationality;
    } catch (error) {
      return nationality;
    }
  };

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await getAllAgents();
        setAgents(response || []);
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAgents();
  }, []);

  // Filter agents based on active filter
  const filteredAgents = agents.filter(agent => {
    const agentType = agent.agent_type?.toLowerCase();

    if (activeFilter === 'management') {
      // Show management and management_broker in management tab
      return agentType === 'management' || agentType === 'management_broker';
    } else if (activeFilter === 'sales_manager') {
      // Show sales_manager in sales manager tab
      return agentType === 'sales_manager';
    } else if (activeFilter === 'broker') {
      // Show broker and agents without agent_type in broker tab
      return agentType === 'broker' || !agentType || agentType === '';
    }

    return false;
  });



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#DC2626] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading our luxury team...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen luxury-bg">
      <section className="relative pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/3 via-transparent to-black/3"></div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-[#DC2626]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#DC2626]/8 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-6 md:mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 md:mb-6 leading-tight sm:leading-[0.9] tracking-tight font-serif"
            >
              Meet Our <span className="text-[#DC2626] font-normal relative">
                Experts
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4 font-sans"
            >
              Dedicated professionals committed to delivering exceptional real estate experiences
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mt-4 md:mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >


            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
              <button
                onClick={() => setActiveFilter('management')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === 'management'
                    ? 'bg-[#DC2626] text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-md'
                  }`}
              >
                Management
              </button>
              <button
                onClick={() => setActiveFilter('sales_manager')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === 'sales_manager'
                    ? 'bg-[#DC2626] text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-md'
                  }`}
              >
                Sales Manager
              </button>
              <button
                onClick={() => setActiveFilter('broker')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === 'broker'
                    ? 'bg-[#DC2626] text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-md'
                  }`}
              >
                Brokers
              </button>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Showing {filteredAgents.length} {activeFilter === 'sales_manager' ? 'Sales Manager' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} team members
              </p>
            </div>
          </motion.div>

          {filteredAgents.length > 0 ? (
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-stretch"
            >
              <AnimatePresence mode="wait">
                {filteredAgents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    variants={cardVariants}
                    layout
                    className="group cursor-pointer h-full"
                    onClick={() => router.push(`/team/${agent.id}`)}
                  >
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
                      {/* Agent Avatar */}
                      <div className="relative mb-6 flex-shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden relative">
                          {agent.avatar ? (
                            <Image
                              src={agent.avatar}
                              alt={agent.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                              <span className="text-3xl md:text-4xl font-bold text-gray-600">
                                {agent.name?.charAt(0) || 'A'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Agent Info */}
                      <div className="text-center mb-6 flex-grow flex flex-col justify-center">
                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                            {agent.name}
                          </h3>

                          {/* Designation */}
                          {(agent.designation || agent.role_name) && (
                            <p className="text-gray-600 font-medium text-sm md:text-base">
                              {agent.designation || agent.role_name}
                            </p>
                          )}

                          {/* Languages */}
                          {agent.languages && agent.languages.length > 0 && (
                            <div className="pt-2">
                              <p className="text-gray-500 text-sm">
                                Languages: {agent.languages.slice(0, 3).map((language, index) => {
                                  // Extract language name from the language string
                                  const getLanguageName = (lang: string) => {
                                    // Remove language code prefix (e.g., "ar: ", "en: ")
                                    let withoutCode = lang.replace(/^[a-z]{2}:\s*/, '');

                                    // Remove flag emojis by finding the first space after emoji
                                    const spaceIndex = withoutCode.indexOf(' ');
                                    if (spaceIndex > 0) {
                                      withoutCode = withoutCode.substring(spaceIndex).trim();
                                    }

                                    // Remove parenthesized translations
                                    withoutCode = withoutCode.replace(/\s*\([^)]+\)$/, '');

                                    return withoutCode.trim() || lang;
                                  };

                                  return getLanguageName(language);
                                }).join(', ')}
                                {agent.languages.length > 3 && `, +${agent.languages.length - 3} more`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Icon icon="material-symbols:person-search-outline" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No {activeFilter === 'sales_manager' ? 'Sales Manager' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} found</h3>
              <p className="text-gray-500">
                No {activeFilter} team members found. Try selecting a different filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#F8F6F0] to-[#F2EEE8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 font-serif">
              Ready to Find Your <span className="text-[#DC2626] font-normal">Dream Property with us</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with our expert team and discover the perfect property that matches your dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactUs"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="/buy"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white font-medium rounded-full transition-all duration-300"
              >
                Browse Properties
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
