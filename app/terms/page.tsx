import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="font-heading text-3xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing and using EspressoDIYLab.com, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to these terms, please do not use this site.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">2. Use of Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All tutorials, guides, and educational content on this site are provided for personal, non-commercial
                use. You may not reproduce, distribute, or create derivative works from our content without explicit
                written permission.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">3. Safety and Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Espresso machine restoration involves working with high-pressure systems, electrical components, and
                potentially dangerous equipment. By using our tutorials and guides, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>You assume all risks associated with restoration work</li>
                <li>We are not liable for any injuries, damages, or losses</li>
                <li>You should consult qualified professionals when needed</li>
                <li>All work should comply with local electrical and safety codes</li>
              </ul>

              <h2 className="font-heading text-3xl mb-4 mt-8">4. Affiliate Relationships</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EspressoDIYLab.com participates in the Amazon Services LLC Associates Program and other affiliate
                programs. We may earn commissions from qualifying purchases made through links on our site at no
                additional cost to you.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">5. User-Generated Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By submitting content (comments, photos, project submissions) to our site, you grant us a non-exclusive,
                worldwide, royalty-free license to use, reproduce, and display your content in connection with our
                services.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EspressoDIYLab.com and its operators shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of the site or any content therein. All
                information is provided "as is" without warranty of any kind.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify these terms at any time. Continued use of the site after changes
                constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at{" "}
                <a href="mailto:legal@espressodiylab.com" className="text-primary hover:underline">
                  legal@espressodiylab.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
