"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import projectsData from "./projectsData.json"
import { ProjectsDataType } from "@/types";

function Projects() {
  const { projectsRef } = useSectionsObserver();
  const projects = projectsData as ProjectsDataType;


  return (
    <Box id="projects" className="section my-200" ref={projectsRef}>
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
        <Grid container spacing={2} sx={{rowGap: '3rem', alignItems: 'stretch'}}>
          {projects?.map(p => (
            <Grid key={p.title} size={{ xs: 12, md: 6, lg: 4 }}>
              <ProjectCard project={p}/>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Projects;
