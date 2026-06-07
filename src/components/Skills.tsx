import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const DIRECTION = [
  "Script Writing",
  "Shooting Script Preparation",
  "Script Breakdown & Continuity",
  "Crew Management",
  "Floor Management",
  "Shot Planning & Storyboarding",
  "Cast Coordination",
  "Schedule Management",
];

const POST = [
  { name: "Final Draft", note: "Screenwriting" },
  { name: "Premiere Pro", note: "Multi-cam Editing" },
  { name: "Final Cut Pro", note: "Broadcast Workflow" },
  { name: "DaVinci Resolve", note: "Color & Audio" },
  { name: "Multicam Editing", note: "TV Serial Assembly" },
  { name: "Color Grading", note: "Tone & Mood" },
  { name: "Audio Sync & Mix", note: "Dialogue · Music · SFX" },
  { name: "Broadcast Delivery", note: "Vijay TV · DD TV" },
];

const SOFT = [
  "Communication",
  "Problem Solving",
  "Collaboration",
  "Tamil (Native)",
  "English (Professional)",
  "Fast Typing & Documentation",
];

function Block({ children, title, label }: { children: React.ReactNode; title: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="border-t border-border-gold pt-8"
    >
      <div className="font-mono-c text-[11px] tracking-cinema uppercase text-gold mb-3">{label}</div>
      <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-6">{title}</h3>
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader label="Capabilities" title="The Toolkit" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Block label="Category 01" title="Direction & Production">
            <div className="flex flex-wrap gap-2">
              {DIRECTION.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 font-mono-c text-[11px] tracking-wider-c uppercase border border-border-gold text-amber-soft hover:bg-gold hover:text-bg-primary hover:border-gold transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>

          <Block label="Category 02" title="Post-Production & Editing">
            <div className="grid grid-cols-2 gap-3">
              {POST.map((s) => (
                <div key={s.name} className="border border-border p-4 hover:border-gold transition-colors">
                  <div className="font-display text-lg text-text-primary">{s.name}</div>
                  <div className="font-mono-c text-[10px] tracking-cinema uppercase text-text-muted mt-1">
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </Block>
        </div>

        <div className="mt-16">
          <Block label="Category 03" title="Soft Skills & Languages">
            <div className="flex flex-wrap gap-2">
              {SOFT.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 font-mono-c text-[11px] tracking-wider-c uppercase rounded-full bg-bg-tertiary text-text-secondary border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}
