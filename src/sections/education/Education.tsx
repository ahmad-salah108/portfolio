"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import University from "./components/University";
import School from "./components/School";

function Education() {
  const { educationRef } = useSectionsObserver();

  return (
    <Box component={'section'} id="education" className="section my-200" ref={educationRef}>
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
          Education
        </Typography>
        <Box
          sx={{
            height: {
              xs: "368px",
              md: "390px",
            },
            width: "3px",
            backgroundColor: "primary.main",
            margin: "auto",
            position: "relative",
            borderRadius: "10px",
            transition: 'all 0.3s'
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: (theme) =>
                `0 0 13px 5px ${theme.palette.primary.main}`,
            }}
          ></Box>
          <University />
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              position: "absolute",
              top: "230px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: (theme) =>
                `0 0 13px 5px ${theme.palette.primary.main}`,
            }}
          ></Box>
          <School />
        </Box>
      </Stack>
    </Box>
  );
}

export default Education;
