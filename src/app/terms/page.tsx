import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Proof Cellars. Understand the terms and conditions for using our website and services.',
  openGraph: {
    title: 'Terms of Use | Proof Cellars',
    description:
      'Terms of Use for Proof Cellars. Understand the terms and conditions for using our website and services.',
    url: 'https://proofcellars.com/terms',
  },
};

export default function TermsPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-primary">Terms of Use</li>
          </ol>
        </nav>

        {/* Title */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Terms of Use
          </h1>
          <p className="mt-4 text-secondary">
            Effective date: January 1, 2025
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-12">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-secondary leading-relaxed">
              By accessing or using the Proof Cellars website (proofcellars.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use our website or services.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Description of Service
            </h2>
            <p className="text-secondary leading-relaxed">
              Proof Cellars provides a platform for individuals to submit information about wine and spirits they may wish to sell. We review submissions and may provide offers to purchase items directly. Our website allows you to submit inquiries via an online form or by texting photos and details to our phone number.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              We are a direct buyer. We do not operate as a consignment service, auction house, or marketplace connecting buyers and sellers.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Eligibility
            </h2>
            <p className="text-secondary leading-relaxed">
              You must be at least 21 years of age to use our website and services. By using our website or submitting an inquiry, you represent that you are at least 21 years old.
            </p>
          </section>

          {/* Submissions and Accuracy */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Submissions and Accuracy
            </h2>
            <p className="text-secondary leading-relaxed">
              When you submit information about items you wish to sell, you represent and warrant that:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">You have legal authority to sell the items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">The items are your property or you have been authorized by the owner to sell them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">The information you provide is accurate to the best of your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Photos you submit accurately represent the current condition of the items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">The items were obtained legally and are not stolen, counterfeit, or otherwise prohibited</span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Submitting information to us does not create any binding agreement to sell or obligation for us to purchase.
            </p>
          </section>

          {/* Quotes and Offers */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Quotes and Offers
            </h2>
            <p className="text-secondary leading-relaxed">
              Any quote or offer we provide is based on the information you submit and is subject to the following:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Quotes are not binding until we receive and inspect the items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Final offers may be adjusted based on actual condition upon inspection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">We may decline to purchase items for any reason, including but not limited to condition issues, authenticity concerns, or market factors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Quotes are valid for a limited time as specified in our communications</span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              A binding agreement is formed only when both parties agree to specific terms for a transaction in writing.
            </p>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Shipping and Delivery
            </h2>
            <p className="text-secondary leading-relaxed">
              If we agree to purchase items from you, we will coordinate shipping or pickup arrangements. Specific terms, including responsibility for shipping costs and risk of loss, will be communicated and agreed upon before items are shipped.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Transactions involving alcohol are conducted only where permitted by applicable law. We will confirm transaction details and logistics based on your location and applicable regulations.
            </p>
          </section>

          {/* Prohibited Use */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Prohibited Use
            </h2>
            <p className="text-secondary leading-relaxed">
              You agree not to:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Submit false, misleading, or fraudulent information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Attempt to sell items you do not have authority to sell</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Submit counterfeit, stolen, or illegally obtained items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Use our website for any unlawful purpose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Interfere with or disrupt the operation of our website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Attempt to gain unauthorized access to our systems</span>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Intellectual Property
            </h2>
            <p className="text-secondary leading-relaxed">
              All content on our website, including text, graphics, logos, and design, is owned by Proof Cellars or our licensors and is protected by copyright and other intellectual property laws. You may not copy, reproduce, or distribute our content without prior written permission.
            </p>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Third Party Services
            </h2>
            <p className="text-secondary leading-relaxed">
              Our website uses third party services including:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Jotform for form submissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Google Analytics for website analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Cloudflare for website hosting and security</span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Your use of our website may be subject to the terms and privacy policies of these third party services. We are not responsible for the practices of third party services.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Disclaimers
            </h2>
            <p className="text-secondary leading-relaxed">
              OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              We do not guarantee the accuracy of any valuations, quotes, or market information we provide. Market values for wine and spirits fluctuate and our assessments are based on available information at the time.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Limitation of Liability
            </h2>
            <p className="text-secondary leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, PROOF CELLARS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR WEBSITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Our total liability for any claims arising from your use of our website or services shall not exceed the amount you received from us in any transaction, if any.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Indemnification
            </h2>
            <p className="text-secondary leading-relaxed">
              You agree to indemnify and hold harmless Proof Cellars and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of our website, your submissions, your violation of these terms, or your violation of any rights of another party.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Changes to Terms
            </h2>
            <p className="text-secondary leading-relaxed">
              We may update these Terms of Use from time to time. If we make material changes, we will update the effective date at the top of this page. Your continued use of our website after changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Governing Law
            </h2>
            <p className="text-secondary leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our website shall be resolved in the state or federal courts located in Los Angeles County, California.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-secondary leading-relaxed">
              If you have questions about these Terms of Use, please contact us:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">Email:</span>
                <a
                  href="mailto:info@proofcellars.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  info@proofcellars.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">Phone:</span>
                <a
                  href="tel:+12137709463"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  213-770-9463
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
