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
      }}
      className="center"
    >
      {downSm ? (
        <Image
          src={`/ahmadsalah.webp`}
          alt="Ahmad Salah Photo"
          width={300}
          height={300}
          priority
        />
      ) : (
        <Image
          src={`/ahmadsalah.webp`}
          alt="Ahmad Salah Photo"
          width={400}
          height={400}
          priority
        />
      )}
    </Box>
  );
}
