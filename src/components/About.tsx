import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { value: 4, suffix: "+", label: "Productions" },
  { value: 3, suffix: "", label: "TV Serials" },
  { value: 1, suffix: "", label: "Ad Films" },
  { value: 4, suffix: "", label: "Short / Pilot Films" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-20 bg-bg-secondary overflow-hidden">
      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none overflow-hidden">
        <span className="ghost-text text-[14rem] md:text-[18rem] leading-none select-none">ABOUT</span>
      </div>

      {/* Section divider top */}
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <SectionHeader label="The Director" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 md:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 space-y-7"
          >
            {/* Cinematic italic quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative pl-6 border-l-2 border-gold"
            >
              <p className="font-display italic text-2xl md:text-3xl text-gold leading-snug">
                "Every shot is a decision. Every cut is a statement."
              </p>
            </motion.div>

            {[
              `I'm Shiyam Sundar P.M, an Assistant Director and Film Editor from Erode, Tamil Nadu, with hands-on experience across Tamil television serials, advertisement films, and independent short films. Currently pursuing BSc Film Technology (Editing) at SRM IST Ramapuram, Chennai (2022–2025).`,
              `My approach to filmmaking is built on three pillars: disciplined preparation, collaborative energy on set, and meticulous attention to narrative in post-production.`,
              `From the controlled chaos of a live TV serial set to the precision of advertisement filmmaking, I've developed the versatility to move between creative and technical roles — always with the story at the center.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="font-body text-base md:text-[17px] text-text-secondary leading-[1.85]"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right: Stats + details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-border-gold bg-bg-primary/50 p-5 group hover:border-gold transition-colors duration-400"
                >
                  <div className="stat-number">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted mt-3 group-hover:text-gold transition-colors">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Details list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 border border-border bg-bg-primary/40 p-5 space-y-3"
            >
              {[
                { icon: "📍", text: "Erode, Tamil Nadu · Chennai" },
                { icon: "🎓", text: "2022–2025 · BSc Film Technology" },
                { icon: "🌐", text: "Tamil · English" },
                { icon: "✅", text: "Available for collaboration" },
              ].map((item) => (
                <div key={item.text} className="flex gap-3 font-mono-c text-xs tracking-wider-c text-text-secondary">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
