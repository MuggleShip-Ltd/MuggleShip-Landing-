"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 mb-8"
          >
            <ArrowLeft size={16} /> {t.legal.backHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            {t.legal.lastUpdated}: April 28, 2026
          </p>

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              1. Introduction
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              MuggleShip Ltd (&quot;MuggleShip&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a UK
              fulfillment and eCommerce services company based in Bedford,
              United Kingdom. We provide FBA preparation, eCommerce
              fulfillment, cross-border shipping, returns management,
              automated pricing, analytics, and listing optimization services
              to online sellers worldwide.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              This Privacy Policy explains what personal information we
              collect, how we use it, and the rights you have over it. It
              applies to visitors of our website, sellers who engage our
              services, and anyone who contacts us. We follow the UK General
              Data Protection Regulation (UK GDPR) and the Data Protection Act
              2018, and we apply the same standard of care to international
              visitors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We only collect information that is necessary to deliver our
              services or to respond to you. The categories below describe
              what we may receive.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Contact form data
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              When you submit our contact form we receive the information you
              provide: your name, company, email address, phone number,
              country, monthly volume, the services you are interested in, and
              the contents of your message.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Amazon Selling Partner API (SP-API) data
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              If you authorize us to connect to your Amazon Seller Central
              account, we access only the SP-API data needed to provide the
              services you have asked for. Depending on the engagement, this
              may include inventory, orders, listings, pricing, fees, and
              performance metrics. We never request or store data we do not
              need.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Website analytics
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our website logs basic technical information such as IP address
              and user-agent for security and to keep the site online. We do
              not run third-party advertising trackers or build behavioral
              profiles of visitors.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Service usage data
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              When you use our fulfillment services we generate operational
              records: warehouse intake, inbound shipments, fulfillment
              events, returns, and SLA performance. This data is tied to your
              account and is used to operate the service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              3. How We Use Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We use the information we collect to respond to your inquiries,
              prepare quotes, deliver fulfillment, repricing, analytics, and
              listing services, support your account, comply with legal and
              tax obligations, and improve our service quality.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not sell, rent, or trade personal data or Amazon seller
              data. We do not share your information with third parties for
              their own marketing purposes. We do not use SP-API data for
              advertising.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              4. Amazon SP-API Data Handling
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We comply with Amazon&apos;s Acceptable Use Policy and Data
              Protection Policy for Selling Partner API developers. Access to
              your account is granted only with your explicit authorization
              and can be revoked at any time from Seller Central.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              SP-API data is encrypted in transit using TLS and encrypted at
              rest. It is stored only in regions consistent with the
              marketplace it relates to, and access is restricted to staff who
              need it to deliver the service. We retain SP-API data only for
              the period required to provide the service or to meet a legal
              obligation. Personally identifiable information from Amazon
              orders is deleted within 30 days of a deletion request unless a
              legal obligation requires longer retention.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not use SP-API data for advertising, we do not sell it,
              and we do not share it with parties outside the sub-processors
              listed below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              5. Legal Bases (UK GDPR)
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We rely on the following legal bases to process personal data:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Contract performance</strong> &mdash; to deliver the
                services you have engaged us to provide.
              </li>
              <li>
                <strong>Legitimate interests</strong> &mdash; to operate,
                secure, and improve our services, where this does not override
                your rights.
              </li>
              <li>
                <strong>Consent</strong> &mdash; for any optional marketing
                communications, which you can withdraw at any time.
              </li>
              <li>
                <strong>Legal obligation</strong> &mdash; for tax, accounting,
                customs, and regulatory record-keeping.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              6. Data Sharing
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We share data only with sub-processors that are necessary to
              deliver our services. These fall into the following categories:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Cloud hosting and infrastructure providers.</li>
              <li>Shipping carriers and customs brokers.</li>
              <li>Payment processors and accounting providers.</li>
              <li>
                Email and communication providers used to contact you about
                your account.
              </li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              All sub-processors are bound by written data processing
              agreements, are subject to confidentiality obligations, and are
              required to apply appropriate security measures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              7. International Transfers
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Where we transfer personal data outside the United Kingdom or
              the European Economic Area, we rely on a UK adequacy decision,
              the UK International Data Transfer Agreement, or the EU Standard
              Contractual Clauses with the UK Addendum, together with
              additional safeguards where appropriate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              8. Data Retention
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We retain personal data only for as long as we need it. Service
              and operational records are kept for the duration of your
              service contract and for 7 years afterwards in line with UK
              accounting and tax requirements. Contact form inquiries that do
              not lead to a service contract are deleted after 24 months.
              Amazon SP-API personal data is deleted within 30 days of a
              deletion request unless a legal obligation requires longer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              9. Your Rights
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Under UK GDPR you have the right to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access the personal data we hold about you.</li>
              <li>Ask us to correct information that is wrong.</li>
              <li>Ask us to delete your data, where the law allows.</li>
              <li>Restrict or object to certain types of processing.</li>
              <li>Receive your data in a portable format.</li>
              <li>
                Lodge a complaint with the UK Information Commissioner&apos;s
                Office (ICO) at ico.org.uk.
              </li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              To exercise any of these rights, please email
              privacy@muggleship.com. We will respond within one month.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              10. Cookies
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We use only essential cookies and local storage required for the
              site to function, including a <code>muggleship-lang</code> entry
              in your browser&apos;s localStorage to remember your preferred
              language. We do not use advertising cookies and we do not embed
              third-party tracking scripts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              11. Children
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our services are intended for businesses and are not directed at
              anyone under 18. We do not knowingly collect personal data from
              children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              12. Changes to This Policy
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. When we do,
              we will post the revised version on this page with a new
              &quot;Last updated&quot; date. Significant changes will be
              communicated to active customers by email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              13. Contact
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              MuggleShip Ltd<br />
              Bedford, United Kingdom<br />
              Email: privacy@muggleship.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
