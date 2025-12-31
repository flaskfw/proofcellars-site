import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Proof Cellars. Learn how we collect, use, and protect your information when you use our services.',
  openGraph: {
    title: 'Privacy Policy | Proof Cellars',
    description:
      'Privacy Policy for Proof Cellars. Learn how we collect, use, and protect your information when you use our services.',
    url: 'https://proofcellars.com/privacy',
  },
};

export default function PrivacyPage() {
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
            <li className="text-primary">Privacy Policy</li>
          </ol>
        </nav>

        {/* Title */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Privacy Policy
          </h1>
          <p className="mt-4 text-secondary">Effective date: December 30, 2025</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Overview</h2>
            <p className="text-secondary leading-relaxed">
              Proof Cellars (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates proofcellars.com (the &quot;Site&quot;). This Privacy
              Policy describes how we collect, use, and share information when you
              use our Site or communicate with us to inquire about selling wine
              or spirits.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              By using our Site or contacting us, you agree to the collection and
              use of information as described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Information We Collect
            </h2>
            <p className="text-secondary leading-relaxed">
              We collect information you provide directly to us, as well as
              information collected automatically when you use our Site.
            </p>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              Information you provide
            </h3>
            <p className="text-secondary leading-relaxed">
              When you submit an inquiry through our form, you may provide:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Name and contact information (email address, phone number)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Location (city and state)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Details about bottles you wish to sell (names, types, quantities)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Photos of bottles, labels, packaging, or storage areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Any additional information you choose to share
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              Text messaging and phone communications
            </h3>
            <p className="text-secondary leading-relaxed">
              You may contact us by texting photos and information to
              213-770-9463 (213-770-WINE) or by calling that number. When you do
              so, we receive and may store:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Your phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Text message content including photos and text
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Call records (date, time, duration)
                </span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              We use this information to respond to your inquiry and evaluate
              items you wish to sell. Standard messaging and data rates from your
              carrier may apply.
            </p>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              Information collected automatically
            </h3>
            <p className="text-secondary leading-relaxed">
              When you visit our Site, we automatically collect certain
              information through cookies and similar technologies, including
              device information, browser type, pages visited, and interactions
              with our Site. We may also collect approximate location derived
              from IP address.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              How We Use Information
            </h2>
            <p className="text-secondary leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Respond to your inquiries and evaluate items you submit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Provide quotes and communicate about potential transactions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Coordinate logistics for purchases
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">Improve our Site and services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Analyze Site usage and performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Maintain security and prevent fraud or abuse
                </span>
              </li>
            </ul>
          </section>

          {/* How We Share Information */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              How We Share Information
            </h2>
            <p className="text-secondary leading-relaxed">
              We do not sell your personal information. We may share information
              in the following circumstances:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  With service providers who assist our operations (such as form
                  hosting, hosting providers, communications tools, shipping
                  coordination, and payment processing)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  When required by law or to respond to legal process
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  To protect our rights, privacy, safety, or property
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  In connection with a business transfer or transaction
                </span>
              </li>
            </ul>
          </section>

          {/* Analytics and Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Analytics and Cookies
            </h2>
            <p className="text-secondary leading-relaxed">
              We use Google Analytics 4 to understand how visitors use our Site
              and to improve performance and user experience. Google Analytics
              uses cookies and similar technologies to collect information about
              your use of the Site and to generate reports and insights for us.
            </p>

            <p className="text-secondary leading-relaxed mt-4">
              Analytics data may include pages viewed, interactions with the Site,
              approximate location, and device and browser information. Google
              Analytics may set cookies such as the _ga cookie to help distinguish
              visitors.
            </p>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              How Google collects and processes data
            </h3>
            <p className="text-secondary leading-relaxed">
              Google Analytics data is collected and processed by Google under
              Google&apos;s terms and policies. For more information, review:
            </p>

            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    Google Privacy Policy
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    How Google uses information from sites or apps that use its
                    services
                  </a>
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              Your choices for cookies and analytics
            </h3>
            <p className="text-secondary leading-relaxed">
              You can control cookies through your browser settings. Disabling
              cookies may affect some functionality of the Site.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              You can also opt out of Google Analytics by installing the Google
              Analytics Opt-out Browser Add-on:
              <span className="ml-2">
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </span>
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Data Retention
            </h2>
            <p className="text-secondary leading-relaxed">
              We retain your information for as long as necessary to fulfill the
              purposes described in this policy, unless a longer retention period
              is required by law. Inquiry records and transaction history may be
              retained for business and legal purposes.
            </p>
          </section>

          {/* Your Choices and Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Your Choices and Rights
            </h2>
            <p className="text-secondary leading-relaxed">
              You may request access to, correction of, or deletion of your
              personal information by contacting us using the information below.
            </p>

            <h3 className="text-lg font-medium text-primary mt-6 mb-3">
              California privacy rights
            </h3>
            <p className="text-secondary leading-relaxed">
              If you are a California resident, you may have additional rights
              under the California Consumer Privacy Act (CCPA) and the California
              Privacy Rights Act (CPRA), including the right to:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Know what personal information we collect, use, and share
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Request deletion of your personal information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Opt out of the sale of personal information, if applicable
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium flex-shrink-0">-</span>
                <span className="text-secondary">
                  Not be discriminated against for exercising your privacy rights
                </span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              We do not sell personal information. To submit a request or learn
              more about the categories of personal information we collect and our
              data practices, please contact us at info@proofcellars.com or call
              213-770-9463. We will respond to verifiable requests within the
              timeframes required by applicable law.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Children</h2>
            <p className="text-secondary leading-relaxed">
              Our Site and services are not directed to individuals under 21 years
              of age. We do not knowingly collect personal information from anyone
              under 21. If you believe we have collected information from someone
              under 21, please contact us so we can delete it.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Security</h2>
            <p className="text-secondary leading-relaxed">
              We take reasonable measures to protect your information from
              unauthorized access, use, or disclosure. However, no method of
              transmission over the internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Changes to This Policy
            </h2>
            <p className="text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. If we make
              material changes, we will update the effective date at the top of
              this page. Your continued use of our Site after changes are posted
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
            <p className="text-secondary leading-relaxed">
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
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