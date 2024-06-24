"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 112px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "50px",
            width: "100%",
          }}
        >
          <Box sx={{width: '50%'}}>
            <Typography
              variant="h2"
              sx={{ "&, & span": { fontWeight: "700" } }}
            >
              Hi, it's{" "}
              <Typography variant="h2" component={"span"} color="primary">
                Ahmad
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{ "&, & span": { fontWeight: "700" } }}
              mb={2}
            >
              I'm a{" "}
              <Typography variant="h5" component={"span"} color="primary">
                Front-End Developer
              </Typography>
            </Typography>
            <Typography sx={{lineHeight: '1.7rem'}}>
              Resourceful professional with successful track record in
              developing innovative web designs and features. Possesses solid
              knowledge of ReactJS, Typescript and NextJS with ability to
              quickly learn new technologies. Demonstrated success in
              identifying and resolving complex code issues.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "270px",
              height: "270px",
              boxShadow: (theme) =>
                `0 0 10px 4px ${theme.palette.primary.main}`,
              backgroundColor: (theme) => theme.palette.primary.main,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              transition: "all 0.4s",
              "&:hover": {
                boxShadow: (theme) =>
                  `0 0 50px 4px ${theme.palette.primary.main}, 0 0 15px 0 ${theme.palette.primary.main}, 0 0 15px 0 ${theme.palette.primary.main}`,
              },
            }}
          >
            <Image
              src={"/ahmad-salah.png"}
              alt="Ahmad Salah Picture"
              width={270}
              height={270}
              priority
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
