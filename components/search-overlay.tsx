"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-cream hover:text-copper"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-espresso/95 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="w-full max-w-2xl mx-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-steel" />
          <Input
            type="text"
            placeholder="Search machines, tutorials, parts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-12 h-14 text-lg bg-steel border-copper focus:border-copper-light"
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {query && (
          <div className="mt-4 bg-steel border border-copper rounded-lg p-4 max-h-96 overflow-y-auto">
            <div className="space-y-2">
              <Link
                href={`/machines?q=${query}`}
                className="block p-3 hover:bg-espresso rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-copper font-semibold">Search Machines</p>
                <p className="text-cream text-sm">Find "{query}" in machine database</p>
              </Link>
              <Link
                href={`/tutorials?q=${query}`}
                className="block p-3 hover:bg-espresso rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-copper font-semibold">Search Tutorials</p>
                <p className="text-cream text-sm">Find "{query}" in tutorials</p>
              </Link>
              <Link
                href={`/parts?q=${query}`}
                className="block p-3 hover:bg-espresso rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-copper font-semibold">Search Parts</p>
                <p className="text-cream text-sm">Find "{query}" in parts catalog</p>
              </Link>
            </div>
          </div>
        )}
        <p className="text-cream/60 text-sm mt-4 text-center">Press ESC to close</p>
      </div>
    </div>
  )
}
