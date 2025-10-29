"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Education() {
  const { educationRef } = useSectionsObserver();

  return (
    <Box id="education" className="section my-100" ref={educationRef}>
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
          Education
        </Typography>
        <Box
          sx={{
            height: "370px",
            width: "3px",
            backgroundColor: "primary.main",
            margin: "auto",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: (theme) =>
                `0 0 13px 5px ${theme.palette.primary.main}`,
            }}
          ></Box>
          <Typography
            sx={{
              position: "absolute",
              top: "10px",
              left: "-60px",
              fontWeight: "600",
            }}
          >
            2023
          </Typography>
          <Box
            sx={{
              background: (theme) => theme.palette.paper.main,
              minWidth: "430px",
              padding: "20px",
              borderRadius: "10px",
              transition: "all 0.3s",
              cursor: "pointer",
              border: '3px solid #eab308ff',
              boxShadow: (theme) =>
                `0 0 25px -5px ${theme.palette.primary.main}`,
              "&:hover": {
                boxShadow: (theme) =>
                  `0 0 25px ${theme.palette.primary.main}`,
                transform: {
                  xs: "scale(1.02) translateX(-50%)",
                  md: "scale(1.02) translateX(0)"
                },
              },
              position: "absolute",
              top: "60px",
              left: {
                xs: "50%",
                md: "-450px",
              },
              transform: {
                xs: "translateX(-50%)",
                md: "initial",
              },
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600" }}>
              Bachelor&apos;s degree in Software Development
            </span>{" "}
            <br />{" "}
            <i style={{ fontWeight: "normal" }}>Islamic University of Gaza</i>
          </Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              position: "absolute",
              top: "230px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: (theme) =>
                `0 0 13px 5px ${theme.palette.primary.main}`,
            }}
          ></Box>
          <Typography
            sx={{
              position: "absolute",
              top: "230px",
              left: "-60px",
              fontWeight: "600",
            }}
          >
            2019
          </Typography>
          <Box
            sx={{
              background: (theme) => theme.palette.paper.main,
              minWidth: "430px",
              padding: "20px",
              borderRadius: "10px",
              transition: "all 0.3s",
              cursor: "pointer",
              border: '3px solid #eab308ff',
              boxShadow: (theme) =>
                `0 0 25px -5px ${theme.palette.primary.main}`,
              "&:hover": {
                boxShadow: (theme) =>
                  `0 0 25px ${theme.palette.primary.main}`,
                transform: {
                  xs: "scale(1.02) translateX(50%)",
                  md: "scale(1.02) translateX(0)"
                },
              },
              position: "absolute",
              top: "270px",
              right: {
                xs: "50%",
                md: "-450px",
              },
              transform: {
                xs: "translateX(50%)",
                md: "initial",
              },
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600" }}>
              High School Certificate in Scientific Branch
            </span>{" "}
            <br />{" "}
            <i style={{ fontWeight: "normal" }}>Al-Taqwa School</i>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Education;
