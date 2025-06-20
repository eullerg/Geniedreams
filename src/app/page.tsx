import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import USP from "@/components/USP";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <USP />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
