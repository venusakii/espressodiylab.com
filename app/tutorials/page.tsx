import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PlayCircle, Clock, BarChart3 } from "lucide-react"

const tutorials = [
  {
    slug: "restoring-1970s-la-marzocco-gs3",
    title: "Restoring a 1970s La Marzocco GS/3",
    category: "Classic Espresso Machines",
    difficulty: "Advanced",
    duration: "8-12 hours",
    views: "24.5K",
    image: "vintage+la+marzocco+gs3+restoration",
    description: "Complete teardown and restoration of the iconic dual-boiler system with saturated group head.",
  },
  {
    slug: "faema-e61-group-head-rebuild",
    title: "Faema E61 Group Head Rebuild",
    category: "Classic Espresso Machines",
    difficulty: "Intermediate",
    duration: "4-6 hours",
    views: "18.2K",
    image: "faema+e61+group+head+disassembly",
    description: "Step-by-step guide to rebuilding the revolutionary thermosiphon group head system.",
  },
  {
    slug: "gaggia-classic-pump-replacement",
    title: "Gaggia Classic Pump Replacement",
    category: "Classic Espresso Machines",
    difficulty: "Beginner",
    duration: "2-3 hours",
    views: "32.1K",
    image: "gaggia+classic+pump+replacement",
    description: "Simple guide to upgrading or replacing the ULKA vibration pump in your Gaggia Classic.",
  },
  {
    slug: "steam-wand-descaling-repair",
    title: "Professional Steam Wand Descaling & Repair",
    category: "Steam Systems",
    difficulty: "Beginner",
    duration: "1-2 hours",
    views: "15.8K",
    image: "espresso+machine+steam+wand+cleaning",
    description: "Techniques for removing scale buildup and restoring steam wand performance.",
  },
  {
    slug: "pressure-gauge-calibration",
    title: "Pressure Gauge Calibration Guide",
    category: "Pressure Gauges & Pumps",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    views: "12.4K",
    image: "espresso+pressure+gauge+calibration",
    description: "Learn to accurately calibrate pressure stats and gauges for optimal 9-bar extraction.",
  },
  {
    slug: "pid-controller-installation",
    title: "Installing a PID Temperature Controller",
    category: "Calibration & Testing",
    difficulty: "Advanced",
    duration: "5-7 hours",
    views: "21.3K",
    image: "pid+controller+espresso+machine",
    description: "Complete guide to adding precise temperature control to vintage espresso machines.",
  },
]

const categories = [
  { name: "All Tutorials", count: tutorials.length },
  { name: "Classic Espresso Machines", count: 24 },
  { name: "Steam Systems", count: 18 },
  { name: "Pressure Gauges & Pumps", count: 15 },
  { name: "Calibration & Testing", count: 12 },
]

export default function TutorialsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Restoration Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Master the art of espresso machine restoration with our comprehensive video and written guides. From basic
            maintenance to complete rebuilds.
          </p>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 px-4 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-md bg-card/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, i) => (
              <Button
                key={i}
                variant={i === 0 ? "default" : "outline"}
                className={i === 0 ? "bg-primary text-primary-foreground" : "bg-background"}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-muted">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorial */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <Badge className="bg-primary text-primary-foreground">Featured Tutorial</Badge>
          </div>
          <Card className="overflow-hidden hover:border-primary transition-all group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={`/.jpg?height=600&width=800&query=${tutorials[0].image}`}
                  alt={tutorials[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                  {tutorials[0].category}
                </Badge>
                <h2 className="font-heading text-4xl mb-4">{tutorials[0].title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{tutorials[0].description}</p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span>{tutorials[0].difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{tutorials[0].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-primary" />
                    <span>{tutorials[0].views} views</span>
                  </div>
                </div>
                <Link href={`/tutorials/${tutorials[0].slug}`}>
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Watch Tutorial
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Tutorials Grid */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-4xl">All Tutorials</h2>
            <select className="bg-background border border-border rounded px-3 py-2 text-sm">
              <option>Sort by: Most Popular</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Difficulty</option>
              <option>Sort by: Duration</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Link key={tutorial.slug} href={`/tutorials/${tutorial.slug}`}>
                <Card className="overflow-hidden hover:border-primary transition-all group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=400&query=${tutorial.image}`}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                    <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs">
                      {tutorial.category}
                    </Badge>
                    <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tutorial.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {tutorial.duration}
                      </span>
                      <span>{tutorial.views} views</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
