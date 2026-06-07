import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, width: "100%" }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        {/* Top filmstrip line when scrolled */}
        {scrolled && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, var(--accent-red), var(--accent-gold), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-display text-2xl tracking-wider-c text-text-primary flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-text-primary">S</span>
            <span className="text-gold text-lg">✦</span>
            <span className="text-text-primary">S</span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <a
                  href={l.href}
                  className="nav-link font-mono-c text-[11px] tracking-cinema uppercase text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="mailto:shiyamsudarmahendran@gmail.com"
            className="hidden md:inline-flex items-center gap-2 btn-gold text-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-6 h-px bg-gold"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-gold"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-gold"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className="md:hidden overflow-hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border"
          initial={{ height: 0 }}
          animate={{ height: menuOpen ? "auto" : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-c text-[12px] tracking-cinema uppercase text-text-secondary hover:text-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:shiyamsudarmahendran@gmail.com"
              className="font-mono-c text-[11px] tracking-cinema uppercase text-gold border border-gold px-4 py-3 text-center hover:bg-gold hover:text-bg-primary transition-all"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
