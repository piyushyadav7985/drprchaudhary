import { Plus, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0F1F16", color: "white" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}>
                <Plus className="w-5 h-5" style={{ color: "#C9A84C" }} strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-display text-lg">Dr. P.R. Chaudhary</div>
                <div className="text-xs" style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>MS Surgery | General Surgeon</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              40+ years of surgical excellence at Sardar Patel Hospital, Civil Lines, Gorakhpur.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.me/917703022121" target="_blank" rel="noopener" aria-label="WhatsApp" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}>
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:07703022121" aria-label="Phone" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}>
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <FooterCol title="Quick Links" items={[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Reviews", href: "#reviews" },
            { label: "Contact", href: "#contact" },
          ]} />

          <FooterCol title="Services" items={[
            { label: "General Surgery", href: "#services" },
            { label: "Laparoscopic", href: "#services" },
            { label: "Gallbladder", href: "#services" },
            { label: "Hernia Repair", href: "#services" },
            { label: "Abdominal Surgery", href: "#services" },
            { label: "Emergency", href: "#services" },
          ]} />

          <div>
            <h4 className="text-xs font-semibold uppercase mb-4" style={{ color: "#C9A84C", letterSpacing: "0.15em" }}>Contact</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li>📍 Civil Lines, Gorakhpur, UP 273001</li>
              <li><a href="tel:07703022121" className="hover:text-[#C9A84C]">📞 077030 22121</a></li>
              <li>🏥 Sardar Patel Hospital</li>
              <li>🕐 Mon–Sat | 9:00 AM+</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>© 2025 Dr. P.R. Chaudhary. All rights reserved.</div>
          <a href="#" className="text-[13px]" style={{ color: "#C9A84C" }}>Website by Alpha Media</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase mb-4" style={{ color: "#C9A84C", letterSpacing: "0.15em" }}>{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              onClick={(e) => {
                if (i.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(i.href)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="transition-colors hover:text-[#C9A84C]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
