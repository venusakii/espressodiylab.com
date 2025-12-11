import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timeline = [
  {
    year: "2018",
    title: "The First Restoration",
    description:
      "It started with a rusty 1972 Faema E61 found at an estate sale. What began as a personal project became an obsession with preserving espresso history.",
  },
  {
    year: "2019",
    title: "Building the Workshop",
    description:
      "Transformed a garage into a dedicated restoration lab. Invested in proper tools, pressure gauges, and testing equipment.",
  },
  {
    year: "2020",
    title: "Sharing Knowledge",
    description:
      "Started documenting restoration processes. The first YouTube tutorial reached 10K views in a week. The community was hungry for this content.",
  },
  {
    year: "2021",
    title: "Growing the Community",
    description:
      "Launched EspressoDIYLab.com to centralize all guides, tutorials, and resources. Connected with restorers worldwide.",
  },
  {
    year: "2023",
    title: "50+ Machines Restored",
    description:
      "Milestone achievement: Over 50 vintage machines brought back to life. Each one with full documentation for the community.",
  },
  {
    year: "2025",
    title: "Today",
    description:
      "A thriving community of 10,000+ restorers. Comprehensive guides for dozens of machines. The lab continues to grow.",
  },
]

const values = [
  {
    title: "Preservation First",
    description:
      "We believe these machines are engineering artifacts worth preserving. Every restoration honors the original craftsmanship.",
  },
  {
    title: "Open Knowledge",
    description:
      "All our guides are free and detailed. We believe restoration knowledge should be accessible to everyone who wants to learn.",
  },
  {
    title: "Precision Matters",
    description:
      "From pressure calibration to temperature stability, we don't compromise on technical accuracy. Every detail matters.",
  },
  {
    title: "Community Driven",
    description:
      "Our community shares tips, troubleshoots together, and celebrates completed restorations. We learn from each other.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">From Obsession to Operation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            EspressoDIYLab was born from a simple belief: the espresso machines that defined coffee culture deserve to
            be preserved, understood, and celebrated.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 border-primary/20 bg-primary/5 text-center">
            <h2 className="font-heading text-3xl mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower coffee enthusiasts and restorers worldwide with the knowledge, tools, and community support
              needed to preserve vintage espresso machines and grinders. We unite engineering precision with coffee
              passion, making restoration accessible to everyone.
            </p>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-5xl mb-12 text-center">The Journey</h2>
          <div className="space-y-8">
            {timeline.map((event, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-heading text-3xl text-primary">{event.year}</span>
                </div>
                <div className="flex-shrink-0 w-px h-full bg-border relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                </div>
                <Card className="flex-1 p-6 group-hover:border-primary transition-all">
                  <h3 className="font-heading text-2xl mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-5xl mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <Card key={i} className="p-8 hover:border-primary transition-all">
                <h3 className="font-heading text-2xl mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-5xl mb-12 text-center">By The Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Community Members" },
              { number: "50+", label: "Machines Restored" },
              { number: "100+", label: "Detailed Tutorials" },
              { number: "500K+", label: "Tutorial Views" },
            ].map((stat, i) => (
              <Card key={i} className="p-8 text-center border-primary/20 hover:border-primary transition-all">
                <div className="font-heading text-5xl text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted">
              <img
                src="/.jpg?height=600&width=1200&query=espresso+machine+restoration+workshop+vintage+equipment"
                alt="The Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="font-heading text-3xl mb-4">The Lab</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our workspace in Portland, Oregon. Where engineering precision meets coffee passion. Every machine tells
                a story, and we're here to help preserve them.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
