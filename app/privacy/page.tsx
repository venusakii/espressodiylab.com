import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="font-heading text-3xl mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Email addresses when subscribing to our newsletter</li>
                <li>Contact information when you reach out to us</li>
                <li>User-submitted content (comments, project photos, etc.)</li>
                <li>Usage data and analytics through cookies and similar technologies</li>
              </ul>

              <h2 className="font-heading text-3xl mb-4 mt-8">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Send newsletters and updates about new tutorials and content</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Improve our website and user experience</li>
                <li>Analyze site usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-heading text-3xl mb-4 mt-8">3. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
                traffic, and understand where our visitors are coming from. You can control cookie settings through your
                browser preferences.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use third-party services that may collect information about you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Google Analytics:</strong> To understand site usage and improve our content
                </li>
                <li>
                  <strong>Amazon Associates:</strong> For affiliate links and product recommendations
                </li>
                <li>
                  <strong>Email Service Providers:</strong> To send newsletters and communications
                </li>
              </ul>

              <h2 className="font-heading text-3xl mb-4 mt-8">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Disable cookies through your browser settings</li>
              </ul>

              <h2 className="font-heading text-3xl mb-4 mt-8">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our site is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page with an updated "Last updated" date.
              </p>

              <h2 className="font-heading text-3xl mb-4 mt-8">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or our data practices, please contact us at{" "}
                <a href="mailto:privacy@espressodiylab.com" className="text-primary hover:underline">
                  privacy@espressodiylab.com
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
