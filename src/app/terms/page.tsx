"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 mb-8"
          >
            <ArrowLeft size={16} /> {t.legal.backHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            {t.legal.lastUpdated}: April 28, 2026
          </p>

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              1. Introduction
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern the
              relationship between MuggleShip Ltd (&quot;MuggleShip&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a company
              based in Bedford, United Kingdom, and the customer
              (&quot;Customer&quot;, &quot;you&quot;) using our services.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Our services include FBA preparation, eCommerce fulfillment,
              cross-border shipping, returns management, automated pricing,
              analytics and reporting, and listing optimization. The exact
              scope of any engagement is defined in a written quote or
              statement of work agreed with you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              2. Acceptance
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              By signing a quote, opening an account, sending inventory, or
              otherwise using our services, you accept these Terms and any
              additional terms set out in the engagement documents. If you do
              not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              3. Account and Eligibility
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our services are intended for businesses. You must be at least
              18 years old, represent a registered business entity, and
              provide accurate and complete information when opening an
              account. You are responsible for keeping your credentials
              confidential and for activity that takes place through your
              account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              4. Description of Services
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our services are quote-based and tailored to each account. The
              precise scope, deliverables, volumes, and service levels are
              defined in the signed quote or statement of work. MuggleShip
              acts as a service provider and warehouse operator. We are not a
              marketplace and we do not take title to your goods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              5. Pricing and Payment
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Pricing is custom per account and is set out in your quote.
              There are no setup fees. Invoices are issued monthly in arrears
              and are payable within 7 days of the invoice date unless
              otherwise agreed in writing.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Invoices are issued in GBP or USD as specified in the quote.
              Late payments accrue interest at the statutory rate under the
              Late Payment of Commercial Debts (Interest) Act 1998. Either
              party may terminate the engagement in accordance with the notice
              terms set out in the agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              6. Inventory Ownership and Risk
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Title to all goods stored with us remains with the Customer at
              all times. We hold inventory as bailee. Risk of loss or damage
              remains with the Customer except in cases of our proven
              negligence, subject to the liability limits set out below.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Insurance of inventory is the Customer&apos;s responsibility
              unless we have separately agreed in writing to provide cover.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              7. Service Standards and SLAs
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We work to best-effort service levels defined in each
              engagement, including a target 24-hour processing window for
              standard orders and accuracy targets for picking and packing.
              We are not liable for delays or failures caused by force
              majeure events, including but not limited to carrier
              disruption, customs holds, marketplace outages, strikes,
              extreme weather, or government action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              8. Customer Obligations
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You agree to provide accurate inventory, listing, and shipping
              data, to hold all required marketplace authorizations, and to
              ship only lawful goods that comply with UK and destination-
              country regulations. The following items are not accepted
              without prior written approval:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Weapons, ammunition, and military goods.</li>
              <li>
                Hazardous materials, lithium batteries above carrier limits,
                and dangerous goods.
              </li>
              <li>
                Restricted, counterfeit, or infringing goods of any kind.
              </li>
              <li>
                Perishable goods, live animals, and temperature-controlled
                pharmaceuticals.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              9. Amazon SP-API Access
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              When you engage our automated pricing, analytics, or listing
              optimization services, you authorize MuggleShip to access your
              Amazon Seller Central account through the Selling Partner API
              solely for the purposes of delivering the agreed services. You
              may revoke this access at any time directly in Seller Central.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We comply with Amazon&apos;s Acceptable Use Policy and Data
              Protection Policy. We do not use SP-API data for advertising
              and we do not share it with third parties other than the
              sub-processors needed to deliver the service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              10. Liability
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our aggregate liability under or in connection with the
              engagement is limited to the fees paid by the Customer in the
              12 months immediately preceding the event giving rise to the
              claim. We are not liable for indirect, consequential,
              incidental, or special losses, including loss of profits, loss
              of revenue, loss of goodwill, or loss of anticipated savings.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Nothing in these Terms limits or excludes liability that cannot
              lawfully be limited or excluded under English law, including
              liability for death or personal injury caused by negligence and
              for fraud.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              11. Confidentiality
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Each party will keep the other party&apos;s confidential
              information secure and will use it only to perform its
              obligations under the engagement. This obligation is mutual and
              continues for three years after the engagement ends.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              12. Intellectual Property
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The Customer retains all intellectual property rights in its
              products, listings, brands, content, and trademarks. MuggleShip
              retains all intellectual property rights in its software,
              dashboards, processes, documentation, and operational know-how.
              Nothing in these Terms transfers ownership of either
              party&apos;s intellectual property.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              13. Termination
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Either party may terminate the engagement in accordance with the
              notice provisions of the signed quote or statement of work.
              After termination, the Customer has 30 days to arrange
              retrieval of any remaining inventory. Storage and handling
              charges continue to apply until inventory is collected. Goods
              not collected after this period may be treated as abandoned and
              disposed of at the Customer&apos;s cost.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              14. Governing Law
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              These Terms and any engagement entered into under them are
              governed by the laws of England and Wales. The parties submit
              to the exclusive jurisdiction of the courts of England and
              Wales for the resolution of any dispute.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              15. Changes
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Material changes
              will be notified to active customers at least 30 days before
              they take effect. Your continued use of our services after the
              effective date constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              16. Contact
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              MuggleShip Ltd<br />
              Bedford, United Kingdom<br />
              Legal queries: legal@muggleship.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
