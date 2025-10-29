"use client";

import { Container, Typography, Box, Grid } from "@mui/material";
import { memo } from "react";
import Image from "next/image";

const whoReasons = [
  {
    image: "/connecting_airports.svg",
    description: "International aviation businesses (e.g., charters, maintenance).",
  },
  {
    image: "/airplanemode_active.svg",
    description: "FAA-certified pilots with a foreign/permanent overseas address.",
  },
  {
    image: "/flight_takeoff.svg",
    description: "Aircraft owners and operators based outside of the United States.",
  },
  {
    image: "/school.svg",
    description: "FAA-certified flight schools and training organizations.",
  },
  {
    image: "/emoji_people.svg",
    description: "Anyone applying for FAA certifications etc...",
  },
];

export const WhoNeeds = memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fb",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 400,
            fontFamily: "'Merriweather', serif",
            color: "black", // Deep blue
          }}
        >
          Who Needs an FAA Registered U.S. Agent for Service?
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: { xs: 5, md: 8 },
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.7,
            fontFamily: "'Merriweather', serif",
          }}
        >
          FAA regulation (14 CFR) 3.301-3.303 requires all FAA-certified pilots to maintain a U.S. mailing address for
          communications. Get compliant by subscribing to USASFAA MailBox.
        </Typography>

        {/* Icon Row (5 in same line on desktop) */}
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {whoReasons.map((reason, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={2.4} // ensures 5 fit in one row
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                textAlign: "center",
              }}
            >
              {/* Blue rounded icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#e3f2fd",
                  display: "grid",
                  placeItems: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                  "& img": {
                    filter:
                      "invert(33%) sepia(99%) saturate(7471%) hue-rotate(204deg) brightness(97%) contrast(101%)",
                  },
                }}
              >
                <Image
                  src={reason.image}
                  alt={reason.description}
                  width={40}
                  height={40}
                />
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "200px",
                  color: "#0d47a1",
                  lineHeight: 1.6,
                  fontFamily: "'Merriweather', serif",
                }}
              >
                {reason.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

WhoNeeds.displayName = "WhoNeeds";

export default WhoNeeds;
