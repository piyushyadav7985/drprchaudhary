import { motion } from "framer-motion";

const reviews = [
  { name: "Abhinav Ranjan", text: "Dr. sahab is a complete and proficient surgeon with a very fine pair of hands. Truly one of the best.", avatar: "https://image.pollinations.ai/prompt/Indian%20young%20male%20professional%20headshot%20friendly%20smile%20neutral%20background?width=56&height=56&nologo=true&seed=501" },
  { name: "Arslan Khan", text: "Most experienced and best laparoscopic surgeon and general surgery doctor in Gorakhpur. Highly recommended.", avatar: "https://image.pollinations.ai/prompt/Indian%20middle%20aged%20male%20friendly%20face%20headshot%20clean%20background%20realistic?width=56&height=56&nologo=true&seed=502" },
  { name: "Priya Pathak", text: "Senior most and best laparoscopy surgeon, highly recommend. Excellent care and professional staff.", avatar: "https://image.pollinations.ai/prompt/Indian%20young%20female%20professional%20smiling%20headshot%20neutral%20background%20realistic?width=56&height=56&nologo=true&seed=503" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24" style={{ background: "#FAF9F6" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="font-semibold mb-3" style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.15em" }}>
            PATIENT TESTIMONIALS
          </div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#1A3C2E" }}>
            What Our <span className="text-gold-gradient">Patients Say</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
            <span style={{ color: "#C9A84C", letterSpacing: 2 }}>★★★★★</span>
            <span className="font-semibold" style={{ color: "#1A3C2E" }}>5.0 out of 5</span>
            <span className="text-sm" style={{ color: "#6B7280" }}>(Based on 632 Google Reviews)</span>
          </div>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white p-7 transition-all duration-300"
              style={{ borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid transparent" }}
            >
              <div className="font-display" style={{ fontSize: 80, color: "rgba(201,168,76,0.2)", lineHeight: 0.5, height: 30 }}>"</div>
              <p className="mt-4 italic leading-[1.7]" style={{ color: "#4B5563", fontSize: 15 }}>
                {r.text}
              </p>
              <div className="my-5 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-bold" style={{ color: "#1A3C2E" }}>{r.name}</div>
                    <div className="text-xs font-semibold" style={{ color: "#C9A84C" }}>Verified Patient</div>
                  </div>
                </div>
                <div style={{ color: "#C9A84C", letterSpacing: 1 }}>★★★★★</div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Dr+PR+Chaudhary+Gorakhpur"
            target="_blank"
            rel="noopener"
            className="inline-block px-8 py-3.5 font-semibold transition-all"
            style={{ border: "2px solid #C9A84C", color: "#1A3C2E", borderRadius: 50 }}
          >
            See All 632+ Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
