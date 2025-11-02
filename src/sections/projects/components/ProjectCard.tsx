import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CarouselModal from "./CarouselModal";
import { ProjectImagesDataType } from "@/types";

function ProjectCard({ project }: { project: keyof ProjectImagesDataType }) {
  return (
    <Box
      sx={{
        margin: "auto",
        background: (theme) => theme.palette.primary.main,
        width: "350px",
        height: "545px",
        // borderRadius: "10px",
        padding: "5px",
        boxShadow: (theme) => `0 0 25px -5px ${theme.palette.primary.main}`,
        transition: "all 0.3s",
        display: "flex",
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
              background: (theme) => alpha(theme.palette.black.main, 0.3),
            }}
          ></Box>
          <Box className="project-image" sx={{ transition: "all 0.3s" }}>
            <Image
              src={"/projects/fenzo/fenzo-home-signed-out.webp"}
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
        <Box sx={{ padding: "15px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "1rem", fontWeight: "700", letterSpacing: "1px" }}
          >
            Fenzo
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
            eCommerce
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "1px",
              background: (theme) => alpha(theme.palette.white.main, 0.5),
              margin: "15px 0",
            }}
          ></Box>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            possimus soluta sint suscipit nihil facere aspernatur magnam quidem
            id. Quidem exercitationem voluptatum autem modi aliquid molestias
            dolores itaque expedita inventore? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officiis, dignissimos.
          </Typography>
          <Stack direction={"row"} sx={{ marginTop: "30px", gap: "10px" }}>
            <Button
              // disabled
              variant="outlined"
              size="small"
              color="primary"
            >
              <GitHubIcon sx={{ fontSize: "1.2rem" }} /> &nbsp; View Code
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
            >
              <OpenInNewIcon sx={{ fontSize: "1.2rem" }} /> &nbsp; View Live
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
