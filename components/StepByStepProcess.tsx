"use client";

import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { memo } from "react";
import Image from "next/image";

type Step = {
  image: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: "/mdi_account-outline.png",
    title: "1. Create Your Account in USASFAA.COM",
    description:
      "Start with a free, 15-minute confidential call to discuss your needs and ask questions. There is no commitment required.",
  },
  {
    image: "/material-symbols_support-agent-sharp.png",
    title: "2. Update Your Address in the FAA Portal",
    description:
      "Based on our call, we’ll personally match you with a therapist whose expertise and approach are the best fit for your goals.",
  },
  {
    image: "/material-symbols_mail-outline-rounded.png",
    title: "3. Receive & Manage Your Mails",
    description:
      "Easily book your first appointment with flexible scheduling for both online and in-person sessions. You choose what works for you.",
  },
  {
    image: "/mdi_shredder.png",
    title: "4. Store, Shred, or Forward Your Mail",
    description:
      "Work with your therapist in a safe, supportive space on a collaborative journey towards healing, growth, and well-being.",
  },
];

export const StepByStepProcess = memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fb",
        py: { xs: 6, md: 10 },
        fontFamily: "'Merriweather', serif",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          {/* LEFT SECTION */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "'Merriweather', serif",
                color: "#0d47a1",
                lineHeight: 1.4,
              }}
            >
              Experience Hassle-Free Compliance with Our Guided,
              Step-by-Step Process
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: "1rem",
                fontFamily: "'Merriweather', serif",
              }}
            >
              Swift. Digital. Reliable. Secure.
            </Typography>

            <Button
              variant="contained"
              href="#"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: "2rem",
                px: 4,
                py: 1,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Subscribe Now
            </Button>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {steps.map((step, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "10px",
                      backgroundColor: "#e3f2fd",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={26}
                      height={26}
                      style={{
                        filter:
                          "invert(33%) sepia(99%) saturate(7471%) hue-rotate(204deg) brightness(97%) contrast(101%)",
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: "#0d47a1",
                      fontSize: "1rem",
                      fontFamily: "'Merriweather', serif",
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontFamily: "'Merriweather', serif",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

StepByStepProcess.displayName = "StepByStepProcess";

export default StepByStepProcess;
