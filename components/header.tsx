"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchOverlay } from "@/components/search-overlay"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative gear-spin">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <circle cx="12" cy="12" r="4" fill="currentColor" className="text-primary" />
              </svg>
            </div>
            <span className="font-mono text-lg font-bold tracking-tight">EspressoDIYLab</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/tutorials" className="hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link href="/machines" className="hover:text-primary transition-colors">
              Machines
            </Link>
            <Link href="/grinders" className="hover:text-primary transition-colors">
              Grinders
            </Link>
            <Link href="/parts" className="hover:text-primary transition-colors">
              Parts
            </Link>
            <Link href="/tools" className="hover:text-primary transition-colors">
              Tools
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <SearchOverlay />
            <Button variant="ghost" size="icon" className="hover:text-primary relative group">
              <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
