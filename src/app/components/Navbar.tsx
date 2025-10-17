"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Menu, SidebarCloseIcon, X } from "lucide-react";
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <>
      <AppBar position="sticky" color="white" sx={{ bgcolor: "#fffff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Image
              src="/images/logo.png"
              alt="Sample"
              width={150}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </Box>
          {/* desktop menu */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                href={link.path}
                sx={{ textTransform: "none" }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { gap: 20, xs: "none", lg: "flex" } }}>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Register</Button>
          </Box>

          {/* mobile menu */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", lg: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 400, bgcolor: "white" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <Image
              src="/images/logo.png"
              alt="Sample"
              width={150}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <IconButton onClick={toggleDrawer(false)}>
            <X />
          </IconButton>
        </Box>
        <Box
          sx={{
            border: "ActiveBorder",
            display: "flex",
            justifyItems: "center",
            placeItems: "center",
          }}
        >
          <List sx={{ width: "100%" }}>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.title}
                component={Link}
                href={link.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                  primary={link.title}
                />
              </ListItem>
            ))}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}
            >
              <Button variant="outlined" fullWidth>
                Login
              </Button>
              <Button variant="contained" fullWidth>
                Register
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
