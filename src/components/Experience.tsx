import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Exp = {
  scene: string;
  roll: string;
  take: string;
  role: string;
  company: string;
  period: string;
  type: string;
  productions?: string[];
  intro?: string;
  bullets: string[];
  skills: string;
};

const EXPERIENCES: Exp[] = [
  {
    scene: "01",
    roll: "A",
    take: "01",
    role: "Creative Director",
    company: "Mayilon Media Works",
    period: "2024",
    type: "Commercial Advertisement",
    intro: "Directed and managed end-to-end production of a high-quality commercial advertisement for a client.",
    bullets: [
      "Led entire creative direction — visual storytelling, mood, and brand tone for the ad.",
      "Developed detailed storyboard, shot list, and scene-by-scene breakdown before shoot day.",
      "Planned shot composition, camera angles, lighting mood, and movement sequences.",
      "Cast and coordinated on-screen talent and worked with makeup, costume, and art teams.",
      "Managed full crew on set — DOP, sound, production assistants — maintaining professional workflow.",
      "Delivered final high-quality advertisement meeting all client requirements on schedule.",
    ],
    skills: "Creative Direction · Storyboarding · Crew Management · Client Communication · On-Set Leadership",
  },
  {
    scene: "02",
    roll: "B",
    take: "01",
    role: "Assistant Director (Serial)",
    company: "Vijay Television",
    period: "2023 — 2024",
    type: "Tamil Television Serial",
    productions: [
      "Mahanadhi — Long-running family drama on Vijay TV",
      "Ayyanar Thunai — Action/drama serial on Vijay TV",
    ],
    bullets: [
      "Prepared and managed detailed shooting scripts and daily call sheets for cast and crew.",
      "Coordinated between director, DOP, art department, and production unit for seamless shoot flow.",
      "Managed on-set continuity — costume, props, scene continuity across shooting days.",
      "Handled real-time floor management during live serial recording sessions.",
      "Assisted director in blocking actors and framing shot sequences.",
      "Supervised crowd/background artist coordination for large ensemble scenes.",
    ],
    skills: "Script Breakdown · Floor Management · Continuity · Cast Coordination · Schedule Management",
  },
  {
    scene: "03",
    roll: "C",
    take: "02",
    role: "Serial Editing Intern",
    company: "Anandha Vikatan Television",
    period: "3 Months · 2023",
    type: "Tamil TV Post-Production",
    productions: [
      "Siragadikka Aasai — Reality/drama hybrid on Vijay TV",
      "Budget Kudumbam — Family entertainment on DD TV",
    ],
    bullets: [
      "Performed rough-cut and fine-cut editing of daily episodes under senior editor supervision.",
      "Managed multi-camera footage organization and syncing in Premiere Pro / Final Cut Pro.",
      "Executed real-time editing for broadcast-ready episodes under strict daily deadlines.",
      "Applied color correction, audio mixing, and title-card integration for final delivery.",
      "Understood broadcast format requirements — frame rates, codecs, delivery for Vijay TV / DD TV.",
    ],
    skills: "Premiere Pro · Final Cut Pro · DaVinci Resolve · Multicam Editing · Broadcast Delivery",
  },
];

function Slate({ scene, roll, take }: { scene: string; roll: string; take: string }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono-c text-[10px] tracking-cinema uppercase text-text-muted mb-4">
      <span className="px-2 py-1 border border-border-gold text-gold">SCENE {scene}</span>
      <span className="px-2 py-1 border border-border">ROLL {roll}</span>
      <span className="px-2 py-1 border border-border">TAKE {take}</span>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Professional Experience"
          title="The Credits Roll"
          subtitle="From serial floors to commercial studios — every set left a mark."
        />

        <div className="relative pl-6 md:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[26px] md:-left-[50px] top-6 w-3 h-3 rounded-full bg-gold ring-4 ring-bg-primary" />

                <div className="card-cinema p-6 md:p-10">
                  <Slate scene={e.scene} roll={e.roll} take={e.take} />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-text-primary">
                      {e.role}
                    </h3>
                    <span className="font-mono-c text-xs tracking-wider-c uppercase text-gold">
                      @ {e.company}
                    </span>
                  </div>
                  <div className="font-mono-c text-[11px] tracking-cinema uppercase text-text-muted mb-6">
                    {e.period} · {e.type}
                  </div>

                  {e.productions && (
                    <div className="mb-5">
                      <div className="font-mono-c text-[11px] tracking-cinema uppercase text-text-muted mb-2">
                        Productions
                      </div>
                      <ul className="space-y-1.5">
                        {e.productions.map((p) => (
                          <li key={p} className="font-body text-[15px] text-amber-soft">
                            — {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {e.intro && (
                    <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-4">
                      {e.intro}
                    </p>
                  )}

                  <ul className="space-y-2.5 mb-6">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 font-body text-[15px] text-text-secondary leading-relaxed">
                        <span className="text-gold mt-2 shrink-0 h-px w-3 bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-border font-mono-c text-[11px] tracking-wider-c uppercase text-text-muted">
                    🎬 {e.skills}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
