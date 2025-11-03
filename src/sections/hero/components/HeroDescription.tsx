import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MailOutline } from "@mui/icons-material";
import { SocialsType } from "@/types";
import { scrollToSection } from "@/utils";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

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
        innovative web designs and features. Possesses solid knowledge of&nbsp;
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 700 }}
        >
          React.js
        </Typography>
        ,{" "}
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 700 }}
        >
          TypeScript
        </Typography>{" "}
        and{" "}
        <Typography
          component={"span"}
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 700 }}
        >
          Next.js
        </Typography>{" "}
        with ability to quickly learn new technologies. Demonstrated success in
        identifying and resolving complex code issues.
      </Typography>
      <Stack mb={4} direction={"row"}>
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
      <Stack direction={"row"} sx={{ gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="contained" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
        <Link href={"/my-resume.pdf"} target="_blank" type="application/pdf">
          <Button variant="outlined">
            Download Resume &nbsp;
            <CloudDownloadIcon sx={{ fontSize: "1.3rem" }} />
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
