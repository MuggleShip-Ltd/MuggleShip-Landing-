import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AutomatedPricing from "@/components/AutomatedPricing";
import AnalyticsReporting from "@/components/AnalyticsReporting";
import ListingOptimization from "@/components/ListingOptimization";
import HowPricingWorks from "@/components/HowPricingWorks";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />

        <ServicesOverview />

        {/* Amazon SP-API tooling deep-dives — kept for compliance with
            the listed app-store categories (AI Repricing, Analytics
            and Reporting, Listing). */}
        <Reveal>
          <AutomatedPricing />
        </Reveal>
        <Reveal>
          <AnalyticsReporting />
        </Reveal>
        <Reveal>
          <ListingOptimization />
        </Reveal>

        <Reveal>
          <HowPricingWorks />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <AboutUs />
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
