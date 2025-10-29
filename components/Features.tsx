"use client";
import Grid from "@mui/material/Grid";
import { Box, Typography, Container, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";

const features = [
  { icon: <CodeIcon fontSize="large" />, title: "Developer Friendly", desc: "Built with modern tech stack." },
  { icon: <SpeedIcon fontSize="large" />, title: "Lightning Fast", desc: "Optimized for performance." },
  { icon: <DevicesIcon fontSize="large" />, title: "Fully Responsive", desc: "Looks great on all devices." },
];

export default function Features() {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight="bold" mb={6}>
          Why Choose Us
        </Typography>

        <Grid container spacing={4}>
          {features.map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{ p: 4, textAlign: "center", borderRadius: 4 }}
              >
                {f.icon}
                <Typography variant="h6" mt={2} mb={1}>
                  {f.title}
                </Typography>
                <Typography color="text.secondary">{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
