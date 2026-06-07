import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiyam Sundar P.M — Assistant Director · Editor · Creative" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Shiyam Sundar P.M — Assistant Director, Film Editor and Creative Director from Salem, Tamil Nadu. Tamil television, short films and advertisements.",
      },
      { property: "og:title", content: "Shiyam Sundar P.M — Cinematic Portfolio" },
      {
        property: "og:description",
        content: "Stories written, cut, framed, and directed.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
