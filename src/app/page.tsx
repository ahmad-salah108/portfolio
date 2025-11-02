import Contact from "@/sections/contact/Contact";
import Education from "@/sections/education/Education";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </Container>
  );
}
