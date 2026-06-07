import { motion } from "framer-motion";

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      {/* Clapper label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
        <span className="clapper-badge">{label}</span>
        <span className="h-px w-6 bg-gold/40" />
      </motion.div>

      {/* Title — character-by-character reveal feel via clip-path */}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-wider-c"
        >
          {title}
        </motion.h2>
      </div>

      {/* Animated gold underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`h-[2px] mt-4 bg-gradient-to-r from-gold to-transparent ${align === "center" ? "mx-auto" : ""}`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-5 font-body text-base md:text-lg text-text-secondary max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
