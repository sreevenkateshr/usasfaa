"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../public/logo.webp";

const Header: React.FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [appBarHeight, setAppBarHeight] = useState(0);
  const appBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setSideBarOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateAppBarHeight = () => {
      if (appBarRef.current) {
        setAppBarHeight(appBarRef.current.offsetHeight);
      }
    };
    updateAppBarHeight();
    window.addEventListener("resize", updateAppBarHeight);
    return () => window.removeEventListener("resize", updateAppBarHeight);
  }, []);

  return (
    <>
      <AppBar
        ref={appBarRef}
        elevation={0}
        sx={{ background: "white", color: "black", height: "fit-content" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={logo} alt="Logo" width={80} height={80} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1rem", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
            <Link href="/blogs" style={{ textDecoration: "none", color: "inherit" }}>
              Blogs
            </Link>
            <Link href="/privacy-policy" style={{ textDecoration: "none", color: "inherit" }}>
              Privacy Policy
            </Link>
            <Link href="/faqs" style={{ textDecoration: "none", color: "inherit" }}>
              FAQs
            </Link>
            <Link href="/contact-us" style={{ textDecoration: "none", color: "inherit" }}>
              Contact Us
            </Link>

<Button
  variant="contained"
  color="primary"
  href="/authentications/sign-up"
  sx={{
    borderRadius: "50px", // ✅ rounded like a pill
    textTransform: "none", // optional: remove uppercase
    px: 3,
    py: 1,
  }}
>
  Register Now
</Button>

<Button
  variant="outlined"
  href="/authentications/sign-in"
  sx={{
    borderRadius: "50px", // ✅ rounded like a pill
    textTransform: "none",
    px: 3,
    py: 1,
    borderColor: "#9e9e9e", // ✅ ash/gray border
    color: "#9e9e9e", // ✅ ash/gray text
    "&:hover": {
      borderColor: "#757575", // slightly darker on hover
      color: "#757575",
    },
  }}
>
  Sign In
</Button>

          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleSideBar}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar sx={{ minHeight: `${appBarHeight}px !important` }} />

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="right" open={sideBarOpen} onClose={toggleSideBar}>
        <List sx={{ width: 250 }}>
          {[
            { text: "Home", href: "/" },
            { text: "Blogs", href: "/blogs" },
            { text: "Privacy Policy", href: "/privacy-policy" },
            { text: "FAQs", href: "/faqs" },
            { text: "Contact Us", href: "/contact-us" },
          ].map((item) => (
            <ListItem button key={item.text} onClick={toggleSideBar}>
              <Link href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
