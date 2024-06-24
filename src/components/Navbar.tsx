"use client";

import * as React from "react";
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
import Button from "@mui/material/Button";
import { Container, Stack, alpha } from "@mui/material";
import NavLink from "./NavLink";

const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
        backdropFilter: "blur(10px)",
        backgroundColor: "transparent",
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
          <NavLink href={"/"} disableUnderlined>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink href={"/about"} disableUnderlined>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={'About'} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backdropFilter: "blur(10px)", backgroundColor: 'transparent', borderBottom: theme => `1px solid ${alpha(theme.palette.white.main, 0.17)}` }}
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
                textAlign: {xs: 'end', sm: 'start'}
                // display: { xs: "none", sm: "block" },
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
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/about"}>About</NavLink>
                <NavLink href={"/products"}>Products</NavLink>
                <NavLink href={"/contact"}>Contact</NavLink>
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
