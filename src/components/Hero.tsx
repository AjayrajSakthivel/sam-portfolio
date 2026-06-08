import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import portrait from "@/assets/shiyam-portrait.jpg";

const TAGLINE = "Crafting stories, frame by frame.";

const TICKER_ITEMS = [
  "Assistant Director",
  "✦",
  "Film Editor",
  "✦",
  "Creative Director",
  "✦",
  "Visual Storyteller",
  "✦",
  "Post-Production",
  "✦",
  "Tamil Cinema",
  "✦",
];

function Typewriter() {
  const [text, setText] = useState("");
  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const t = setInterval(() => {
        setText(TAGLINE.slice(0, i + 1));
        i++;
        if (i >= TAGLINE.length) clearInterval(t);
      }, 50);
      return () => clearInterval(t);
    }, 1400);
    return () => clearTimeout(delay);
  }, []);
  return (
    <p className="font-mono-c text-sm md:text-base text-amber-soft tracking-wider-c">
      {text}<span className="blink text-gold">_</span>
    </p>
  );
}

const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: (i % 3) + 1.5,
  left: `${(i * 13 + 5) % 100}%`,
  top: `${(i * 17 + 10) % 100}%`,
  opacity: 0.12 + (i % 4) * 0.06,
  duration: 6 + (i % 4),
  xOffset: (i % 5) * 6 - 12,
  delay: i * 0.7,
}));

export function Hero() {
  const particles = useMemo(() => PARTICLES, []);
  const tickerText = TICKER_ITEMS.join("  ") + "  ";

  return (
    <section id="hero" className="relative min-h-screen hero-radial overflow-hidden">

      {/* ── Vignette ── */}
      <div className="vignette" />

      {/* ── Scanlines ── */}
      <div className="scanlines" />

      {/* ── Grain ── */}
      <div className="grain" />

      {/* ── Bokeh background orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bokeh w-[500px] h-[500px] bg-gold/5 -top-40 -left-40" />
        <div className="bokeh w-[400px] h-[400px] bg-red-drama/5 bottom-0 right-0" style={{ animationDelay: "4s" }} />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top, opacity: p.opacity, willChange: "transform" }}
            animate={{ y: [0, -28, 0], x: [0, p.xOffset, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      {/* ── Portrait ── */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-[55%] lg:w-[50%] pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-full h-full">
          <img
            src={portrait}
            alt="Shiyam Sundar P.M — Assistant Director and Editor"
            className="w-full h-full object-cover object-center portrait-img"
            loading="eager"
            decoding="async"
          />
          {/* Softer fade — left edge only, so portrait stays bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-32 min-h-screen flex flex-col justify-center">

        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-12 bg-gradient-to-r from-gold to-gold/30" />
          <span className="clapper-badge">
            <span className="text-[9px]">▶</span>
            Assistant Director · Film Editor · Creative
          </span>
        </motion.div>

        {/* Hero name — words slide up from behind clip */}
        <h1 className="font-display font-light leading-[0.9] text-text-primary text-[17vw] md:text-[10vw] lg:text-[9rem] tracking-wider-c overflow-hidden">
          {["SHIYAM", "SUNDAR P.M"].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
                style={{ willChange: "transform" }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="h-px mt-8 max-w-xs"
          style={{ background: "linear-gradient(90deg, var(--accent-gold), transparent)" }}
        />

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-6 max-w-xl"
        >
          <Typewriter />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="https://drive.google.com/drive/folders/1AoHxXAxEtfGYE6hRFF-TVazn-HujhtBl" target="_blank" rel="noopener noreferrer" className="btn-gold">
            <span>View My Reel</span>
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          className="mt-14 flex gap-8 flex-wrap"
        >
          {[
            { value: "4+", label: "Productions" },
            { value: "3", label: "TV Serials" },
            { value: "5", label: "Projects" },
          ].map((s) => (
            <div key={s.label} className="border-l border-gold/30 pl-4">
              <div className="font-display text-3xl text-gold font-light">{s.value}</div>
              <div className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono-c text-[9px] tracking-cinema uppercase text-text-muted">Scroll</span>
          <div className="relative h-14 w-px bg-text-muted/30 overflow-hidden">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold scroll-dot" />
          </div>
        </motion.div>
      </div>

      {/* ── Cinematic ticker tape at bottom ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 py-3 border-t border-border/50 bg-bg-primary/60 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <div className="ticker-wrap">
          <div className="ticker font-mono-c text-[10px] tracking-cinema uppercase text-text-muted">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={`mx-4 ${item === "✦" ? "text-gold" : ""}`}>{item}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
