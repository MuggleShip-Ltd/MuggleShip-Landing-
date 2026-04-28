import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FBAPrep from "@/components/FBAPrep";
import EcommerceFulfillment from "@/components/EcommerceFulfillment";
import CrossBorder from "@/components/CrossBorder";
import ReturnsManagement from "@/components/ReturnsManagement";
import AutomatedPricing from "@/components/AutomatedPricing";
import AnalyticsReporting from "@/components/AnalyticsReporting";
import ListingOptimization from "@/components/ListingOptimization";
import HowPricingWorks from "@/components/HowPricingWorks";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <div id="services" className="scroll-mt-20" />
        <FBAPrep />
        <EcommerceFulfillment />
        <CrossBorder />
        <ReturnsManagement />
        <AutomatedPricing />
        <AnalyticsReporting />
        <ListingOptimization />
        <HowPricingWorks />
        <AboutUs />
        <Testimonials />
        <Locations />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
