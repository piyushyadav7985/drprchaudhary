import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyChoose from "@/components/site/WhyChoose";
import Reviews from "@/components/site/Reviews";
import Contact from "@/components/site/Contact";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Reviews />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
