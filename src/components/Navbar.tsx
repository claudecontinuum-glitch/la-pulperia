"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, MapPin, Briefcase, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/explorar", label: "Explorar", icon: MapPin },
    { href: "/chambas", label: "Chambas", icon: Briefcase },
    { href: "/registrar", label: "Registrar", icon: PlusCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-pulp-cream/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-pulp-orange">
              La Pulpería
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-base font-medium text-gray-700 transition-colors hover:text-pulp-orange"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/buscar"
              className="rounded-full bg-pulp-orange/10 p-2 text-pulp-orange transition-colors hover:bg-pulp-orange/20"
            >
              <Search className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pulp-orange/10 hover:text-pulp-orange"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/buscar"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pulp-orange/10 hover:text-pulp-orange"
            >
              <Search className="h-5 w-5" />
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
