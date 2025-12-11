import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Wrench, Clock, BarChart3, Download, ExternalLink } from "lucide-react"

// This would normally come from a database or CMS
const machineData = {
  slug: "la-marzocco-gs3",
  name: "La Marzocco GS/3",
  year: "1970-1975",
  brand: "La Marzocco",
  difficulty: "Advanced",
  estimatedTime: "12-16 hours",
  image: "la+marzocco+gs3+vintage+espresso+machine+detailed",
  hero: "la+marzocco+gs3+hero+shot+copper+lighting",
  description:
    "The La Marzocco GS/3 represents the pinnacle of dual-boiler espresso technology from the 1970s. Featuring a saturated group head design and independent temperature control, this machine was a favorite among specialty coffee shops and set the foundation for modern espresso engineering.",
  specs: {
    boilerCapacity: "3.5L + 1.5L",
    groupHeads: "1-2 (depending on model)",
    voltage: "220V",
    power: "3000W",
    dimensions: "50cm x 60cm x 45cm",
    weight: "45kg",
    pressure: "9 bar",
    temperature: "90-96°C",
  },
  history:
    "Introduced in the early 1970s, the GS/3 revolutionized espresso extraction with its dual-boiler system, allowing simultaneous brewing and steaming at optimal temperatures. La Marzocco's saturated group head design became an industry standard.",
  tools: [
    "Hex key set (2-10mm)",
    "Torque wrench",
    "Digital multimeter",
    "Pressure gauge (0-15 bar)",
    "Temperature probe",
    "Teflon tape",
    "Food-safe lubricant",
    "Descaling solution",
  ],
  steps: [
    {
      phase: "Disassembly",
      duration: "2-3 hours",
      steps: [
        "Disconnect power and water supply",
        "Remove panels and document screw locations",
        "Drain both boilers completely",
        "Disconnect electrical connections (photograph each)",
        "Remove group head assembly",
      ],
    },
    {
      phase: "Cleaning",
      duration: "3-4 hours",
      steps: [
        "Descale boilers with citric acid solution",
        "Clean group head components with backflushing detergent",
        "Polish exterior chrome with metal polish",
        "Inspect gaskets and seals for wear",
        "Clean steam wand and milk system",
      ],
    },
    {
      phase: "Calibration",
      duration: "4-5 hours",
      steps: [
        "Test and calibrate pressure stat (9 bar)",
        "Verify temperature stability with probe",
        "Adjust pump pressure to specification",
        "Test safety valve operation",
        "Calibrate PID controller (if equipped)",
      ],
    },
    {
      phase: "Testing",
      duration: "2-3 hours",
      steps: [
        "Run test cycle without coffee",
        "Check for leaks under pressure",
        "Verify temperature at group head",
        "Test steam pressure and quality",
        "Perform extraction test shots",
      ],
    },
  ],
  compatibleParts: [
    { name: "E61 Group Gasket (8.5mm)", price: "$12.99", link: "#" },
    { name: "Shower Screen (58mm)", price: "$18.50", link: "#" },
    { name: "Pump Rebuild Kit", price: "$45.00", link: "#" },
    { name: "Boiler Gasket Set", price: "$28.00", link: "#" },
    { name: "Pressure Stat", price: "$65.00", link: "#" },
  ],
}

export default function MachinePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4 bg-background border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/machines"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Machine Index
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden group">
              <img
                src={`/.jpg?height=800&width=800&query=${machineData.hero}`}
                alt={machineData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-primary uppercase tracking-wider">{machineData.brand}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{machineData.year}</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl mb-6">{machineData.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{machineData.description}</p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="p-4 text-center border-border">
                  <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Difficulty</p>
                  <p className="font-semibold">{machineData.difficulty}</p>
                </Card>
                <Card className="p-4 text-center border-border">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Est. Time</p>
                  <p className="font-semibold text-sm">{machineData.estimatedTime}</p>
                </Card>
                <Card className="p-4 text-center border-border">
                  <Wrench className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Tools</p>
                  <p className="font-semibold">{machineData.tools.length} needed</p>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide (PDF)
                </Button>
                <Button size="lg" variant="outline">
                  View Video Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="specs">Specs & History</TabsTrigger>
              <TabsTrigger value="diagram">Exploded Diagram</TabsTrigger>
              <TabsTrigger value="restoration">DIY Steps</TabsTrigger>
              <TabsTrigger value="parts">Compatible Parts</TabsTrigger>
            </TabsList>

            {/* Specs & History Tab */}
            <TabsContent value="specs" className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl mb-6">Technical Specifications</h2>
                <Card className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(machineData.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="font-heading text-3xl mb-6">Historical Context</h2>
                <Card className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{machineData.history}</p>
                </Card>
              </div>
            </TabsContent>

            {/* Exploded Diagram Tab */}
            <TabsContent value="diagram">
              <h2 className="font-heading text-3xl mb-6">Interactive Exploded Diagram</h2>
              <Card className="p-8 bg-muted/30">
                <div className="aspect-video flex items-center justify-center">
                  <img src="/technical-blueprint-exploded-view-espresso-machine.jpg" alt="Exploded diagram" className="max-w-full h-auto" />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Click on components to view detailed specifications and replacement options
                </p>
              </Card>
            </TabsContent>

            {/* DIY Steps Tab */}
            <TabsContent value="restoration" className="space-y-6">
              <div className="mb-8">
                <h2 className="font-heading text-3xl mb-4">Restoration Timeline</h2>
                <p className="text-muted-foreground">
                  This comprehensive restoration guide covers all phases from initial disassembly through final testing.
                </p>
              </div>

              {/* Tools Needed */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-heading text-xl mb-4">Required Tools</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {machineData.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Restoration Steps */}
              <div className="space-y-6">
                {machineData.steps.map((section, i) => (
                  <Card key={i} className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-2xl">
                        Phase {i + 1}: {section.phase}
                      </h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {section.duration}
                      </span>
                    </div>
                    <ol className="space-y-3">
                      {section.steps.map((step, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                            {j + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Compatible Parts Tab */}
            <TabsContent value="parts" className="space-y-6">
              <div className="mb-8">
                <h2 className="font-heading text-3xl mb-4">Compatible Parts & Accessories</h2>
                <p className="text-muted-foreground">
                  Replacement parts and upgrades specifically compatible with the {machineData.name}.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {machineData.compatibleParts.map((part, i) => (
                  <Card key={i} className="p-6 hover:border-primary transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{part.name}</h3>
                      <span className="text-primary font-bold">{part.price}</span>
                    </div>
                    <Button size="sm" className="w-full bg-primary text-primary-foreground group-hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Amazon
                    </Button>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-muted/30 border-dashed">
                <p className="text-center text-sm text-muted-foreground">
                  <strong>Note:</strong> As an Amazon Associate, EspressoDIYLab earns from qualifying purchases. This
                  helps us maintain our free restoration guides.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Machines */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">Similar Machines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Faema E61", "Rancilio Silvia", "La Pavoni Europiccola"].map((machine, i) => (
              <Card key={i} className="overflow-hidden hover:border-primary transition-all group cursor-pointer">
                <div className="h-48 bg-muted">
                  <img
                    src={`/.jpg?height=300&width=400&query=${machine}+espresso+machine`}
                    alt={machine}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl group-hover:text-primary transition-colors">{machine}</h3>
                  <Button variant="link" className="px-0 text-primary">
                    View Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
