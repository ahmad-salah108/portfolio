"use client"

import { socials } from "@/constants/socials";
import { alpha, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";

function Footer() {
  return (
    <Stack
    component={'footer'}
      direction={"row"}
      className="center"
      sx={{
        padding: "1rem",
        justifyContent: "space-between",
        borderTop: (theme) =>
          `1px solid ${alpha(theme.palette.white.main, 0.17)}`,
        flexWrap: 'wrap',
        rowGap: '1rem'
      }}
    >
      <Typography color="offWhite">&copy; 2025 Ahmad Salah. All Rights reserved.</Typography>
      <Stack component={'address'} direction={"row"} sx={{gap: '0.5rem'}}>
        {socials.map((s) => (
          <Link
            key={s.url}
            href={s.url}
            target="_blank"
            title={s.title}
            tabIndex={-1} // Cancels tab select (focus-visible)
          >
            <IconButton color="primary">{s.icon}</IconButton>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

export default Footer;
