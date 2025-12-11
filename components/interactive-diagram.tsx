"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface DiagramPart {
  id: string
  name: string
  description: string
  x: number
  y: number
}

interface InteractiveDiagramProps {
  parts: DiagramPart[]
  imageUrl: string
  imageAlt: string
}

export function InteractiveDiagram({ parts, imageUrl, imageAlt }: InteractiveDiagramProps) {
  const [activePart, setActivePart] = useState<string | null>(null)

  return (
    <div className="relative">
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto" />
        {parts.map((part) => (
          <button
            key={part.id}
            className="absolute w-8 h-8 rounded-full bg-copper hover:bg-copper-light border-2 border-cream transition-all hover:scale-110"
            style={{ left: `${part.x}%`, top: `${part.y}%`, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setActivePart(part.id)}
            onMouseLeave={() => setActivePart(null)}
            aria-label={part.name}
          >
            <span className="text-cream text-xs font-bold">+</span>
          </button>
        ))}
      </div>
      {activePart && (
        <Card className="mt-4 p-4 bg-steel border-copper">
          {parts
            .filter((p) => p.id === activePart)
            .map((part) => (
              <div key={part.id}>
                <h4 className="font-display text-lg text-copper mb-2">{part.name}</h4>
                <p className="text-cream text-sm">{part.description}</p>
              </div>
            ))}
        </Card>
      )}
    </div>
  )
}
