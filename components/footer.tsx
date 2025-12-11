"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  const handleCookieResponse = () => {
    setShowCookieBanner(false)
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-border overflow-hidden">
      {/* Smoke effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="steam-particle absolute bottom-0 left-1/4 w-32 h-32 bg-muted-foreground/20 rounded-full blur-3xl" />
        <div
          className="steam-particle absolute bottom-0 right-1/4 w-32 h-32 bg-muted-foreground/20 rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl mb-4 text-balance">Preserve the Machines That Made Coffee Great.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join 10,000 restorers and receive exclusive espresso engineering tips.
          </p>

          {/* Newsletter */}
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="bg-card border-border" />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe ⚙️</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/machines" className="hover:text-primary transition-colors">
                  Machines
                </Link>
              </li>
              <li>
                <Link href="/grinders" className="hover:text-primary transition-colors">
                  Grinders
                </Link>
              </li>
              <li>
                <Link href="/parts" className="hover:text-primary transition-colors">
                  Parts
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-primary transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tutorials" className="hover:text-primary transition-colors">
                  All Tutorials
                </Link>
              </li>
              <li>
                <Link href="/tutorials/steam-systems" className="hover:text-primary transition-colors">
                  Steam Systems
                </Link>
              </li>
              <li>
                <Link href="/tutorials/pressure-gauges" className="hover:text-primary transition-colors">
                  Pressure Gauges
                </Link>
              </li>
              <li>
                <Link href="/tutorials/calibration" className="hover:text-primary transition-colors">
                  Calibration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 EspressoDIYLab.com — All rights reserved.</p>
        </div>
      </div>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-card border border-border rounded-lg p-4 shadow-lg z-50">
          <p className="text-sm mb-3">☕ We use cookies to optimize your brewing experience — precise and balanced.</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={handleCookieResponse}>
              Decline
            </Button>
            <Button size="sm" className="flex-1 bg-primary text-primary-foreground" onClick={handleCookieResponse}>
              Accept
            </Button>
          </div>
        </div>
      )}
    </footer>
  )
}
