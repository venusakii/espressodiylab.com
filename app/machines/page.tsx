import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Filter } from "lucide-react"

// Sample machine data
const machines = [
  {
    slug: "la-marzocco-gs3",
    name: "La Marzocco GS/3",
    year: "1970-1975",
    brand: "La Marzocco",
    difficulty: "Advanced",
    image: "la+marzocco+gs3+vintage+espresso+machine",
    description: "Iconic dual-boiler system with saturated group head technology.",
  },
  {
    slug: "faema-e61",
    name: "Faema E61",
    year: "1961-1975",
    brand: "Faema",
    difficulty: "Intermediate",
    image: "faema+e61+classic+espresso+machine",
    description: "Revolutionary thermosiphon system that set the standard for modern espresso.",
  },
  {
    slug: "la-pavoni-europiccola",
    name: "La Pavoni Europiccola",
    year: "1950-Present",
    brand: "Pavoni",
    difficulty: "Beginner",
    image: "la+pavoni+europiccola+lever+machine",
    description: "Classic lever-operated machine with timeless design and reliability.",
  },
  {
    slug: "gaggia-classic",
    name: "Gaggia Classic",
    year: "1991-Present",
    brand: "Gaggia",
    difficulty: "Beginner",
    image: "gaggia+classic+espresso+machine",
    description: "Home espresso staple with commercial-grade components and moddability.",
  },
  {
    slug: "olympia-cremina",
    name: "Olympia Cremina",
    year: "1967-Present",
    brand: "Olympia",
    difficulty: "Intermediate",
    image: "olympia+cremina+lever+espresso+machine",
    description: "Swiss precision engineering in a compact lever-operated design.",
  },
  {
    slug: "rancilio-silvia",
    name: "Rancilio Silvia",
    year: "1997-Present",
    brand: "Rancilio",
    difficulty: "Beginner",
    image: "rancilio+silvia+espresso+machine",
    description: "Semi-commercial design with professional-grade brewing capabilities.",
  },
]

const brands = ["All", "La Marzocco", "Faema", "Pavoni", "Gaggia", "Olympia", "Rancilio"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function MachinesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Machine Index</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Explore our comprehensive catalog of vintage and classic espresso machines. Each entry includes detailed
            specifications, restoration guides, and historical context.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-md bg-card/95">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search machines..." className="pl-10 bg-background" />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 items-center flex-wrap">
              <span className="text-sm text-muted-foreground mr-2">Filter:</span>
              <Button variant="outline" size="sm" className="bg-background">
                <Filter className="w-4 h-4 mr-2" />
                Brand
              </Button>
              <Button variant="outline" size="sm" className="bg-background">
                Difficulty
              </Button>
              <Button variant="outline" size="sm" className="bg-background">
                Year
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={brand === "All" ? "default" : "outline"}
                size="sm"
                className={brand === "All" ? "bg-primary text-primary-foreground" : "bg-background"}
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{machines.length}</span> machines
            </p>
            <select className="bg-card border border-border rounded px-3 py-2 text-sm">
              <option>Sort by: Name</option>
              <option>Sort by: Year</option>
              <option>Sort by: Difficulty</option>
              <option>Sort by: Brand</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <Link key={machine.slug} href={`/machines/${machine.slug}`}>
                <Card className="overflow-hidden hover:border-primary transition-all group cursor-pointer h-full">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={`/.jpg?height=400&width=600&query=${machine.image}`}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 px-3 py-1 rounded text-xs font-medium">
                      {machine.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary uppercase tracking-wider">{machine.brand}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{machine.difficulty}</span>
                    </div>
                    <h3 className="font-heading text-xl mb-2 group-hover:text-primary transition-colors">
                      {machine.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{machine.description}</p>
                  </div>
                </Card>
              </Link>
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
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
