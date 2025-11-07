"use client";

import { alpha, Box, Chip, Stack, Typography } from "@mui/material";
import { useSectionsObserver } from "@/context/SectionsObserverContext";
import JobCard from "./components/JobCard";
import experienceData from "./experienceData.json"
import { JobCardType } from "@/types";

const data = experienceData as JobCardType[]

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
          {data.map((e, i) => (
            <JobCard key={i} data={e}/>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
