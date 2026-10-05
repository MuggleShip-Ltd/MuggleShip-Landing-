import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import HowPricingWorks from "@/components/HowPricingWorks";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

// Amazon SP-API tooling (price automation, analytics, listings, buyer
// messaging) is described in full, with its compliance disclosures, on
// the /services/<slug>/ pages linked from the services list below.
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <HowItWorks />
        <HowPricingWorks />
        <Testimonials />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
