import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Wrench, Gauge, Settings, Zap, BookOpen, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/vintage-espresso-machine-being-restored.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-heading text-6xl md:text-8xl mb-6 tracking-tight text-balance">
              Rebuild. Refine. Rebrew.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              DIY restoration and technical guides for rare espresso machines and grinders.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Start Restoring →
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Explore Machine Index ⚙️
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-heading text-5xl leading-tight">Welcome to the Espresso Lab.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We unite engineering precision with coffee passion. Your guide to restoring and upgrading rare
                  espresso classics.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From vintage La Marzocco to classic Faema, we provide detailed teardowns, restoration guides, and
                  calibration techniques for machines that defined espresso culture.
                </p>
              </div>
            </ScrollReveal>
            <ParallaxSection speed={0.3}>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src="/modern-stainless-steel-espresso-machine-blueprint.jpg"
                  alt="Espresso machine blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Machine Restoration Tutorials */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl mb-4">Machine Restoration Tutorials</h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step guides for disassembly, cleaning, and calibration
              </p>
            </div>
          </ScrollReveal>

          {/* Tutorial Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Wrench, title: "Classic Espresso Machines", count: 24 },
              { icon: Zap, title: "Steam Systems", count: 18 },
              { icon: Gauge, title: "Pressure Gauges & Pumps", count: 15 },
              { icon: Settings, title: "Calibration & Testing", count: 12 },
            ].map((category, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="p-6 hover:border-primary transition-all cursor-pointer group">
                  <category.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-xl mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} tutorials</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Featured Tutorials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Restoring a 1970s La Marzocco GS/3",
                image: "/tutorial-la-marzocco.jpg",
                difficulty: "Advanced",
                time: "8-12 hours",
              },
              {
                title: "Faema E61 Group Head Rebuild",
                image: "/tutorial-faema-e61.jpg",
                difficulty: "Intermediate",
                time: "4-6 hours",
              },
              {
                title: "Gaggia Classic Pump Replacement",
                image: "/tutorial-gaggia-classic.jpg",
                difficulty: "Beginner",
                time: "2-3 hours",
              },
            ].map((tutorial, i) => (
              <Link key={i} href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="overflow-hidden hover:border-primary transition-all group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tutorial.image || "/placeholder.svg"}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl mb-3">{tutorial.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>⚙️ {tutorial.difficulty}</span>
                      <span>⏱️ {tutorial.time}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Brand */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl mb-4">Explore by Brand</h2>
              <p className="text-lg text-muted-foreground">Iconic manufacturers that shaped espresso history</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["La Marzocco", "Faema", "Pavoni", "Gaggia", "Olympia"].map((brand, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link href={`/machines?brand=${brand.toLowerCase()}`}>
                  <Card className="aspect-square flex items-center justify-center hover:border-primary transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                      <img
                        src={`/.jpg?height=400&width=400&query=${brand}+espresso+machine+blueprint`}
                        alt={brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-2xl relative z-10">{brand}</h3>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grinder Section */}
      

      {/* Parts & Tools Hub */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl mb-4">Parts & Tools Hub</h2>
            <p className="text-lg text-muted-foreground">Essential components for restoration projects</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gaskets & Seals", icon: "⭕" },
              { name: "Portafilter Parts", icon: "🔧" },
              { name: "Pressure Gauges", icon: "📊" },
              { name: "Thermometers", icon: "🌡️" },
              { name: "Burr Sets", icon: "⚙️" },
              { name: "Boiler Parts", icon: "🔥" },
              { name: "Pump Components", icon: "💧" },
              { name: "Tools & Equipment", icon: "🛠️" },
            ].map((part, i) => (
              <Link key={i} href={`/parts/${part.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="p-6 hover:border-primary transition-all group cursor-pointer text-center">
                  <div className="text-4xl mb-3">{part.icon}</div>
                  <h3 className="font-heading text-lg">{part.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Engineering Library */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl mb-4">Coffee Engineering Library</h2>
            <p className="text-lg text-muted-foreground">Technical articles and deep dives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Restoring 1970s Pump Assemblies",
                category: "Technical Guide",
                readTime: "12 min",
              },
              {
                title: "Aligning Group Heads for Optimal Pressure",
                category: "Calibration",
                readTime: "8 min",
              },
              {
                title: "Understanding Boiler Scaling Physics",
                category: "Science",
                readTime: "15 min",
              },
              {
                title: "Thermodynamics of Espresso Extraction",
                category: "Theory",
                readTime: "10 min",
              },
            ].map((article, i) => (
              <Link key={i} href={`/articles/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="p-6 hover:border-primary transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs text-primary uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl mb-4">Before & After Gallery</h2>
            <p className="text-lg text-muted-foreground">Witness the transformation of vintage machines</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                machine: "1968 Faema E61",
                beforeImg: "/before-faema-e61.jpg",
                afterImg: "/after-faema-e61.jpg",
              },
              {
                machine: "1975 La Pavoni",
                beforeImg: "/before-la-pavoni.jpg",
                afterImg: "/after-la-pavoni.jpg",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-64 border-r border-border">
                    <img
                      src={item.beforeImg || "/placeholder.svg"}
                      alt={`${item.machine} before restoration`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-background/80 px-2 py-1 text-xs rounded">Before</div>
                  </div>
                  <div className="relative h-64">
                    <img
                      src={item.afterImg || "/placeholder.svg"}
                      alt={`${item.machine} after restoration`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary/80 px-2 py-1 text-xs rounded text-primary-foreground">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg">{item.machine}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl mb-4">Community of Makers</h2>
              <p className="text-lg text-muted-foreground">Join thousands of espresso enthusiasts and restorers</p>
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
                <div>
                  <div className="font-heading text-5xl text-primary mb-2">
                    <AnimatedCounter end={15000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div>
                  <div className="font-heading text-5xl text-primary mb-2">
                    <AnimatedCounter end={450} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Tutorials</p>
                </div>
                <div>
                  <div className="font-heading text-5xl text-primary mb-2">
                    <AnimatedCounter end={8000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Machines Restored</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote:
                  "I rebuilt my 1968 Pavoni using EspressoDIYLab's step-by-step guide. The first pull was pure nostalgia.",
                author: "Alan T.",
                location: "Portland, OR",
              },
              {
                quote:
                  "The calibration tutorials helped me achieve extraction perfection on my vintage Faema. Incredible resource.",
                author: "Sofia M.",
                location: "Melbourne, AU",
              },
              {
                quote:
                  "As a café owner, these restoration guides saved me thousands. Now I restore machines for other shops too.",
                author: "Marcus K.",
                location: "Brooklyn, NY",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Card className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Share Your Restoration Project →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
