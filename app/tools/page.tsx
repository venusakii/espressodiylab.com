import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const toolCategories = [
  {
    name: "Essential Hand Tools",
    description: "Basic tools every restorer needs",
    tools: [
      {
        name: "Hex Key Set (Metric)",
        price: "$24.99",
        rating: 4.8,
        image: "hex+key+set+metric",
        description: "Professional grade hex keys 1.5-10mm with ball end.",
      },
      {
        name: "Torque Wrench (5-25 Nm)",
        price: "$89.00",
        rating: 4.9,
        image: "torque+wrench+precision",
        description: "Click-type torque wrench for precise fastening.",
      },
      {
        name: "Precision Screwdriver Set",
        price: "$32.50",
        rating: 4.7,
        image: "precision+screwdriver+set",
        description: "Phillips and flathead in various sizes.",
      },
    ],
  },
  {
    name: "Measurement & Testing",
    description: "Accurate diagnostic and calibration tools",
    tools: [
      {
        name: "Digital Multimeter",
        price: "$45.00",
        rating: 4.8,
        image: "digital+multimeter+professional",
        description: "Voltage, current, and resistance measurement.",
      },
      {
        name: "Pressure Gauge (0-15 bar)",
        price: "$45.00",
        rating: 4.7,
        image: "pressure+gauge+espresso",
        description: "Glycerin-filled gauge with 1/4 NPT connection.",
      },
      {
        name: "Digital Thermometer Probe",
        price: "$28.99",
        rating: 4.6,
        image: "digital+thermometer+probe",
        description: "Fast-response probe thermometer 0-200°C.",
      },
    ],
  },
  {
    name: "Cleaning & Maintenance",
    description: "Specialized cleaning equipment",
    tools: [
      {
        name: "Espresso Machine Cleaning Kit",
        price: "$34.99",
        rating: 4.9,
        image: "espresso+cleaning+kit",
        description: "Brushes, detergent, and backflush disc.",
      },
      {
        name: "Descaling Solution (2L)",
        price: "$18.50",
        rating: 4.7,
        image: "descaling+solution+espresso",
        description: "Food-safe citric acid-based descaler.",
      },
      {
        name: "Wire Brush Set",
        price: "$15.99",
        rating: 4.6,
        image: "wire+brush+set+cleaning",
        description: "Stainless steel and brass brushes for detail work.",
      },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Professional Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Precision instruments and specialized equipment for espresso machine restoration. From basic hand tools to
            advanced diagnostic equipment.
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      {toolCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 px-4 ${categoryIndex % 2 === 1 ? "bg-card" : ""}`}>
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="font-heading text-4xl mb-2">{category.name}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <Card key={toolIndex} className="overflow-hidden hover:border-primary transition-all group">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=400&query=${tool.image}`}
                      alt={tool.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-lg flex-1">{tool.name}</h3>
                      <span className="text-primary font-bold text-xl flex-shrink-0 ml-2">{tool.price}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-sm">
                      <div className="flex items-center text-amber-500">
                        {"★".repeat(Math.floor(tool.rating))}
                        {"☆".repeat(5 - Math.floor(tool.rating))}
                      </div>
                      <span className="text-muted-foreground">{tool.rating}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>

                    <Button className="w-full bg-primary text-primary-foreground group-hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Amazon
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Recommended Toolkit */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Recommended Starter Kit</Badge>
          <h2 className="font-heading text-4xl mb-4">Complete Restoration Toolkit</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Everything you need to get started with espresso machine restoration. Carefully selected tools that cover
            90% of common restoration tasks.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground">
              View Complete Kit
            </Button>
            <Button size="lg" variant="outline">
              Build Custom Kit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
