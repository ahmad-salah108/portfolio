"use client";

import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack, alpha } from "@mui/material";
import { useHash } from "@/hooks/useHash";
import { scrollToSection } from "@/utils";
import ButtonNav from "./ButtonNav";

const drawerWidth = 240;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const hash = useHash();
  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);

  const drawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        backdropFilter: "blur(20px)",
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            "&, & span": {
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "2px",
            },
            flexGrow: 1,
            my: 2,
          }}
        >
          Ahmad{" "}
          <Typography
            component={"span"}
            color={"primary"}
            className="text-shadow-gold"
          >
            Salah
          </Typography>
        </Typography>
        <Divider />
        <List>
          <ButtonNav
            disableUnderlined={true}
            section=""
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            }
          />
          <ButtonNav
            disableUnderlined={true}
            section="experience"
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Experience"} />
                </ListItemButton>
              </ListItem>
            }
          />
          <ButtonNav
            disableUnderlined={true}
            section="skills"
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Skills"} />
                </ListItemButton>
              </ListItem>
            }
          />
          <ButtonNav
            disableUnderlined={true}
            section="education"
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Education"} />
                </ListItemButton>
              </ListItem>
            }
          />
          <ButtonNav
            disableUnderlined={true}
            section="projects"
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Projects"} />
                </ListItemButton>
              </ListItem>
            }
          />
          <ButtonNav
            disableUnderlined={true}
            section="contact"
            content={
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Contact"} />
                </ListItemButton>
              </ListItem>
            }
          />
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: (theme) => alpha(theme.palette.black.main, 0.5),
          borderBottom: (theme) =>
            `1px solid ${alpha(theme.palette.white.main, 0.17)}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h1"
              sx={{
                "&, & span": {
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  letterSpacing: "2px",
                },
                flexGrow: 1,
                textAlign: { xs: "end", sm: "start" },
              }}
            >
              Ahmad{" "}
              <Typography
                component={"span"}
                color={"primary"}
                className="text-shadow-gold"
              >
                Salah
              </Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Stack direction={"row"} spacing={3}>
                <ButtonNav section="" content="Home" />
                <ButtonNav section="experience" content="Experience" />
                <ButtonNav section="skills" content="Skills" />
                <ButtonNav section="education" content="Education" />
                <ButtonNav section="projects" content="Projects" />
                <ButtonNav section="contact" content="Contact" />
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>{drawer}</nav>
      <Container maxWidth="lg">
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Container>
    </Box>
  );
}
