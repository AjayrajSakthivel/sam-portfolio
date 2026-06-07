import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Film } from "lucide-react";

const CONTACTS = [
  { Icon: Phone, label: "Call", value: "+91 79047 40799", href: "tel:+917904740799" },
  { Icon: Mail, label: "Email", value: "shiyamsudarmahendran@gmail.com", href: "mailto:shiyamsudarmahendran@gmail.com" },
  { Icon: MapPin, label: "Based In", value: "Erode, Tamil Nadu", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-bg-primary overflow-hidden">
      <div className="grain" />

      {/* Filmstrip top */}
      <div className="absolute top-0 left-0 right-0 h-2 filmstrip opacity-60" />

      {/* Ghost watermark — brighter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-black text-[14rem] md:text-[20rem] leading-none"
          style={{ color: "var(--text-primary)", opacity: 0.055, letterSpacing: "0.04em" }}
        >
          SHIYAM
        </span>
      </div>

      {/* Spotlight sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="spotlight-sweep" />
      </div>

      {/* Reel decoration */}
      <div className="absolute -bottom-36 -right-36 w-[26rem] h-[26rem] opacity-[0.06] reel-spin pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
          <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={100 + Math.cos(a) * 60}
                cy={100 + Math.sin(a) * 60}
                r="13"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-gold"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="clapper-badge">
              <span className="text-[9px]">▶</span> Final Frame
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Heading */}
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-light text-5xl md:text-7xl lg:text-8xl tracking-wider-c leading-[1.0]"
            >
              LIGHTS.{" "}
              <span className="text-gold-glow">CAMERA.</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display font-light text-5xl md:text-7xl lg:text-8xl tracking-wider-c leading-[1.0]"
            >
              CONNECT.
            </motion.h2>
          </div>

          {/* Rule */}
          <motion.div
            className="rule-cinema mt-8 max-w-md mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Available for Assistant Direction, Editing projects, and Creative collaborations.
          </motion.p>

          {/* Contact cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {CONTACTS.map(({ Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group border border-border bg-bg-secondary/80 backdrop-blur-sm p-7 text-left hover:border-gold transition-all duration-400 relative overflow-hidden"
              >
                {/* shimmer */}
                <div className="card-shimmer" />
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-5 group-hover:border-gold transition-colors duration-300">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted mb-2">
                  {label}
                </div>
                <div className="font-body text-sm text-text-primary break-all group-hover:text-gold transition-colors duration-300">
                  {value}
                </div>
                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500" />
              </motion.a>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <motion.a
              href="mailto:shiyamsudarmahendran@gmail.com"
              className="inline-flex items-center justify-center gap-3 h-16 px-20 font-mono-c text-sm tracking-cinema uppercase border-2 border-white/30 text-white hover:border-gold hover:text-gold transition-all duration-400 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Film className="w-4 h-4 relative z-10" strokeWidth={1.5} />
              <span className="relative z-10">Send a Message</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 pt-8 border-t border-border max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted">
          © {new Date().getFullYear()} Shiyam Sundar P.M · All Rights Reserved
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gold text-xs">✦</span>
          <span className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted">
            Crafted frame by frame
          </span>
          <span className="text-gold text-xs">✦</span>
        </div>
      </footer>
    </section>
  );
}
