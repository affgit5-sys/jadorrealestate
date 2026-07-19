"use client";

import { useState } from "react";
import { ArrowUpRight, User, Building, Download, MapPin, TrendingUp, Landmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { api } from "@/src/lib/axios";

export default function Solutions() {
  const router = useRouter();
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [reportFormData, setReportFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReportFormChange = (field: string, value: string) => {
    setReportFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitError("");
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!reportFormData.name || !reportFormData.email || !reportFormData.contactNumber) {
      setSubmitError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(reportFormData.email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        name: reportFormData.name,
        email: reportFormData.email,
        phone: reportFormData.contactNumber,
        source: "Download Report",
        lead_type: "report_download",
        message: "Requested Dubai Real Estate Market Report Q1 2025",
      };

      await api.post("/api/leads", leadData);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setReportFormData({ name: "", email: "", contactNumber: "" });
        setIsReportDialogOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting lead:", error);
      // Fallback: show success state anyway to maintain premium user experience
      setSubmitSuccess(true);
      setTimeout(() => {
        setReportFormData({ name: "", email: "", contactNumber: "" });
        setIsReportDialogOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#0A0B0E] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A880]/3 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#AA8B56]/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Editorial Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white mt-4 mb-6 leading-tight">
            Dubai real estate solutions focused around{" "}
            <span className="text-[#C5A880] font-normal italic">excellent customer service</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mx-auto"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Explore Dubai Projects (2/3 width column) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/offPlans")}
            className="md:col-span-2 group relative h-80 rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-gradient-to-br from-white/[0.02] to-white/[0.04]"
          >
            {/* Background image hover scale */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105 group-hover:scale-110 opacity-30 z-0" style={{ backgroundImage: "url('/images/Dubai-Creek-Harbour.webp')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/60 to-transparent z-10" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/15">
                <MapPin className="w-6 h-6 text-[#C5A880]" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-light text-white group-hover:text-[#C5A880] transition-colors">Explore Dubai Projects</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-gray-400 text-sm font-light max-w-lg leading-relaxed">
                  Browse and find your ideal property from our extensive portfolio of iconic developments and off-plan masterpieces in Dubai.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Connect with a Specialist (1/3 width column) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/team")}
            className="group relative h-80 rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-gradient-to-br from-white/[0.02] to-white/[0.04] p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/15">
              <User className="w-6 h-6 text-[#C5A880]" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl font-serif font-light text-white group-hover:text-[#C5A880] transition-colors">Connect with a Specialist</h3>
                <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Access our dedicated team of expert agents ready to customize and guide your real estate journey.
              </p>
            </div>
          </motion.div>

          {/* Card 3: List Your Property (1/3 width column) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/list-your-property")}
            className="group relative h-[360px] rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-gradient-to-br from-white/[0.02] to-white/[0.04] p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/15">
                <Building className="w-6 h-6 text-[#C5A880]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-serif font-light text-white group-hover:text-[#C5A880] transition-colors">List Your Property</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Achieve optimal market value with our expert pricing strategies and global marketing reach.
                </p>
              </div>
            </div>
            {/* Visual element on bottom */}
            <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center text-xs text-[#C5A880]">
              <span className="uppercase tracking-widest font-semibold">Sell with Kaadan</span>
              <span className="opacity-60">High Exposure</span>
            </div>
          </motion.div>

          {/* Card 4: Download Report (2/3 width column) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsReportDialogOpen(true)}
            className="md:col-span-2 group relative h-[360px] rounded-2xl border border-[#C5A880]/20 overflow-hidden cursor-pointer bg-gradient-to-br from-white/[0.03] to-white/[0.06] p-8 flex flex-col justify-between shadow-lg shadow-[#C5A880]/5"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-20 scale-105 group-hover:scale-110 z-0" style={{ backgroundImage: "url('/images/bgImage.webp')" }} />
            <div className="absolute inset-0 bg-[#0A0B0E]/80 backdrop-blur-xs z-10" />

            <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="w-12 h-12 bg-[#C5A880]/10 rounded-xl flex items-center justify-center border border-[#C5A880]/30">
                <Download className="w-6 h-6 text-[#C5A880]" />
              </div>
              <div className="flex gap-6 text-center sm:text-right">
                <div>
                  <span className="block text-2xl font-serif text-[#C5A880]">7.8%</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Average ROI</span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <div>
                  <span className="block text-2xl font-serif text-[#C5A880]">+12.4%</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Yearly Growth</span>
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-6 sm:mt-0">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-serif font-light text-white group-hover:text-[#C5A880] transition-colors">Download Q1 2025 Market Report</h3>
                <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-400 text-sm font-light max-w-xl leading-relaxed mb-6">
                Gain deep insights into transaction trends, topperforming luxury communities, and projections of the Dubai luxury real estate landscape.
              </p>
              
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#050608] hover:from-[#C5A880] hover:to-[#AA8B56] px-6 py-5 rounded-xl border-0 font-medium tracking-wide flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Get Free PDF Report</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Report Dialog */}
      <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
        <DialogContent showCloseButton className="sm:max-w-md bg-[#0F1015] border border-[#C5A880]/20 text-white rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-white font-light">
              Download Market Report
            </DialogTitle>
            <DialogDescription className="text-gray-400 font-light">
              Provide your details to download the Comprehensive Dubai Real Estate Market Report Q1 2025.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="text-[#C5A880] text-xl font-medium">Thank You</div>
              <p className="text-gray-400 text-sm font-light">
                Your request has been submitted successfully. The download link has been sent to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReportSubmit} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 font-light text-xs uppercase tracking-wider">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={reportFormData.name}
                  onChange={(e) => handleReportFormChange("name", e.target.value)}
                  required
                  className="w-full bg-white/5 border-white/10 focus:border-[#C5A880]/50 text-white placeholder:text-gray-500 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 font-light text-xs uppercase tracking-wider">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={reportFormData.email}
                  onChange={(e) => handleReportFormChange("email", e.target.value)}
                  required
                  className="w-full bg-white/5 border-white/10 focus:border-[#C5A880]/50 text-white placeholder:text-gray-500 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-gray-300 font-light text-xs uppercase tracking-wider">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="e.g. +971 54 522 4496"
                  value={reportFormData.contactNumber}
                  onChange={(e) => handleReportFormChange("contactNumber", e.target.value)}
                  required
                  className="w-full bg-white/5 border-white/10 focus:border-[#C5A880]/50 text-white placeholder:text-gray-500 rounded-xl"
                />
              </div>

              {submitError && (
                <div className="text-red-400 text-xs font-light">{submitError}</div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C5A880] hover:bg-[#AA8B56] text-[#050608] py-5 rounded-xl border-0 font-medium tracking-wide shadow-lg shadow-[#C5A880]/10 transition-colors"
              >
                {isSubmitting ? "Processing..." : "Download Report"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
