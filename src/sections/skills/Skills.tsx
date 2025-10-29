"use client"

import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SkillCard from "./components/SkillCard";
import type { SkillCardType } from "@/types";
import data from "./data.json";
import { useSectionsObserver } from "@/context/SectionsObserverContext";

const skills: SkillCardType[] = data;

export default function Skills() {
  const { skillsRef } = useSectionsObserver();
  
  return (
    <Box id="skills" className="section my-100" ref={skillsRef}>
      <Stack sx={{ width: "100%", gap: "7rem" }}>
        <Typography
          variant="h2"
          className="section-heading text-gold"
          sx={{
            fontWeight: "500",
            letterSpacing: "1rem",
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          Skills
        </Typography>
        <Grid container sx={{ rowGap: "30px" }}>
          {skills.map((s) => (
            <Grid key={s.title} item xs={12} sm={4} md={3} lg={2.4}>
              <SkillCard title={s.title} src={s.src} alt={s.alt} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
