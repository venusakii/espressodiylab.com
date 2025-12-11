import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, BookOpen, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-6xl md:text-7xl mb-6 text-balance">Get In Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a question about restoration? Want to share your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "General inquiries and support",
                detail: "hello@espressodiylab.com",
              },
              {
                icon: MessageSquare,
                title: "Join Discord",
                description: "Real-time community chat",
                detail: "Active 24/7",
              },
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Browse our knowledge base",
                detail: "100+ Guides",
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Ask questions, share tips",
                detail: "10K+ Members",
              },
            ].map((option, i) => (
              <Card key={i} className="p-6 text-center hover:border-primary transition-all group cursor-pointer">
                <option.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <p className="text-sm text-primary font-semibold">{option.detail}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-border">
              <h2 className="font-heading text-3xl mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select id="subject" className="w-full bg-background border border-border rounded px-3 py-2">
                    <option>General Inquiry</option>
                    <option>Restoration Question</option>
                    <option>Parts Recommendation</option>
                    <option>Tutorial Request</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or question..."
                    rows={6}
                    className="bg-background"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 border-primary/20 bg-primary/5">
                <h3 className="font-heading text-2xl mb-4">Response Time</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We typically respond to all inquiries within 24-48 hours. For urgent technical questions, join our
                  Discord community for real-time assistance.
                </p>
                <Button variant="outline" className="bg-transparent">
                  Join Discord Server
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="font-heading text-2xl mb-4">Share Your Restoration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Completed a restoration project? We'd love to feature it in our gallery! Send us photos and details of
                  your work.
                </p>
                <Button variant="outline" className="bg-transparent">
                  Submit Project
                </Button>
              </Card>

              <Card className="p-8 bg-muted/30">
                <h3 className="font-heading text-2xl mb-4">Business Inquiries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For partnership opportunities, sponsorships, or commercial collaborations, please email us at{" "}
                  <a href="mailto:business@espressodiylab.com" className="text-primary hover:underline">
                    business@espressodiylab.com
                  </a>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Callout */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl mb-4">Have a Quick Question?</h2>
          <p className="text-muted-foreground mb-8">
            Check our FAQ section or browse our tutorials. Your question might already be answered!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline">
              View FAQ
            </Button>
            <Button size="lg" variant="outline">
              Browse Tutorials
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
