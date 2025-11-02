"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Stack, Typography } from "@mui/material";

function Contact() {
  const { contactRef } = useSectionsObserver();

  return (
    <Box id="education" className="section my-100" ref={contactRef}>
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
      </Stack>
    </Box>
  );
}

export default Contact;
