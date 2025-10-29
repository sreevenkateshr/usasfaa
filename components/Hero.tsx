"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import Image from "next/image";
import heroImage from "../public/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", md: "90vh" },
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

      {/* Dark overlay */}
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
          textAlign: "left",
          maxWidth: "900px",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="400"
          sx={{
            mb: 3,
            lineHeight: 1.2,
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: "Merriweather, serif",
          }}
        >
          Your U.S.-based FAA Mailbox. Securely store or forward your documents worldwide.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ddd",
            mb: 4,
            maxWidth: "700px",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontFamily: "Merriweather, serif",
          }}
        >
          Effective January 2025, FAA regulations require a U.S. mailing address for all communications.
          Subscribe to USASFAA for a secure, compliant mailbox that receives, stores, and forwards your
          documents worldwide.
        </Typography>

        {/* Buttons */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Secure Your FAA Mailbox
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              fontWeight: 500,
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
