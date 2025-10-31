"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  const { projectsRef } = useSectionsObserver();


  return (
    <Box id="projects" className="section my-100" ref={projectsRef}>
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
          Projects
        </Typography>
        <Grid container spacing={2} sx={{rowGap: '2rem'}}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project="fenzo"/>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Projects;
