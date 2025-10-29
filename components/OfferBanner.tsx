"use client";

import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { memo } from "react";

const OfferBanner = memo(() => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        fontFamily: "'Merriweather', serif",
      }}
    >
      {/* Headings */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontFamily: "'Merriweather', serif",
        }}
      >
        Don't Miss Out - Get your Annual Subscription for only $69!
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 5, maxWidth: "700px", mx: "auto" }}
      >
        Subscribe before April 2025 for just $99 per year-absolutely no hidden fees. With one simple payment, you'll achieve full FAA compliance, secure your digital mailbox, and enjoy effortless mail management. Don't miss out on the ultimate value!
      </Typography>

      {/* Offer Card */}
      <Card
        elevation={3}
        sx={{
          maxWidth: 380,
          mx: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          textAlign: "left",
          position: "relative",
        }}
      >
        {/* Blue corner */}
        <Box
          sx={{
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderBottom: "80px solid #1976d2",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />

        <CardContent sx={{ p: 4, position: "relative" }}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            Annual Subscription plan
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontFamily: "'Merriweather', serif",
            }}
          >
            $69!
          </Typography>

          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Includes
          </Typography>

          {/* List - Single column layout */}
          <Box sx={{ mb: 3 }}>
            {[
              "Secure digital document storage",
              "FAA compliance tracking", 
              "Real-time mail notifications",
              "24/7 customer support",
              "Worldwide document forwarding",
            ].map((item) => (
              <Box
                key={item}
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1,
                  mb: 1.5
                }}
              >
                <CheckCircle fontSize="small" color="success" />
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: "50px",
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Subscribe Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
});

OfferBanner.displayName = "OfferBanner";
export default OfferBanner;