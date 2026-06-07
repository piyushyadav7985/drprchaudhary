import { motion } from "framer-motion";
import { Stethoscope, Activity, HeartPulse, Shield, Scissors, Siren } from "lucide-react";

const services = [
  { title: "General Surgery", desc: "Expert diagnosis and surgical treatment of diverse conditions with precision and care.", img: "https://image.pollinations.ai/prompt/modern%20operation%20theater%20general%20surgery%20professional%20Indian%20hospital%20green%20scrubs%20surgical%20team%20bright%20lights%20realistic?width=420&height=240&nologo=true&seed=301", Icon: Stethoscope },
  { title: "Laparoscopic Surgery", desc: "Minimally invasive techniques for faster recovery, minimal pain, and scarring.", img: "https://image.pollinations.ai/prompt/laparoscopic%20surgery%20minimally%20invasive%20medical%20equipment%20screens%20operation%20theater%20professional%20Indian%20hospital?width=420&height=240&nologo=true&seed=302", Icon: Activity },
  { title: "Gallbladder Removal", desc: "Safe laparoscopic cholecystectomy with high success rate and quick recovery.", img: "https://image.pollinations.ai/prompt/gallbladder%20laparoscopic%20removal%20surgery%20professional%20hospital%20operation%20theater%20medical%20team%20realistic?width=420&height=240&nologo=true&seed=303", Icon: HeartPulse },
  { title: "Hernia Repair", desc: "Advanced hernia repair procedures with excellent long-term outcomes.", img: "https://image.pollinations.ai/prompt/hernia%20repair%20surgery%20professional%20surgical%20team%20hospital%20operation%20realistic%20Indian?width=420&height=240&nologo=true&seed=304", Icon: Shield },
  { title: "Abdominal Surgery", desc: "Complex abdominal procedures performed with 40 years of expertise.", img: "https://image.pollinations.ai/prompt/abdominal%20surgery%20professional%20Indian%20hospital%20operation%20theater%20surgical%20equipment%20realistic?width=420&height=240&nologo=true&seed=305", Icon: Scissors },
  { title: "Emergency Surgery", desc: "Available for urgent surgical cases with prompt response and expert care.", img: "https://image.pollinations.ai/prompt/emergency%20surgery%20hospital%20professional%20medical%20team%20urgent%20care%20operation%20theater%20realistic?width=420&height=240&nologo=true&seed=306", Icon: Siren },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24" style={{ background: "#F0F4F1" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="font-semibold mb-3" style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.15em" }}>
            OUR SPECIALITIES
          </div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#1A3C2E" }}>
            Expert Surgical <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="mt-4 text-[17px]" style={{ color: "#6B7280" }}>
            Decades of experience across all surgical disciplines
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-luxe group"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(26,60,46,0.8))" }} />
              </div>
              <div className="p-6">
                <s.Icon className="w-6 h-6 mb-3" style={{ color: "#C9A84C" }} />
                <h3 className="font-display text-xl font-bold" style={{ color: "#1A3C2E" }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7280" }}>{s.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-semibold" style={{ color: "#C9A84C" }}>
                  Learn More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
