import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 632, suffix: "+", label: "Happy Patients" },
  { value: 5.0, suffix: "★", label: "Perfect Rating", decimals: 1 },
  { value: 40, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Rate" },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, decimals, mv]);
  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="py-12" style={{ background: "#1A3C2E" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative text-center"
          >
            <div className="font-display text-[48px] leading-none" style={{ color: "#C9A84C" }}>
              <Counter to={s.value} decimals={s.decimals ?? 0} />{s.suffix}
            </div>
            <div className="mt-3 text-xs uppercase" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}>
              {s.label}
            </div>
            {i < stats.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-px h-12" style={{ background: "rgba(201,168,76,0.3)" }} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
