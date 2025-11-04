"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
import ArchiveIcon from "@mui/icons-material/Archive";

export default function StepByStepProcess() {
  const steps = [
    {
      icon: <PersonIcon />,
      title: "1. Create Your Account in USASFAA.COM",
      text: "Start with a free, 15-minute confidential call to discuss your needs and ask questions. There is no commitment required.",
    },
    {
      icon: <RoomIcon />,
      title: "2. Update Your Address in the FAA Portal",
      text: "Based on our call, we’ll personally match you with a therapist whose expertise and approach are the best fit for your goals.",
    },
    {
      icon: <MailIcon />,
      title: "3. Receive & Manage Your Mails",
      text: "Easily book your first appointment with flexible scheduling for both online and in-person sessions. You choose what works for you.",
    },
    {
      icon: <ArchiveIcon />,
      title: "4. Store, Shred, or Forward Your Mail",
      text: "Work with your therapist in a safe, supportive space on a collaborative journey towards healing, growth, and well-being.",
    },
  ];

  return (
    <Box
      sx={{
        width: "1512px",
        height: "598px",
        mx: "auto",
        px: "48px",
        py: "9px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="flex-start">
        {/* LEFT SIDE */}
        <Grid item xs={12} md={5}>
          <Box sx={{ pr: { md: 6 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "26px", md: "32px" },
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              Experience Hassle-Free Compliance with Our Guided, Step-by-Step
              Process
            </Typography>

            <Typography
              sx={{ color: "#666", mb: 3, fontSize: "16px", lineHeight: 1.5 }}
            >
              Swift. Digital. Reliable. Secure.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0d6efd",
                textTransform: "none",
                color: "#fff",
                fontWeight: 500,
                px: 3,
                py: 1.2,
                borderRadius: "50px",
                fontSize: "15px",
                "&:hover": { backgroundColor: "#0b5ed7" },
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#e8f1ff",
                    color: "#0d6efd",
                    p: 1.5,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      mb: 0.5,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
