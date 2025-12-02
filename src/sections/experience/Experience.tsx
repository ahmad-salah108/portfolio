"use client";

import { alpha, Box, Chip, Stack, Typography } from "@mui/material";
import { useSectionsObserver } from "@/context/SectionsObserverContext";
import JobCard from "./components/JobCard";
import { JobCardType } from "@/types";
import data from "@/data/experiences.json"

const experiences = data as JobCardType[]

export default function Experience() {
  const { experienceRef } = useSectionsObserver();

  return (
    <Box component={'section'} id="experience" className="section my-200" ref={experienceRef}>
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
          Experience
        </Typography>
        <Stack sx={{ gap: "2rem", margin: "auto", maxWidth: "850px" }}>
          {experiences.map((e, i) => (
            <JobCard key={i} data={e}/>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
