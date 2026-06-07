import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. P.R. Chaudhary | General & Laparoscopic Surgeon, Gorakhpur" },
      { name: "description", content: "Dr. P.R. Chaudhary — MS (Surgery), 40+ years of surgical excellence at Sardar Patel Hospital, Civil Lines, Gorakhpur. 5.0★ rated by 632+ patients." },
      { property: "og:title", content: "Dr. P.R. Chaudhary | Senior Surgeon, Gorakhpur" },
      { property: "og:description", content: "40+ years of surgical excellence. General & Laparoscopic Surgeon at Sardar Patel Hospital, Civil Lines, Gorakhpur." },
    ],
  }),
  component: Index,
});

function Index() {
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
