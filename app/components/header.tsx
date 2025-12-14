"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/data", label: "Our Data" },
    { href: "/work", label: "Our Work" },
    { href: "/content", label: "Content Hub" },
  ];

  return (
    <header className="bg-white border-b border-gray-100">
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
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 text-white text-sm font-medium rounded hover:bg-purple-800 transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
            Donate
          </Link>
          <Link
            href="/dataportal"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 text-white text-sm font-medium rounded hover:bg-purple-800 transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
            Open Data Portal
          </Link>
        </div>
      </div>
    </header>
  );
}
