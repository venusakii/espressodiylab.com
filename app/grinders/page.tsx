import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const grinders = [
  {
    slug: "mazzer-super-jolly",
    name: "Mazzer Super Jolly",
    rpm: "1400 RPM",
    burr: "64mm Flat",
    image: "mazzer+super+jolly+coffee+grinder",
  },
  {
    slug: "compak-k10",
    name: "Compak K10",
    rpm: "900 RPM",
    burr: "68mm Conical",
    image: "compak+k10+coffee+grinder",
  },
  {
    slug: "fiorenzato-f64",
    name: "Fiorenzato F64",
    rpm: "1350 RPM",
    burr: "64mm Flat",
    image: "fiorenzato+f64+coffee+grinder",
  },
  {
    slug: "anfim-super-caimano",
    name: "Anfim Super Caimano",
    rpm: "1400 RPM",
    burr: "65mm Flat",
    image: "anfim+super+caimano+grinder",
  },
  {
    slug: "eureka-mignon",
    name: "Eureka Mignon",
    rpm: "1350 RPM",
    burr: "50mm Flat",
    image: "eureka+mignon+coffee+grinder",
  },
  {
    slug: "baratza-vario",
    name: "Baratza Vario",
    rpm: "1100 RPM",
    burr: "54mm Ceramic",
    image: "baratza+vario+coffee+grinder",
  },
]

export default function GrindersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Grinder Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Precision doesn't end at extraction. Explore teardown and calibration guides for vintage and modern coffee
            grinders.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grinders.map((grinder) => (
              <Link key={grinder.slug} href={`/grinders/${grinder.slug}`}>
                <Card className="p-6 hover:border-primary transition-all group cursor-pointer">
                  <div className="h-48 mb-4 rounded overflow-hidden bg-muted">
                    <img
                      src={`/.jpg?height=400&width=600&query=${grinder.image}`}
                      alt={grinder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                    {grinder.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Motor Speed:</span>
                      <Badge variant="outline">{grinder.rpm}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Burr Type:</span>
                      <Badge variant="outline">{grinder.burr}</Badge>
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
