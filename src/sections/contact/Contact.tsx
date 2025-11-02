"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Button, Stack, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

function Contact() {
  const { contactRef } = useSectionsObserver();

  return (
    <Box id="education" className="section my-100" sx={{paddingBottom: '1000px'}} ref={contactRef}>
      <Stack sx={{ width: "100%", gap: "7rem" }}>
        <Typography
          variant="h2"
          className="section-heading text-gold"
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
