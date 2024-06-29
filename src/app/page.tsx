import Hero from "@/sections/hero/Hero";
import Skills from "@/sections/skills/Skills";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero/>
      <Skills/>
    </Container>
  );
}
