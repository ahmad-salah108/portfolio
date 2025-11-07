import { SocialsType } from "@/types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MailOutline } from "@mui/icons-material";

export const socials: SocialsType[] = [
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