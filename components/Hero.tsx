"use client";

import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import heroImage from "../public/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "85vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="FAA Mailbox Hero Background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: { xs: "center", md: "left" },
          maxWidth: "900px",
          px: { xs: 3, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            lineHeight: 1.3,
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 400,
            fontFamily: "'Merriweather', serif",
          }}
        >
          Your U.S.-based FAA Mailbox. <br />
          Securely store or forward your documents worldwide.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ddd",
            mb: 4,
            maxWidth: "700px",
            mx: { xs: "auto", md: 0 },
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontFamily: "'Merriweather', serif",
          }}
        >
          Effective January 2025, FAA regulations require a U.S. mailing address for all communications.
          Subscribe to USASFAA for a secure, compliant mailbox that receives, stores, and forwards your
          documents worldwide.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.4,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#0d47a1",
              },
            }}
          >
            Secure Your FAA Mailbox
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.4,
              textTransform: "none",
              color: "#e0e0e0",
              borderColor: "#bdbdbd",
              fontWeight: 500,
              fontSize: "1rem",
              "&:hover": {
                borderColor: "#9e9e9e",
                color: "#9e9e9e",
              },
            }}
          >
            Log in to Dashboard
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
