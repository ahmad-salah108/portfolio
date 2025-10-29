"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import HeroImage from "./components/HeroImage";
import HeroDescription from "./components/HeroDescription";
import { useSectionsObserver } from "@/context/SectionsObserverContext";

export default function Hero() {
  const { heroRef } = useSectionsObserver();

  return (
    <Box id="hero" className="section" ref={heroRef}>
      <Grid
        container
        sx={{ width: "100%", justifyContent: "space-between", rowGap: "40px" }}
      >
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            order: { lg: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "end" },
            marginInline: { xs: "auto", lg: "0" },
          }}
        >
          <HeroImage />
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "start" },
            maxWidth: { xs: "640px", lg: "auto" },
            marginInline: { xs: "auto", lg: "0" },
          }}
        >
          <HeroDescription />
        </Grid>
      </Grid>
    </Box>
  );
}
