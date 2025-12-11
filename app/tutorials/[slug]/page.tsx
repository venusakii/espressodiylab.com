import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft, Clock, BarChart3, Download } from "lucide-react"

const tutorialData = {
  slug: "restoring-1970s-la-marzocco-gs3",
  title: "Restoring a 1970s La Marzocco GS/3",
  category: "Classic Espresso Machines",
  difficulty: "Advanced",
  duration: "8-12 hours",
  views: "24.5K",
  description:
    "This comprehensive tutorial guides you through the complete restoration of a vintage La Marzocco GS/3, including disassembly, cleaning, part replacement, calibration, and testing. Perfect for experienced restorers looking to breathe new life into this iconic machine.",
  videoUrl: "restoration-video-la-marzocco.mp4",
  poster: "la+marzocco+gs3+restoration+hero",
  skillLevel: "Advanced - Requires experience with espresso machine mechanics and electrical systems",
  estimatedCost: "$200-400 (parts and materials)",
  tools: [
    "Hex key set (2-10mm)",
    "Torque wrench",
    "Digital multimeter",
    "Pressure gauge (0-15 bar)",
    "Temperature probe",
    "Teflon tape",
    "Food-safe lubricant",
    "Descaling solution",
    "Phillips screwdriver set",
    "Wire brushes",
  ],
  sections: [
    {
      id: "disassembly",
      title: "Disassembly",
      duration: "2-3 hours",
      completed: false,
      description: "Carefully document and dismantle the machine to access all components",
      steps: [
        {
          title: "Safety First",
          content:
            "Disconnect the machine from power and water supply. Allow at least 2 hours for cooling. Verify voltage is zero with multimeter.",
          tips: ["Take photos at every step for reassembly reference", "Use labeled bags for screws and small parts"],
        },
        {
          title: "Remove External Panels",
          content: "Remove top, side, and back panels. Document screw locations and types. Note any shims or spacers.",
          tips: ["Keep a diagram of screw locations", "Check for hidden fasteners behind badges"],
        },
        {
          title: "Drain Boilers",
          content:
            "Open drain valves and remove water from both boilers completely. Check for sediment in drained water as indicator of scale buildup.",
          tips: ["Use a bucket to catch water", "Inspect water quality for maintenance insights"],
        },
        {
          title: "Document Electrical Connections",
          content: "Photograph every electrical connection before disconnecting. Use masking tape labels on wires.",
          tips: ["Create a wiring diagram", "Note wire colors and positions"],
        },
        {
          title: "Remove Group Head Assembly",
          content: "Unbolt the group head from the boiler. Handle with care as it's heavy and precision-machined.",
          tips: ["Support the group head weight", "Check gasket condition during removal"],
        },
      ],
    },
    {
      id: "cleaning",
      title: "Cleaning & Descaling",
      duration: "3-4 hours",
      completed: false,
      description: "Deep clean all components and remove years of buildup",
      steps: [
        {
          title: "Boiler Descaling",
          content:
            "Mix citric acid solution (50g per liter) and fill boilers. Let soak for 2-3 hours. Flush thoroughly with clean water.",
          tips: ["Use food-grade citric acid only", "Multiple flushes may be needed for heavy scale"],
        },
        {
          title: "Group Head Cleaning",
          content:
            "Disassemble group components. Backflush with cleaning detergent. Soak dispersion screen and gasket holder.",
          tips: ["Use specialized espresso machine cleaner", "Clean shower screen thoroughly"],
        },
        {
          title: "Exterior Polishing",
          content: "Polish chrome and stainless steel surfaces with metal polish. Buff to mirror finish.",
          tips: ["Use microfiber cloths", "Protect polished surfaces during reassembly"],
        },
        {
          title: "Gasket & Seal Inspection",
          content: "Examine all gaskets and seals. Replace any that show cracks, compression set, or hardening.",
          tips: ["Keep a replacement gasket kit handy", "Lubricate new gaskets with food-safe grease"],
        },
      ],
    },
    {
      id: "calibration",
      title: "Calibration & Testing",
      duration: "4-5 hours",
      completed: false,
      description: "Fine-tune all systems for optimal performance",
      steps: [
        {
          title: "Pressure Calibration",
          content:
            "Connect pressure gauge to group head. Adjust pump pressure to 9 bar. Verify pressure stat cutoff at 1.2 bar steam pressure.",
          tips: ["Make small adjustments", "Test under load conditions"],
        },
        {
          title: "Temperature Verification",
          content:
            "Install temperature probe at group head. Verify brew temperature at 93°C ±1°C. Adjust thermostat if needed.",
          tips: ["Allow thermal stabilization time", "Test at multiple points in brew cycle"],
        },
        {
          title: "Pump Performance",
          content: "Verify pump flow rate and pressure curve. Check for unusual noise or vibration.",
          tips: ["Listen for cavitation sounds", "Ensure proper water supply"],
        },
        {
          title: "Safety Systems",
          content: "Test safety valve operation. Verify vacuum breaker function. Check all pressure relief mechanisms.",
          tips: ["Never bypass safety systems", "Replace questionable safety components"],
        },
      ],
    },
    {
      id: "brew-test",
      title: "Final Testing & Brew",
      duration: "2-3 hours",
      completed: false,
      description: "Comprehensive testing and first espresso shots",
      steps: [
        {
          title: "Dry Run Test",
          content:
            "Run machine through complete cycle without coffee. Monitor for leaks, unusual sounds, or performance issues.",
          tips: ["Check all connection points for leaks", "Verify proper warm-up time"],
        },
        {
          title: "Temperature Stability",
          content: "Monitor group temperature over 30 minutes. Should remain stable within ±0.5°C after warm-up.",
          tips: ["Use a group head thermometer", "Document temperature curve"],
        },
        {
          title: "Extraction Test",
          content: "Pull test shots with fresh coffee. Aim for 30-second extraction at 9 bar yielding 2:1 brew ratio.",
          tips: ["Use quality coffee", "Adjust grind to achieve target extraction"],
        },
        {
          title: "Steam Performance",
          content: "Test steam wand pressure and quality. Should produce dry steam for milk texturing.",
          tips: ["Allow proper steam pressure to build", "Check for water spitting"],
        },
      ],
    },
  ],
  partsUsed: [
    { name: "Group Gasket Set", price: "$24.99" },
    { name: "Boiler Gaskets", price: "$28.00" },
    { name: "Pump Rebuild Kit", price: "$45.00" },
    { name: "Pressure Stat", price: "$65.00" },
    { name: "Safety Valve", price: "$32.00" },
  ],
}

