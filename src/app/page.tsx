import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import FBAPrep from "@/components/FBAPrep";
import EcommerceFulfillment from "@/components/EcommerceFulfillment";
import CrossBorder from "@/components/CrossBorder";
import ReturnsManagement from "@/components/ReturnsManagement";
import Stats from "@/components/Stats";
import AutomatedPricing from "@/components/AutomatedPricing";
import AnalyticsReporting from "@/components/AnalyticsReporting";
import ListingOptimization from "@/components/ListingOptimization";
import HowPricingWorks from "@/components/HowPricingWorks";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Reveal>
          <WhyChooseUs />
        </Reveal>

        {/* Services hub — single overview before deep dives */}
        <ServicesOverview />

        {/* Core operations deep-dives */}
        <Reveal>
          <FBAPrep />
        </Reveal>
        <Reveal>
          <EcommerceFulfillment />
        </Reveal>
        <Reveal>
          <CrossBorder />
        </Reveal>
        <Reveal>
          <ReturnsManagement />
        </Reveal>

        {/* Mid-page punctuation: dark stats strip */}
        <Stats />

        {/* Amazon-specific tooling deep-dives */}
        <Reveal>
          <AutomatedPricing />
        </Reveal>
        <Reveal>
          <AnalyticsReporting />
        </Reveal>
        <Reveal>
          <ListingOptimization />
        </Reveal>

        {/* Pricing model */}
        <Reveal>
          <HowPricingWorks />
        </Reveal>

        {/* Social proof break, then trust-building blocks */}
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <AboutUs />
        </Reveal>
        <Reveal>
          <Locations />
        </Reveal>

        {/* Conversion footer: FAQ + Contact */}
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
