"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Step {
  id: string
  title: string
  completed: boolean
}

interface ProgressTrackerProps {
  steps: Step[]
  tutorialId: string
}

export function ProgressTracker({ steps: initialSteps, tutorialId }: ProgressTrackerProps) {
  const [steps, setSteps] = useState(initialSteps)

  useEffect(() => {
    const saved = localStorage.getItem(`tutorial-${tutorialId}`)
    if (saved) {
      setSteps(JSON.parse(saved))
    }
  }, [tutorialId])

  const toggleStep = (stepId: string) => {
    const newSteps = steps.map((step) => (step.id === stepId ? { ...step, completed: !step.completed } : step))
    setSteps(newSteps)
    localStorage.setItem(`tutorial-${tutorialId}`, JSON.stringify(newSteps))
  }

  const progress = Math.round((steps.filter((s) => s.completed).length / steps.length) * 100)

  return (
    <div className="sticky top-20 bg-steel border border-copper rounded-lg p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg text-copper">Your Progress</h3>
          <span className="text-cream font-mono">{progress}%</span>
        </div>
        <div className="w-full bg-espresso rounded-full h-2">
          <div className="bg-copper h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="space-y-2">
        {steps.map((step) => (
          <Button
            key={step.id}
            variant="ghost"
            onClick={() => toggleStep(step.id)}
            className={`w-full justify-start text-left ${step.completed ? "text-copper" : "text-cream"}`}
          >
            <div
              className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                step.completed ? "bg-copper border-copper" : "border-cream"
              }`}
            >
              {step.completed && <Check className="h-3 w-3 text-espresso" />}
            </div>
            <span className="text-sm">{step.title}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
