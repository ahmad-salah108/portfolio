import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Facebook, Mail, MailOutline } from "@mui/icons-material";
import { SocialsType } from "@/types";

const socials: SocialsType[] = [
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/ahmad-salah-1b750b223/",
  },
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    url: "https://github.com/ahmad-salah108/",
  },
  {
    title: "WhatsApp",
    icon: <WhatsAppIcon />,
    url: "https://wa.me/+970592433871",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/ahmad_salah108/",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/mr2jack",
  },
  {
    title: "Email",
    icon: <MailOutline />,
    url: "mailto:ahmad.work108@gmail.com",
  },
];

export default function HeroDescription() {
  return (
    <Box>
      <Typography variant="h2" sx={{ "&, & span": { fontWeight: "700" } }}>
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
        Resourceful professional with successful track record in developing
        innovative web designs and features. Possesses solid knowledge of &nbsp;
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 600 }}
        >
          React.js
        </Typography>
        ,{" "}
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 600 }}
        >
          TypeScript
        </Typography>{" "}
        and{" "}
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 600 }}
        >
          Next.js
        </Typography>{" "}
        with ability to quickly learn new technologies. Demonstrated success in
        identifying and resolving complex code issues.
      </Typography>
      <Stack mb={2} direction={"row"}>
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
      <Stack direction={"row"} sx={{ gap: "1rem" }}>
        <Button variant="contained">Hire</Button>
        <Button variant="outlined">Contact</Button>
      </Stack>
    </Box>
  );
}
