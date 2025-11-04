import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CarouselModal from "./CarouselModal";
import { ProjectsDataType } from "@/types";
import Link from "next/link";

function ProjectCard({ project }: { project: ProjectsDataType[0] }) {
  return (
    <Box
      sx={{
        margin: "auto",
        background: (theme) => theme.palette.primary.main,
        width: "350px",
        height: "100%", //"545px",
        minHeight: "545px",
        // borderRadius: "10px",
        padding: "5px",
        boxShadow: (theme) => `0 0 25px -5px ${theme.palette.primary.main}`,
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          boxShadow: (theme) => `0 0 25px ${theme.palette.primary.main}`,
          transform: "scale(1.02)",
        },
        "&:hover .project-image": {
          transform: "scale(1.1)",
        },
        "&:hover #project-gallery-btn": {
          opacity: "1",
        },
        "&:hover #project-image-overlay": {
          background: (theme) => alpha(theme.palette.black.main, 0.5),
        },
      }}
    >
      <Box
        sx={{
          background: (theme) => alpha(theme.palette.black.main, 0.9),
          width: "100%",
          height: "100%",
          // borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            // borderRadius: "10px 10px 0 0",
            position: "relative",
          }}
        >
          <Box
            id="project-image-overlay"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "1",
              transition: "all 0.3s",
              background: (theme) => alpha(theme.palette.black.main, 0.1),
            }}
          ></Box>
          <Box className="project-image" sx={{ transition: "all 0.3s" }}>
            <Image
              src={project.thumbnail}
              alt="fenzo"
              width={"340"}
              height={"200"}
              style={{
                objectFit: "cover",
                // borderRadius: "10px 10px 0 0"
              }}
            />
          </Box>
          <CarouselModal project={project} />
        </Box>
        <Stack
          direction={"column"}
          sx={{ padding: "15px", height: "calc(100% - 200px)" }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "1rem", fontWeight: "700", letterSpacing: "1px" }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "0.75rem",
              marginTop: "2px",
              fontWeight: "normal",
              opacity: "0.8",
            }}
          >
            {project.subtitle}
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "1px",
              background: (theme) => alpha(theme.palette.white.main, 0.5),
              margin: "15px 0 10px",
            }}
          ></Box>
          <Typography color="offWhite.dark" sx={{ fontSize: "0.9rem", marginBottom: "30px" }}>
            {project.description}
          </Typography>
          <Stack
            direction={"row"}
            sx={{ marginTop: "auto", marginBottom: "5px", gap: "15px" }}
          >
            <Link
              href={project.github.url}
              target="_blank"
              style={{
                pointerEvents: project.github.disabled ? "none" : "initial",
              }}
            >
              <Button
                disabled={project.github.disabled}
                variant="outlined"
                size="small"
                color="primary"
              >
                <GitHubIcon sx={{ fontSize: "1.2rem" }} /> &nbsp; View Code
              </Button>
            </Link>
            <Link
              href={project.live.url}
              target="_blank"
              style={{
                pointerEvents: project.live.disabled ? "none" : "initial",
              }}
            >
              <Button
                disabled={project.live.disabled}
                variant="contained"
                size="small"
                color="primary"
              >
                <OpenInNewIcon sx={{ fontSize: "1.2rem" }} /> &nbsp; View Live
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProjectCard;
