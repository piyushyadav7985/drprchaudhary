import { motion } from "framer-motion";

const HERO_IMG = "https://i.ibb.co/5ghGjHHy/Screenshot-2026-06-08-025244.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F2318 0%, #1A3C2E 55%, #243F30 100%)",
      }}
    >
      {/* Radial glow + floating circles */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.10), transparent 50%), radial-gradient(circle at 30% 60%, rgba(26,60,46,0.9), transparent 60%)" }} />
      <div className="absolute drift-1 rounded-full pointer-events-none" style={{ width: 400, height: 400, top: -80, right: -80, background: "rgba(201,168,76,0.06)", filter: "blur(60px)" }} />
      <div className="absolute drift-2 rounded-full pointer-events-none" style={{ width: 300, height: 300, bottom: -60, left: -60, background: "rgba(255,255,255,0.03)", filter: "blur(60px)" }} />
      <div className="absolute drift-3 rounded-full pointer-events-none" style={{ width: 200, height: 200, top: "45%", right: "10%", background: "rgba(201,168,76,0.04)", filter: "blur(50px)" }} />
      <div className="absolute drift-4 rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -120, left: -120, background: "rgba(15,35,24,0.8)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-32 lg:pt-32 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
          >
            🏆 Gorakhpur's #1 Rated Surgeon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-display font-semibold text-white"
            style={{ fontSize: "clamp(2.6rem, 7vw, 4.5rem)", lineHeight: 1.05 }}
          >
            Surgical<br />Excellence<br />
            <span className="text-gold-gradient">You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Dr. P.R. Chaudhary — MBBS, MS (Surgery)
          </motion.p>
          <p className="mt-2 text-[15px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            40+ Years Experience | Gorakhpur's Most Trusted Surgeon
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: "⭐", text: "5.0 Rating" },
              { icon: "👨‍⚕️", text: "632+ Patients" },
              { icon: "🏥", text: "40+ Years" },
            ].map((b) => (
              <span key={b.text} className="px-4 py-2 rounded-full text-sm text-white" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                {b.icon} {b.text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-8 py-4 text-base">
              Book Consultation
            </button>
            <a href="tel:07703022121" className="btn-outline-white px-7 py-4 text-base inline-flex items-center">
              📞 Call: 077030 22121
            </a>
            <a href="https://wa.me/917703022121?text=Hello%20Dr.%20Chaudhary%2C%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener" className="btn-wa px-6 py-4 text-base inline-flex items-center">
              💬 WhatsApp Us
            </a>
          </motion.div>

          <p className="mt-8 italic text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Precision. Care. Trust.
          </p>
        </div>

        {/* Right - doctor image */}
        <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[600px]">
          <div className="absolute rounded-full" style={{ width: 460, height: 460, background: "radial-gradient(circle, rgba(201,168,76,0.25), transparent 70%)", filter: "blur(40px)" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative float-slow"
            style={{
              width: "min(420px, 85vw)",
              height: "min(560px, 70vh)",
              borderRadius: "40% 60% 50% 50%",
              border: "3px solid #C9A84C",
              boxShadow: "0 0 60px rgba(201,168,76,0.3)",
              overflow: "hidden",
            }}
          >
            <img src={HERO_IMG} alt="Dr. P.R. Chaudhary" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating cards - desktop only */}
          <div className="hidden md:block absolute glass float-a rounded-2xl px-5 py-3" style={{ top: "8%", right: "2%", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <div className="text-white font-bold">⭐ 5.0 Rating</div>
            <div className="text-xs" style={{ color: "#C9A84C" }}>632 Reviews</div>
          </div>
          <div className="hidden md:block absolute glass float-b rounded-2xl px-5 py-3" style={{ bottom: "12%", left: "0%", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <div className="text-white font-bold">✅ 632+ Patients</div>
            <div className="text-xs" style={{ color: "#C9A84C" }}>Treated with care</div>
          </div>
          <div className="hidden md:block absolute glass float-c rounded-2xl px-5 py-3" style={{ bottom: "4%", right: "4%", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <div className="text-white font-bold">🏥 Expert Surgeon</div>
            <div className="text-xs" style={{ color: "#C9A84C" }}>MBBS, MS Surgery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
