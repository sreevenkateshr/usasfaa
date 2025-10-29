"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CustomLink } from "@/components/CustomLink";
import { BaseButton } from "@/components/BaseButton";

export const AboutUs: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: "4rem", md: "6rem" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: "2rem", md: "3rem" },
        fontFamily: "Merriweather, serif",
      }}
    >
      {/* Left: Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: 250, md: 350 },
          backgroundImage: `url('/about.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: 3,
        }}
      ></Box>

      {/* Right: Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.25rem",
          width: { xs: "100%", md: "55%" },
          fontFamily: "Merriweather, serif",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            color: "text.primary",
            mb: 1,
          }}
        >
          Seamless Mail Management for Aviation Professionals
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Managing FAA correspondence has never been easier! At{" "}
          <CustomLink href="/" inline>
            USASFAA.COM
          </CustomLink>
          , we provide aviation professionals with a dedicated U.S. address for official mail handling. Our virtual
          mailbox service ensures your FAA documents are received, stored securely, and forwarded anywhere in the world.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography variant="body1">🔐 Secure Document Handling — Keep your FAA compliance hassle-free.</Typography>
          <Typography variant="body1">📩 Flexible Mail Forwarding Options — Receive mail anywhere, anytime.</Typography>
          <Typography variant="body1">🚀 Instant U.S. Mailbox Setup — Get started in minutes.</Typography>
        </Box>

        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Secure your FAA-compliant virtual mailbox today and stay connected wherever you fly!
        </Typography>

        <BaseButton
          href="/about-us"
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: "50px",
            alignSelf: "flex-start",
          }}
        >
          Read More
        </BaseButton>
      </Box>
    </Container>
  );
};
