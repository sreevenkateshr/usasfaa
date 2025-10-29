"use client";
import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2"; // ✅ Correct for MUI v6
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976D2",
        color: "#fff",
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        {/* Left Section - Logo + Address */}
        <Grid xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              component="img"
              src="/White.png"
              alt="USASFAA Logo"
              sx={{ width: 90, mb: 1 }}
            />
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              333 West Brown Deer Road, <br />
              Unit G, Milwaukee, WI, <br />
              53217
            </Typography>
          </Box>
        </Grid>

        {/* Middle Section - Navigation Links */}
        <Grid xs={6} md={2}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="none">Home</Link>
            <Link href="#" color="inherit" underline="none">About Us</Link>
            <Link href="#" color="inherit" underline="none">FAQ</Link>
          </Box>
        </Grid>

        <Grid xs={6} md={2}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="none">Blogs</Link>
            <Link href="#" color="inherit" underline="none">Contact Us</Link>
            <Link href="#" color="inherit" underline="none">Privacy Policy</Link>
          </Box>
        </Grid>

        {/* Right Section - Social Media */}
        <Grid xs={12} md={3}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, mb: 1, textAlign: { xs: "left", md: "right" } }}
          >
            Follow us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              gap: 1.5,
            }}
          >
            <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "#e3f2fd" } }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "#e3f2fd" } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff", "&:hover": { color: "#e3f2fd" } }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          my: 3,
          opacity: 0.6,
        }}
      />

      {/* Bottom Text */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.8rem",
          textAlign: "left",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <Link href="#" color="inherit" underline="none" sx={{ fontWeight: 300 }}>
          USASFAA.COM
        </Link>{" "}
        powered by Matrix
      </Typography>
    </Box>
  );
};

export default Footer;
