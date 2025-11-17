"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Button, Stack, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

function Contact() {
  const { contactRef } = useSectionsObserver();

  return (
    <Box component={'section'} id="contact" className="section" style={{marginTop: '200px', marginBottom: '100px'}} ref={contactRef}>
      <Stack sx={{ width: "100%", gap: "7rem" }}>
        <Typography
          variant="h2"
          className="section-heading text-gold responsive-heading"
          sx={{
            fontWeight: "500",
            letterSpacing: "0.3rem",
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          Contact Me
        </Typography>
        <ContactForm />
      </Stack>
    </Box>
  );
}

export default Contact;
