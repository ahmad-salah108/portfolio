"use client";

import { Box, Theme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HeroImage() {
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "fit-content",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.4s",
      }}
      className="center"
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
  );
}
