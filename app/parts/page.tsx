import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, Filter, ExternalLink } from "lucide-react"

const partCategories = [
  { slug: "gaskets-and-seals", name: "Gaskets & Seals", count: 45, icon: "⭕" },
  { slug: "portafilter-parts", name: "Portafilter Parts", count: 32, icon: "🔧" },
  { slug: "pressure-gauges", name: "Pressure Gauges", count: 18, icon: "📊" },
  { slug: "thermometers", name: "Thermometers", count: 12, icon: "🌡️" },
  { slug: "burr-sets", name: "Burr Sets", count: 28, icon: "⚙️" },
  { slug: "boiler-parts", name: "Boiler Parts", count: 24, icon: "🔥" },
  { slug: "pump-components", name: "Pump Components", count: 36, icon: "💧" },
  { slug: "tools-and-equipment", name: "Tools & Equipment", count: 52, icon: "🛠️" },
]

const featuredParts = [
  {
    slug: "e61-group-gasket",
    name: "E61 Group Gasket (8.5mm)",
    category: "Gaskets & Seals",
    price: "$12.99",
    rating: 4.8,
    reviews: 324,
    image: "e61+group+gasket+espresso+machine",
    description: "Food-safe silicone gasket for E61 group heads. Temperature resistant to 150°C.",
    compatibility: ["Faema E61", "La Marzocco", "ECM", "Rocket"],
  },
  {
    slug: "58mm-precision-basket",
    name: "VST 58mm Precision Basket",
    category: "Portafilter Parts",
    price: "$32.50",
    rating: 4.9,
    reviews: 567,
    image: "vst+precision+filter+basket",
    description: "Professional-grade precision basket with consistent hole pattern for even extraction.",
    compatibility: ["Universal 58mm portafilters"],
  },
  {
    slug: "dual-scale-pressure-gauge",
    name: "Dual Scale Pressure Gauge (0-15 bar)",
    category: "Pressure Gauges",
    price: "$45.00",
    rating: 4.7,
    reviews: 189,
    image: "espresso+machine+pressure+gauge",
    description: "Glycerin-filled gauge with 1/4 NPT connection. Accurate to ±0.5 bar.",
    compatibility: ["Most espresso machines"],
  },
  {
    slug: "digital-group-thermometer",
    name: "Digital Group Head Thermometer",
    category: "Thermometers",
    price: "$28.99",
    rating: 4.6,
    reviews: 221,
    image: "digital+espresso+thermometer",
    description: "LCD display with magnetic mount. Range: 0-120°C with ±1°C accuracy.",
    compatibility: ["E61 group heads", "58mm groups"],
  },
  {
    slug: "64mm-flat-burrs",
    name: "64mm Flat Burrs (Set)",
    category: "Burr Sets",
    price: "$89.00",
    rating: 4.8,
    reviews: 145,
    image: "64mm+coffee+grinder+burrs",
    description: "Hardened steel burrs for Mazzer and compatible grinders. 1400+ shots lifespan.",
    compatibility: ["Mazzer Super Jolly", "Fiorenzato F64"],
  },
  {
    slug: "boiler-element-3000w",
    name: "Heating Element 3000W",
    category: "Boiler Parts",
    price: "$125.00",
    rating: 4.7,
    reviews: 98,
    image: "espresso+machine+heating+element",
    description: "Stainless steel heating element with brass flange. 220V 3000W.",
    compatibility: ["La Marzocco", "Faema"],
  },
]

export default function PartsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Parts & Tools Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Essential components and precision tools for espresso machine restoration. Sourced from trusted suppliers
            and verified for compatibility.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 px-4 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-md bg-card/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search parts by name, brand, or machine..." className="pl-10 bg-background" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-background">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <select className="bg-background border border-border rounded px-3 py-2 text-sm">
                <option>Sort by: Relevance</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partCategories.map((category) => (
              <Link key={category.slug} href={`/parts/${category.slug}`}>
                <Card className="p-6 hover:border-primary transition-all group cursor-pointer text-center h-full">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <Badge variant="secondary" className="bg-muted">
                    {category.count} parts
                  </Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-4xl">Featured Parts</h2>
            <Button variant="outline">View All Parts →</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredParts.map((part) => (
              <Card key={part.slug} className="overflow-hidden hover:border-primary transition-all group">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={`/.jpg?height=300&width=400&query=${part.image}`}
                    alt={part.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">{part.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg group-hover:text-primary transition-colors flex-1">
                      {part.name}
                    </h3>
                    <span className="text-primary font-bold text-xl">{part.price}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <div className="flex items-center text-amber-500">
                      {"★".repeat(Math.floor(part.rating))}
                      {"☆".repeat(5 - Math.floor(part.rating))}
                    </div>
                    <span className="text-muted-foreground">
                      {part.rating} ({part.reviews})
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{part.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Compatible with:</p>
                    <div className="flex flex-wrap gap-1">
                      {part.compatibility.slice(0, 2).map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {part.compatibility.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{part.compatibility.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

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

      {/* Amazon Associate Notice */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Amazon Associate Disclosure:</strong> EspressoDIYLab.com participates in
            the Amazon Services LLC Associates Program. We earn from qualifying purchases at no extra cost to you. This
            supports our free restoration guides and content.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
