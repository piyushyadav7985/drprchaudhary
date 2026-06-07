import { useEffect, useState } from "react";
import { Menu, X, Plus } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
        style={{
          height: "72px",
          background: scrolled ? "#1A3C2E" : "rgba(15,35,24,0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-5 lg:px-10 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}>
              <Plus className="w-5 h-5" style={{ color: "#C9A84C" }} strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-white text-lg lg:text-xl font-semibold">Dr. P.R. Chaudhary</div>
              <div style={{ color: "#C9A84C", letterSpacing: "0.15em", fontSize: "10px", fontWeight: 600 }}>SURGEON</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  className="relative text-[15px] font-medium transition-colors group"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  <span className="group-hover:text-[#C9A84C] transition-colors">{l.label}</span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden lg:inline-flex btn-gold px-6 py-2.5 text-sm"
          >
            Book Consultation
          </button>

          <button
            className="lg:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#1A3C2E", paddingTop: "80px" }}
      >
        <div className="flex flex-col items-center gap-2 px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              className="w-full text-center py-4 text-xl text-white border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="w-full mt-8 flex flex-col gap-3">
            <a href="tel:07703022121" className="btn-gold py-4 text-center">📞 Call Now</a>
            <a href="https://wa.me/917703022121" target="_blank" rel="noopener" className="btn-wa py-4 text-center">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
