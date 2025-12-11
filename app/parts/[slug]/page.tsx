import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Filter, ExternalLink } from "lucide-react"

const categoryData = {
  slug: "gaskets-and-seals",
  name: "Gaskets & Seals",
  icon: "⭕",
  description:
    "High-quality gaskets and seals for espresso machines and grinders. Essential for maintaining pressure integrity and preventing leaks during restoration projects.",
  parts: [
    {
      id: 1,
      name: "E61 Group Gasket (8.5mm)",
      price: "$12.99",
      rating: 4.8,
      reviews: 324,
      image: "e61+group+gasket",
      material: "Food-safe silicone",
      size: "8.5mm thickness, 73mm OD",
      compatibility: ["Faema E61", "La Marzocco", "ECM", "Rocket", "Profitec"],
    },
    {
      id: 2,
      name: "Portafilter Gasket Set (6-Pack)",
      price: "$18.50",
      rating: 4.7,
      reviews: 256,
      image: "portafilter+gasket+set",
      material: "Silicone & EPDM rubber",
      size: "Various sizes (6mm-9mm)",
      compatibility: ["Universal fit", "Most 58mm groups"],
    },
    {
      id: 3,
      name: "Boiler Gasket - La Marzocco",
      price: "$28.00",
      rating: 4.9,
      reviews: 142,
      image: "boiler+gasket+espresso",
      material: "High-temp PTFE",
      size: "Custom fit",
      compatibility: ["La Marzocco GS/3", "GB5", "Linea"],
    },
    {
      id: 4,
      name: "Steam Wand O-Ring Kit",
      price: "$9.99",
      rating: 4.6,
      reviews: 198,
      image: "steam+wand+o+ring+kit",
      material: "Viton rubber",
      size: "Multiple sizes included",
      compatibility: ["Universal", "Most commercial machines"],
    },
    {
      id: 5,
      name: "Pump Seal & Gasket Set",
      price: "$24.99",
      rating: 4.8,
      reviews: 167,
      image: "pump+seal+gasket+espresso",
      material: "NBR rubber",
      size: "Complete rebuild kit",
      compatibility: ["ULKA pumps", "Procon pumps"],
    },
    {
      id: 6,
      name: "Group Head Seal Kit - Complete",
      price: "$32.50",
      rating: 4.9,
      reviews: 289,
      image: "group+head+seal+kit",
      material: "Premium silicone",
      size: "All seals included",
      compatibility: ["E61 groups", "58mm standard"],
    },
  ],
}

export default function PartCategoryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4 bg-background border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/parts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Parts Hub
          </Link>
        </div>
      </div>

      {/* Category Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{categoryData.icon}</div>
            <div className="flex-1">
              <h1 className="font-heading text-5xl md:text-6xl mb-4">{categoryData.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{categoryData.description}</p>
              <div className="flex items-center gap-4 mt-6">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {categoryData.parts.length} Parts Available
                </Badge>
                <span className="text-sm text-muted-foreground">All compatible parts verified by our team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-md bg-card/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-background">
                <Filter className="w-4 h-4 mr-2" />
                Material
              </Button>
              <Button variant="outline" size="sm" className="bg-background">
                Compatibility
              </Button>
              <Button variant="outline" size="sm" className="bg-background">
                Price Range
              </Button>
            </div>
            <select className="bg-background border border-border rounded px-3 py-2 text-sm">
              <option>Sort by: Best Match</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Most Reviews</option>
            </select>
          </div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.parts.map((part) => (
              <Card key={part.id} className="overflow-hidden hover:border-primary transition-all group">
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=600&query=${part.image}`}
                    alt={part.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-xl group-hover:text-primary transition-colors flex-1">
                      {part.name}
                    </h3>
                    <span className="text-primary font-bold text-xl flex-shrink-0 ml-2">{part.price}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <div className="flex items-center text-amber-500">
                      {"★".repeat(Math.floor(part.rating))}
                      {"☆".repeat(5 - Math.floor(part.rating))}
                    </div>
                    <span className="text-muted-foreground">
                      {part.rating} ({part.reviews})
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">{part.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium text-right">{part.size}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Compatible with:</p>
                    <div className="flex flex-wrap gap-1">
                      {part.compatibility.slice(0, 3).map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
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

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm" className="bg-primary">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">Related Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Portafilter Parts", "Boiler Parts", "Pump Components", "Tools & Equipment"].map((category, i) => (
              <Card key={i} className="p-6 hover:border-primary transition-all group cursor-pointer text-center">
                <h3 className="font-heading text-lg group-hover:text-primary transition-colors">{category}</h3>
                <Button variant="link" className="px-0 text-primary mt-2">
                  Browse →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
