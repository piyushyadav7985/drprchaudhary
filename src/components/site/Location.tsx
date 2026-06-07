import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16" style={{ background: "#1A3C2E" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[700px] mx-auto px-5 text-center p-10 lg:p-12"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 24 }}
      >
        <MapPin className="w-12 h-12 mx-auto" style={{ color: "#C9A84C" }} />
        <h2 className="mt-4 font-display text-white" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}>Find Us</h2>
        <p className="mt-5 text-[17px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.8)" }}>
          Sardar Patel Hospital<br />
          Near Chhatra Sangh Bhawan<br />
          Civil Lines, Gorakhpur<br />
          Uttar Pradesh 273001
        </p>
        <div className="mt-6 inline-block px-6 py-2 rounded-full" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>
          ⏰ Mon–Sat | Opens 9:00 AM
        </div>
        <div className="mt-8">
          <a
            href="https://maps.google.com/?q=Sardar+Patel+Hospital+Civil+Lines+Gorakhpur+UP"
            target="_blank"
            rel="noopener"
            className="btn-gold inline-block px-10 py-4 text-base"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
}
