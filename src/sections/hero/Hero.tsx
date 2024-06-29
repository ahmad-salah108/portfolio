"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export default function Hero() {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="section center-vertically">
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
          <Box
            sx={{
              width: "fit-content",
              overflow: "hidden",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              transition: "all 0.4s",
            }}
          >
            {downSm ? (
              <Image
                src={`/ahmadsalah.webp`}
                alt="Ahmad Salah Photo"
                width={300}
                height={300}
                quality={100}
                priority
              />
            ) : (
              <Image
                src={`/ahmadsalah.webp`}
                alt="Ahmad Salah Photo"
                width={400}
                height={400}
                quality={100}
                priority
              />
            )}
          </Box>
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
          <Box>
            <Typography
              variant="h2"
              sx={{ "&, & span": { fontWeight: "700" } }}
            >
              {`Hi, it's `}
              <Typography variant="h2" component={"span"} color="primary">
                Ahmad
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{ "&, & span": { fontWeight: "700" } }}
              mb={2}
            >
              {`I'm a `}
              <Typography variant="h5" component={"span"} color="primary">
                Front-End Developer
              </Typography>
            </Typography>
            <Typography mb={1} sx={{ lineHeight: "1.8rem" }}>
              Resourceful professional with successful track record in
              developing innovative web designs and features. Possesses solid
              knowledge of ReactJS, Typescript and NextJS with ability to
              quickly learn new technologies. Demonstrated success in
              identifying and resolving complex code issues.
            </Typography>
            <Stack mb={2} direction={"row"}>
              <Link
                href="https://www.linkedin.com/in/ahmad-salah-1b750b223/"
                target="_blank"
                tabIndex={-1} // Cancels tab select (focus-visible)
              >
                <IconButton color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Link>
              <Link
                href="https://github.com/ahmad-salah108/"
                target="_blank"
                tabIndex={-1} // Cancels tab select (focus-visible)
              >
                <IconButton color="primary">
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                href="https://wa.me/+972592433871"
                target="_blank"
                tabIndex={-1} // Cancels tab select (focus-visible)
              >
                <IconButton color="primary">
                  <WhatsAppIcon />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/ahmad_salah108/"
                target="_blank"
                tabIndex={-1} // Cancels tab select (focus-visible)
              >
                <IconButton color="primary">
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Stack>
            <Stack direction={"row"} sx={{ gap: "1rem" }}>
              <Button variant="contained">Hire</Button>
              <Button variant="outlined">Contact</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
