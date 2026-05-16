"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Sparkles, Target, Users, Briefcase, PlayCircle, HelpCircle, Activity, Lightbulb, Zap, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navLinks = [
    { 
      href: "/about", 
      label: "About",
      subMenus: [
        { href: "/about/partners", label: "Partners", desc: "Collaborate with our network", icon: Users },
        { href: "/about/involve", label: "Get Involved", desc: "Join our community efforts", icon: Target },
        { href: "/about/careers", label: "Careers", desc: "Join our growing team", icon: Briefcase },
        { href: "/about/media", label: "Media", desc: "Press releases and news", icon: PlayCircle },
        { href: "/about/faqs", label: "FAQs", desc: "Commonly asked questions", icon: HelpCircle },
      ]
    },
    { href: "/data", label: "Our Data" },
    { 
      href: "/work", 
      label: "Our Work",
      subMenus: [
        { href: "/work/priorities", label: "Our Priorities", desc: "Key focus areas", icon: Activity },
        { href: "/work/sectors", label: "Sectors of Focus", desc: "Where we make an impact", icon: Globe },
        { href: "/work/science-tech", label: "Science & Technology", desc: "Innovation and research", icon: Lightbulb },
        { href: "/work/impact", label: "Impact", desc: "Measuring our success", icon: Zap },
      ]
    },
    { href: "/content", label: "Content Hub" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="relative flex items-center">
            <Image src="/logo.png" alt="Logo" width={130} height={100} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-0 xl:gap-1">
          {navLinks.map((link) => {
            const hasSubMenu = link.subMenus && link.subMenus.length > 0;
            const isActive = pathname === link.href || (hasSubMenu && pathname.startsWith(link.href));
            
            return (
              <div
                key={link.label}
                className="relative group px-1 py-2"
                onMouseEnter={() => hasSubMenu && setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`relative z-10 flex items-center gap-1.5 py-1.5 px-3 text-[15px] font-medium transition-colors rounded-full ${
                    isActive ? "text-orange-600 bg-orange-50/50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                  }`}
                >
                  {link.label}
                  {hasSubMenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === link.label ? "rotate-180 text-orange-500" : "text-gray-400"}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {hasSubMenu && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95, rotateX: -10 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: -10 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 origin-top ring-1 ring-gray-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/20 rounded-2xl pointer-events-none" />
                      <div className="relative z-10 flex flex-col gap-1">
                        {link.subMenus?.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`group/item flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                                isSubActive ? "bg-orange-50" : "hover:bg-gray-50"
                              }`}
                            >
                              <div className={`mt-0.5 p-2 rounded-lg transition-colors ${
                                isSubActive ? "bg-orange-100 text-orange-600" : "bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 group-hover/item:text-orange-500 group-hover/item:ring-orange-100"
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className={`block text-sm font-semibold transition-colors ${
                                  isSubActive ? "text-orange-600" : "text-gray-800 group-hover/item:text-orange-600"
                                }`}>
                                  {sub.label}
                                </span>
                                <span className="block text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-600 transition-colors">
                                  {sub.desc}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
              Donate
            </span>
          </Link>
          <Link
            href="/dataportal"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            Open Data Portal
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  );
}
