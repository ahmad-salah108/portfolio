import { Box, Typography } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <Box className="section center-vertically">
      <Typography
        variant="h2"
        className="underlined-glow active text-gold"
        sx={{ fontWeight: "500", letterSpacing: "1rem", textAlign: 'center', marginInline: 'auto' }}
      >
        Skills
      </Typography>
    </Box>
  );
}
