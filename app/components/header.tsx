"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navLinks = [
    { 
      href: "/about", 
      label: "About",
      subMenus: [
        { href: "/about/partners", label: "Partners" },
        { href: "/about/involve", label: "Get Involved" },
        { href: "/about/careers", label: "Careers" },
        { href: "/about/media", label: "Media" },
        { href: "/about/faqs", label: "FAQs" },
      ]
    },
    { href: "/data", label: "Our Data" },
    { 
      href: "/work", 
      label: "Our Work",
      subMenus: [
        { href: "/work/priorities", label: "Our Priorities" },
        { href: "/work/sectors", label: "Sectors of Focus" },
        { href: "/work/science-tech", label: "Science & Technology" },
        { href: "/work/impact", label: "Impact" },
      ]
    },
    { href: "/content", label: "Content Hub" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="relative flex items-center gap-1">
            <span className="text-lg font-bold tracking-wide text-gray-900 block leading-tight">
              gha
            </span>
            <span className="text-lg font-bold tracking-widest text-gray-900 block leading-tight">
              CBM
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const hasSubMenu = link.subMenus && link.subMenus.length > 0;
            const isActive = pathname === link.href || (hasSubMenu && pathname.startsWith(link.href));
            
            return (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => hasSubMenu && setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-orange-500" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {hasSubMenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === link.label ? "rotate-180" : ""}`} />
                  )}
                  {isActive && !hasSubMenu && (
                    <motion.span 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hasSubMenu && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50 overflow-hidden"
                    >
                      {link.subMenus?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-orange-50 hover:text-orange-600 ${
                            pathname === sub.href ? "text-orange-600 bg-orange-50 font-semibold" : "text-gray-600"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 text-white text-sm font-medium rounded hover:bg-purple-800 transition-all hover:shadow-lg active:scale-95"
          >
            <ArrowUpRight className="w-4 h-4" />
            Donate
          </Link>
          <Link
            href="/dataportal"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 text-white text-sm font-medium rounded hover:bg-purple-800 transition-all hover:shadow-lg active:scale-95"
          >
            <ArrowUpRight className="w-4 h-4" />
            Open Data Portal
          </Link>
        </div>
      </div>
    </header>
  );
}