export default function TutorialPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4 bg-background border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tutorials
          </Link>
        </div>
      </div>

      {/* Video Hero */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6 relative group">
            <img
              src={`/.jpg?height=720&width=1280&query=${tutorialData.poster}`}
              alt={tutorialData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <span className="text-2xl mr-3">▶</span>
                Play Tutorial
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{tutorialData.category}</Badge>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">{tutorialData.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{tutorialData.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span>{tutorialData.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{tutorialData.duration}</span>
                </div>
                <div className="text-muted-foreground">{tutorialData.views} views</div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-4">
              <Card className="p-6 border-primary/20 bg-primary/5">
                <h3 className="font-heading text-lg mb-4">Tutorial Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Skill Level:</span>
                    <p className="font-medium mt-1">{tutorialData.skillLevel}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Estimated Cost:</span>
                    <p className="font-medium mt-1">{tutorialData.estimatedCost}</p>
                  </div>
                </div>
              </Card>

              <Button className="w-full bg-primary text-primary-foreground" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download PDF Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-8 px-4 bg-card border-y border-border sticky top-16 z-40 backdrop-blur-md bg-card/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-sm font-medium">Tutorial Progress</span>
            <Progress value={0} className="flex-1" />
            <span className="text-sm text-muted-foreground">0 of {tutorialData.sections.length} phases</span>
          </div>
        </div>
      </section>

      {/* Required Tools */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 border-primary/20 bg-primary/5">
            <h2 className="font-heading text-3xl mb-6">Required Tools & Materials</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tutorialData.tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl mb-12 text-center">Step-by-Step Guide</h2>

          <div className="space-y-12">
            {tutorialData.sections.map((section, sectionIndex) => (
              <div key={section.id} id={section.id}>
                {/* Section Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="font-heading text-2xl text-primary">{sectionIndex + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-3xl">{section.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {section.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="ml-8 pl-8 border-l-2 border-border space-y-8">
                  {section.steps.map((step, stepIndex) => (
                    <Card key={stepIndex} className="p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {sectionIndex + 1}.{stepIndex + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-xl mb-3">{step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed mb-4">{step.content}</p>

                          {step.tips && (
                            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                              <p className="text-sm font-semibold mb-2 text-accent-foreground">Pro Tips:</p>
                              <ul className="space-y-1">
                                {step.tips.map((tip, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-accent">•</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Used */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">Parts & Materials Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorialData.partsUsed.map((part, i) => (
              <Card key={i} className="p-6 hover:border-primary transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{part.name}</h3>
                  <span className="text-primary font-bold">{part.price}</span>
                </div>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  View on Amazon →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tutorials */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">Related Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Faema E61 Group Head Rebuild", "PID Controller Installation", "Pump Pressure Calibration"].map(
              (title, i) => (
                <Card key={i} className="overflow-hidden hover:border-primary transition-all group cursor-pointer">
                  <div className="h-48 bg-muted">
                    <img
                      src={`/.jpg?height=300&width=400&query=${title}+espresso+tutorial`}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <Button variant="link" className="px-0 text-primary">
                      Watch Tutorial →
                    </Button>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
