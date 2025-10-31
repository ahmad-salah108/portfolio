import { Box, Typography } from "@mui/material";

function University() {
  return (
    <Box>
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
          width: {
            xs: "330px",
            sm: "430px"
          },
          padding: "20px",
          // borderRadius: "10px",
          transition: "all 0.3s",
          cursor: "pointer",
          border: "3px solid #eab308ff",
          boxShadow: (theme) => `0 0 25px -5px ${theme.palette.primary.main}`,
          "&:hover": {
            boxShadow: (theme) => `0 0 25px ${theme.palette.primary.main}`,
            transform: {
              xs: "scale(1.02) translateX(-50%)",
              md: "scale(1.02) translateX(0)",
            },
          },
          position: "absolute",
          top: "55px",
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
    </Box>
  );
}

export default University;
