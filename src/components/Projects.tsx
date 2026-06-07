import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  no: string;
  title: string;
  role: string;
  type: string;
  intro: string;
  bullets: string[];
  badges: string[];
  tags: string[];
  accent: string; // gradient
  driveLink?: string;
};

const PROJECTS: Project[] = [
  {
    no: "01",
    title: "Mayilon Media Works",
    role: "Creative Director",
    type: "Commercial Advertisement",
    intro:
      "Directed the advertisement project for Mayilon Media Works, handling overall creative execution — from storyboard to final delivery.",
    bullets: [
      "Directed the advertisement project, handling overall creative execution.",
      "Planned shoot sequences, including scene composition and shot division.",
      "Coordinated cast and crew to ensure smooth production workflow.",
      "Managed on-set activities and maintained production timelines.",
      "Worked closely with the production team to meet client requirements.",
      "Delivered a high-quality commercial advertisement on schedule.",
    ],
    badges: ["Creative Director", "Commercial Ad"],
    tags: ["#Advertisement", "#Commercial", "#CreativeDirection", "#MayilonMediaWorks"],
    accent: "from-amber-600/20 via-yellow-800/10 to-bg-primary",
    driveLink: "https://drive.google.com/drive/folders/1AoHxXAxEtfGYE6hRFF-TVazn-HujhtBl?usp=drive_link",
  },
  {
    no: "02",
    title: "Parakka Selava",
    role: "Written & Directed",
    type: "Pilot Film",
    intro:
      "A Tamil-language pilot film demonstrating full creative ownership — from screenplay development to final direction.",
    bullets: [
      "Wrote original screenplay — developed characters, narrative arc, and dialogue.",
      "Prepared complete pre-production: storyboard, shot list, location breakdown.",
      "Directed all cast and crew on set — blocking, performance, framing decisions.",
      "Managed production logistics, shoot schedule, and crew coordination.",
    ],
    badges: ["Writer", "Director"],
    tags: ["#PilotFilm", "#OriginalScreenplay", "#TamilCinema", "#Direction"],
    accent: "from-amber-500/20 via-orange-700/10 to-bg-primary",
  },
  {
    no: "03",
    title: "Dharmapuri Documentary",
    role: "Editor",
    type: "Documentary Film",
    intro:
      "A documentary capturing stories from the Dharmapuri region of Tamil Nadu. Edited for narrative pacing, emotional resonance, and authentic storytelling.",
    bullets: [
      "Organized and reviewed hours of interview, B-roll, and archival footage.",
      "Constructed narrative timeline — identified key emotional beats and arc.",
      "Edited in Premiere Pro / Final Cut Pro with multi-track audio management.",
      "Applied color grading and delivered broadcast-ready final cut.",
    ],
    badges: ["Editor"],
    tags: ["#Documentary", "#TamilNadu", "#Editing", "#Storytelling"],
    accent: "from-stone-500/20 via-zinc-700/10 to-bg-primary",
  },
  {
    no: "04",
    title: "Mudivil Thodakam",
    role: "Editor",
    type: "Short Film",
    intro:
      "A Tamil short film showcasing precision editing — tight pacing, emotional cuts, and visual rhythm in a condensed narrative format.",
    bullets: [
      "Assembled raw footage into a coherent narrative arc for the short film.",
      "Executed scene-by-scene editing with attention to performance timing.",
      "Applied color grading and sound design integration.",
      "Delivered festival-ready final export in industry-standard formats.",
    ],
    badges: ["Editor"],
    tags: ["#ShortFilm", "#Editing", "#PostProduction", "#TamilFilm"],
    accent: "from-rose-900/20 via-red-900/10 to-bg-primary",
  },
  {
    no: "05",
    title: "Maara Ninaikiren",
    role: "Director of Photography · Editor",
    type: "Pilot Film",
    intro:
      "A Tamil pilot film where Shiyam handled both cinematography and editing — strong visual language from capture to cut.",
    bullets: [
      "Planned and executed cinematography — composition, lighting, camera movement.",
      "Operated camera and made real-time visual decisions on set.",
      "Maintained visual consistency between shots for seamless editing.",
      "Edited the pilot and performed color grading to establish final visual tone.",
    ],
    badges: ["Cinematographer", "Editor"],
    tags: ["#Cinematography", "#Editing", "#PilotFilm", "#VisualStorytelling"],
    accent: "from-amber-700/25 via-yellow-900/10 to-bg-primary",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-bg-primary overflow-hidden">
      <div className="absolute -top-20 -right-32 ghost-text text-[18rem] hidden lg:block">REEL</div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Selected Works"
          title="The Reel"
          subtitle="Stories written, cut, framed, and directed."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group relative card-cinema overflow-hidden ${i % 3 === 0 ? "md:row-span-2" : ""}`}
            >
              {/* Poster zone */}
              <div className={`relative aspect-[16/10] ${i % 3 === 0 ? "md:aspect-[4/5]" : ""} overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                <div className="card-shimmer" />
                <div className="scanlines opacity-60" />
                {/* Filmstrip top/bottom */}
                <div className="absolute top-0 left-0 right-0 h-3 filmstrip opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 h-3 filmstrip opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="font-mono-c text-[10px] tracking-cinema text-gold mb-3">
                      PROJECT · {p.no}
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl text-text-primary tracking-wider-c uppercase">
                      {p.title}
                    </h3>
                    <div className="mt-3 font-mono-c text-[11px] tracking-cinema uppercase text-amber-soft">
                      {p.role} · {p.type}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/85 to-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/40 group-hover:border-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                  {p.intro}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 font-body text-sm text-text-secondary leading-relaxed">
                      <span className="text-gold mt-2 shrink-0 h-px w-2.5 bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 font-mono-c text-[10px] tracking-cinema uppercase text-bg-primary bg-gold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-4 font-mono-c text-[11px] tracking-wider-c text-text-muted">
                  {p.tags.join("  ")}
                </div>
                {p.driveLink && (
                  <a
                    href={p.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono-c text-[11px] tracking-cinema uppercase text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-bg-primary transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    View Project
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
