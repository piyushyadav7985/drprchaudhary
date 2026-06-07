import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", age: "", type: "General Consultation", message: "", date: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const update = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  const submit = () => {
    if (!f.name.trim() || !f.phone.trim()) {
      setErr("Please enter your name and phone number.");
      return;
    }
    setErr("");
    const msg = `Hello Dr. Chaudhary! I would like to book an appointment.%0AName: ${encodeURIComponent(f.name)}%0APhone: ${encodeURIComponent(f.phone)}%0AAge: ${encodeURIComponent(f.age)}%0ASurgery Type: ${encodeURIComponent(f.type)}%0APreferred Date: ${encodeURIComponent(f.date)}%0AMessage: ${encodeURIComponent(f.message)}`;
    setSent(true);
    setTimeout(() => window.open(`https://wa.me/917703022121?text=${msg}`, "_blank"), 700);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24" style={{ background: "#F0F4F1" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#1A3C2E" }}>
            Book Your <span className="text-gold-gradient">Consultation</span>
          </h2>
          <p className="mt-4 text-[17px]" style={{ color: "#6B7280" }}>
            Fill the form below or reach us directly
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 text-white"
            style={{ background: "linear-gradient(135deg, #1A3C2E, #243F30)", borderRadius: 24 }}
          >
            <h3 className="font-display text-3xl" style={{ color: "#C9A84C" }}>Get In Touch</h3>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">Near Chhatra Sangh Bhawan, Civil Lines,<br />Gorakhpur, Uttar Pradesh 273001</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Located at Sardar Patel Hospital</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🕐</div>
                <div>
                  <div className="font-semibold">Monday – Saturday</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Opens 9:00 AM</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📞</div>
                <a href="tel:07703022121" className="font-semibold hover:text-[#C9A84C] transition-colors">077030 22121</a>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a href="tel:07703022121" className="btn-gold w-full block text-center py-3.5">📞 Call Now: 077030 22121</a>
              <a href="https://wa.me/917703022121?text=Hello%20Dr.%20Chaudhary%2C%20I%20would%20like%20to%20book%20a%20surgical%20consultation." target="_blank" rel="noopener" className="btn-wa w-full block text-center py-3.5">💬 WhatsApp Consultation</a>
              <a href="https://maps.google.com/?q=Sardar+Patel+Hospital+Civil+Lines+Gorakhpur" target="_blank" rel="noopener" className="btn-outline-white w-full block text-center py-3.5">📍 Get Directions</a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-10"
            style={{ borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <h3 className="font-display text-2xl" style={{ color: "#1A3C2E" }}>Request Appointment</h3>

            <div className="mt-6 space-y-4">
              <input className="input-luxe" placeholder="Your full name" value={f.name} onChange={(e) => update("name", e.target.value)} />
              <input type="tel" className="input-luxe" placeholder="Your mobile number" value={f.phone} onChange={(e) => update("phone", e.target.value)} />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" className="input-luxe" placeholder="Your age" value={f.age} onChange={(e) => update("age", e.target.value)} />
                <input type="date" className="input-luxe" value={f.date} onChange={(e) => update("date", e.target.value)} />
              </div>
              <select className="input-luxe" value={f.type} onChange={(e) => update("type", e.target.value)}>
                {["General Consultation", "General Surgery", "Laparoscopic Surgery", "Gallbladder Surgery", "Hernia Repair", "Abdominal Surgery", "Emergency", "Other"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <textarea rows={3} className="input-luxe" style={{ minHeight: 90, resize: "vertical" }} placeholder="Briefly describe your condition (optional)" value={f.message} onChange={(e) => update("message", e.target.value)} />

              {err && <div className="text-sm text-red-600">{err}</div>}
              {sent && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-center py-3 px-4 rounded-xl font-semibold" style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a" }}>
                  ✅ Redirecting to WhatsApp...
                </motion.div>
              )}

              <button onClick={submit} className="btn-gold w-full py-4 text-base">
                Send Appointment Request →
              </button>

              <p className="text-xs text-center" style={{ color: "#6B7280" }}>
                🔒 Your information is safe. We'll confirm your slot within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
