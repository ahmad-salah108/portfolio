import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Education() {
  return (
    <Box id="education" className="section py-100">
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
            height: "600px",
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
              // boxShadow: '10px 10px 10px var(--mui-palette-primary-main)'
            }}
          ></Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Education;
