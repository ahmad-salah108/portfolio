"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <Box
      component={"aside"}
      sx={{
        width: {
          xs: "300px",
          sm: "400px",
        },
        height: {
          xs: "300px",
          sm: "400px",
        },
        position: "relative",
      }}
      className="center"
    >
      <Image
        fill
        src={`/ahmadsalah.webp`}
        alt="Ahmad Salah Photo"
        sizes="(max-width: 600px) 300px, 400px"
        preload
      />
    </Box>
  );
}
