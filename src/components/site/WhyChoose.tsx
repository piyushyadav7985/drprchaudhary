import { motion } from "framer-motion";

const items = [
  { icon: "✂️", title: "40 Years Experience", desc: "Senior-most surgeon in Gorakhpur with unmatched expertise" },
  { icon: "⭐", title: "Perfect 5.0 Rating", desc: "632+ patients consistently rate him 5 stars" },
  { icon: "🏥", title: "Sardar Patel Hospital", desc: "Practicing at Civil Lines, Gorakhpur's trusted location" },
  { icon: "🔬", title: "Laparoscopic Expert", desc: "Minimally invasive surgery for faster patient recovery" },
];

export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "linear-gradient(135deg, #1A3C2E, #243F30)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-semibold text-white"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
        >
          Why Patients Trust <span className="text-gold-gradient">Dr. Chaudhary</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center px-6 py-8 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 20 }}
            >
              <div className="text-5xl mb-4">{it.icon}</div>
              <h3 className="font-display text-xl text-white">{it.title}</h3>
              <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
