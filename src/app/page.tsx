import Contact from "@/sections/contact/Contact";
import Education from "@/sections/education/Education";
import Experience from "@/sections/experience/Experience";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container component={'main'} maxWidth="lg">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer/>
    </Container>
  );
}
