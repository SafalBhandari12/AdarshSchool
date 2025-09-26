import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import MoreAbout from "@/components/MoreAbout";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <MoreAbout />
      <ContactSection />
      <Footer />
    </>
  );
}
