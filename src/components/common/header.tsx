"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  User,
  Settings,
  Home,
  DollarSign,
  Scale,
  Bed,
  Wrench,
  Users,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";

import { useCurrency, AVAILABLE_CURRENCIES } from "@/src/context/CurrencyContext";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/buy", label: "Buy", icon: <Home className="h-5 w-5" /> },
    { href: "/rent", label: "Rent", icon: <Bed className="h-5 w-5" /> },
    { href: "/offPlans", label: "Projects", icon: <Building2 className="h-5 w-5" /> },
    { href: "/team", label: "Teams", icon: <Users className="h-5 w-5" /> },
    { href: "/communities", label: "Areas", icon: <Globe className="h-5 w-5" /> },
    { href: "/service", label: "Services", icon: <Wrench className="h-5 w-5" /> },
    { href: "/blog", label: "Blogs", icon: <TrendingUp className="h-5 w-5" /> },
    { href: "/careers", label: "Careers", icon: <User className="h-5 w-5" /> },
    { href: "/contactUs", label: "Contact Us", icon: <Globe className="h-5 w-5" /> },
  ];

  const services = [
    {
      icon: <Settings className="h-4 w-4 text-[#C5A880]" />,
      name: "Property Management",
    },
    {
      icon: <Home className="h-4 w-4 text-[#C5A880]" />,
      name: "List Your Property",
    },
    {
      icon: <DollarSign className="h-4 w-4 text-[#C5A880]" />,
      name: "Mortgages",
    },
    {
      icon: <Scale className="h-4 w-4 text-[#C5A880]" />,
      name: "Conveyancing",
    },
    {
      icon: <Bed className="h-4 w-4 text-[#C5A880]" />,
      name: "Short Term Rentals",
    },
    {
      icon: <Wrench className="h-4 w-4 text-[#C5A880]" />,
      name: "Property Snagging",
    },
    {
      icon: <Users className="h-4 w-4 text-[#C5A880]" />,
      name: "Partner Program",
    },
  ];

  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contactUs", label: "Contact Us" },
  ];

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.closest("[data-mobile-overlay]")) {
        return;
      }
      setIsOverlayOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOverlayOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0B0E]/95 backdrop-blur-xl border-b border-[#C5A880]/20 shadow-lg text-white"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/Kaadan-Properties-Logo-980x791.png"
              alt="Kaadan Real Estate Logo"
              width={75}
              height={60}
              className="object-contain w-[65px] h-[52px] sm:w-[75px] sm:h-[60px] brightness-110"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <HoverCard key={i} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pb-1 transition-all duration-300 font-light text-sm hover:text-[#C5A880]",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                        "after:bg-[#C5A880] after:transition-all after:duration-300 hover:after:w-full",
                        pathname.startsWith(link.href) && "after:w-full text-[#C5A880]"
                      )}
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {link.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[520px] p-0" sideOffset={15}>
                    <div className="bg-[#121318] text-white rounded-xl shadow-2xl border border-[#C5A880]/20 p-6">
                      <div className="pb-3 border-b border-white/10 mb-4">
                        <h3 className="text-[#C5A880] text-xs uppercase tracking-wider font-semibold">Our Specialized Services</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          {services.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              href={
                                service.name === "List Your Property" ? "/list-your-property" :
                                service.name === "Property Management" ? "/property-management" :
                                service.name === "Mortgages" ? "/mortgages" :
                                service.name === "Conveyancing" ? "/conveyancing" :
                                "/service"
                              }
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer group"
                            >
                              <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                                {service.icon}
                              </div>
                              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>

                        <div className="space-y-3">
                          {services.slice(4, 7).map((service, index) => (
                            <Link
                              key={index + 4}
                              href={
                                service.name === "Short Term Rentals" ? "/short-term-rental" :
                                "/service"
                              }
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer group"
                            >
                              <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                                {service.icon}
                              </div>
                              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }
            
            return (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "relative pb-1 transition-all duration-300 font-light text-sm hover:text-[#C5A880]",
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                  "after:bg-[#C5A880] after:transition-all after:duration-300 hover:after:w-full",
                  pathname === link.href && "after:w-full text-[#C5A880]"
                )}
                style={{ letterSpacing: "0.5px" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side - Currency, Login, Signup */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* Currency Display */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-1">
              <Globe className="h-3.5 w-3.5 text-[#C5A880]" />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 outline-none text-xs font-light hover:text-[#C5A880] transition-colors">
                  <span>{currency}</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[100px] z-[99999] bg-[#121318] text-white border border-[#C5A880]/20 shadow-2xl rounded-md p-1">
                  {AVAILABLE_CURRENCIES.map((c) => (
                    <DropdownMenuItem
                      key={c}
                      className={cn(
                        "text-xs cursor-pointer px-2 py-1.5 rounded-sm hover:bg-white/5 hover:text-[#C5A880] transition-colors",
                        currency === c && "text-[#C5A880] bg-white/5 font-medium"
                      )}
                      onSelect={() => setCurrency(c)}
                    >
                      {c}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Login Button */}
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden sm:flex items-center space-x-2 bg-transparent h-9 px-4 border-white/20 text-white hover:border-[#C5A880] hover:text-[#C5A880] transition-all duration-300"
            >
              <User className="h-3.5 w-3.5" />
              <span className="text-xs font-light">Login</span>
            </Button>
          </Link>

          {/* List Your Property Button */}
          <Link href="/list-your-property">
            <Button className="h-9 px-4 text-xs font-medium bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:from-[#C5A880] hover:to-[#AA8B56] text-[#0A0B0E] border-0 transition-all duration-300 rounded-lg shadow-lg shadow-[#C5A880]/10">
              List Property
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer transition-colors duration-200 hover:text-[#C5A880] p-1.5"
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Backdrop */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-300"
          onClick={() => setIsOverlayOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        data-mobile-overlay
        className={`fixed top-0 left-0 w-screen h-screen bg-[#0A0B0E] text-white z-[9999] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center">
            <Image
              src="/Kaadan-Properties-Logo-980x791.png"
              alt="Kaadan Real Estate Logo"
              width={65}
              height={52}
              className="object-contain w-[65px] h-[52px]"
            />
          </div>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="text-gray-400 hover:text-[#C5A880] transition-colors p-2 rounded-full hover:bg-white/5 border border-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 space-y-2 scrollbar-hide">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-300 hover:text-[#C5A880] py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300",
                      isServicesOpen && "bg-white/5"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn("p-2 rounded-lg bg-white/5", isServicesOpen && "text-[#C5A880]")}>
                        {link.icon}
                      </div>
                      <span className={cn("font-medium", isServicesOpen && "text-[#C5A880]")}>{link.label}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isServicesOpen && "rotate-180 text-[#C5A880]"
                      )}
                    />
                  </button>

                  {/* Mobile Dropdown Menu Items */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="ml-11 mt-1 space-y-1 border-l border-[#C5A880]/30 pl-4">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Property Management" ? "/property-management" :
                            service.name === "Mortgages" ? "/mortgages" :
                            service.name === "Conveyancing" ? "/conveyancing" :
                            service.name === "Short Term Rentals" ? "/short-term-rental" :
                            "/service"
                          }
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group text-gray-400 hover:text-white"
                        >
                          <div className="flex-shrink-0 text-[#C5A880]">
                            {service.icon}
                          </div>
                          <span className="text-sm font-light">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 text-gray-300 hover:text-[#C5A880] py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300",
                  pathname === link.href && "text-[#C5A880] font-medium bg-white/5"
                )}
                onClick={() => setIsOverlayOpen(false)}
              >
                <div className={cn("p-2 rounded-lg bg-white/5", pathname === link.href && "text-[#C5A880]")}>
                  {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold ml-1">Select Currency</span>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_CURRENCIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={cn(
                    "text-xs px-3.5 py-2 rounded-lg transition-all duration-300 border",
                    currency === c
                      ? "bg-[#C5A880] border-[#C5A880] text-[#0A0B0E] font-medium shadow-md shadow-[#C5A880]/10"
                      : "bg-transparent border-white/10 text-gray-400 hover:border-[#C5A880] hover:text-[#C5A880]"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link href="/login" onClick={() => setIsOverlayOpen(false)}>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 border-white/10 text-white hover:border-[#C5A880] hover:text-[#C5A880] transition-colors rounded-xl h-11 bg-transparent"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/list-your-property" onClick={() => setIsOverlayOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#0A0B0E] font-medium shadow-lg hover:from-[#C5A880] transition-all duration-300 rounded-xl h-11 border-0">
                List Property
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
