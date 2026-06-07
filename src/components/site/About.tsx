import { motion } from "framer-motion";

const ABOUT_IMG = "https://image.pollinations.ai/prompt/professional%20Indian%20senior%20male%20surgeon%20white%20coat%20stethoscope%20smiling%20confident%20hospital%20corridor%20background%20warm%20lighting%20ultra%20realistic?width=480&height=580&nologo=true&seed=778";

const badges = ["MBBS", "MS Surgery", "General Surgeon", "Laparoscopic Expert", "40+ Years"];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ background: "#FAF9F6" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[400px]"
        >
          <div className="absolute -left-5 top-[20%] h-3/5 w-1 rounded-full" style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
          <img
            src={ABOUT_IMG}
            alt="Dr. P.R. Chaudhary"
            loading="lazy"
            className="w-full"
            style={{ borderRadius: 24, boxShadow: "0 30px 80px rgba(26,60,46,0.25)", border: "3px solid rgba(201,168,76,0.3)" }}
          />
          <div className="absolute -top-4 -left-4 px-4 py-2.5 text-sm" style={{ background: "#1A3C2E", color: "white", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
            Specialty: <span style={{ color: "#C9A84C", fontWeight: 700 }}>MS Surgery</span>
          </div>
          <div className="absolute -bottom-4 -right-4 px-4 py-2.5 text-sm font-bold" style={{ background: "#C9A84C", color: "#1A3C2E", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
            ✅ 40+ Years Expert
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-semibold mb-3" style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.15em" }}>
            ABOUT THE SURGEON
          </div>
          <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            <span style={{ color: "#1A3C2E" }}>Meet Dr. P.R.</span><br />
            <span className="text-gold-gradient">Chaudhary</span>
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.8]" style={{ color: "#4B5563" }}>
            <p>
              With over 40 years of distinguished surgical expertise, Dr. P.R. Chaudhary stands as one of Gorakhpur's most respected and trusted surgeons. Practicing at Sardar Patel Hospital, Civil Lines, he has dedicated his career to delivering exceptional surgical outcomes with precision, compassion, and the highest standard of patient care.
            </p>
            <p>
              His mastery in general and laparoscopic surgery — combined with a perfect 5.0 Google rating from 632+ grateful patients — is a testament to his unmatched skill and unwavering commitment to healing.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {badges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-5 py-2 text-[13px] font-semibold cursor-default transition-colors"
                style={{ border: "1.5px solid #C9A84C", color: "#1A3C2E", borderRadius: 50 }}
                whileHover={{ backgroundColor: "#C9A84C", color: "white" }}
              >
                {b}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6 lg:gap-10">
            {[
              { n: "632+", l: "Happy Patients" },
              { n: "40+", l: "Years Experience" },
              { n: "5.0★", l: "Google Rating" },
            ].map((s, i) => (
              <div key={s.l} className="flex items-center gap-6 lg:gap-10">
                <div>
                  <div className="font-display" style={{ fontSize: 36, color: "#C9A84C", lineHeight: 1 }}>{s.n}</div>
                  <div className="text-[13px] mt-1" style={{ color: "#6B7280" }}>{s.l}</div>
                </div>
                {i < 2 && <div className="w-px h-12" style={{ background: "rgba(201,168,76,0.4)" }} />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
