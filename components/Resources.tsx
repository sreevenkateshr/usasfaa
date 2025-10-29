"use client";
import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Resources: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        fontFamily: "'Merriweather', serif",
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 1.5,
          color: "#1a1a1a",
        }}
      >
        Resources
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(0,0,0,0.6)",
          mb: 5,
          lineHeight: 1.6,
          maxWidth: "800px",
        }}
      >
        Subscribe before April 2025 for just $99 per year—absolutely no hidden
        fees. With one simple payment, you’ll achieve full FAA compliance,
        secure your digital mailbox.
      </Typography>

      {/* Two-column layout */}
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
              <Link
                href={resource.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  "&:hover": { color: "#1565c0" },
                }}
              >
                {resource.id} - {resource.title}
                <OpenInNewIcon
                  sx={{
                    fontSize: 16,
                    ml: 0.5,
                    color: "rgba(0,0,0,0.7)",
                  }}
                />
              </Link>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "rgba(0,0,0,0.6)",
                fontSize: "0.8rem",
                lineHeight: 1.6,
              }}
            >
              As often as you receive mail we inform you immediately via
              notification. We forward your mail as soon as we receive your
              notification to do so via your chosen carrier.
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

type TResource = { id: string; title: string; pdfUrl: string };

const resources: TResource[] = [
  { id: "AC3-1", title: "Agent for Service", pdfUrl: "/pdfs/AC_3-1.pdf" },
  { id: "AC61-65J", title: "Pilot and Flight & Ground Instructors", pdfUrl: "/pdfs/AC_61-65J.pdf" },
  {
    id: "AC61-135A",
    title: "Pilot Certification - Bilateral Agreement FAA and Transport Canada",
    pdfUrl: "/pdfs/AC_61-135A_CHG_1.pdf",
  },
  { id: "AC65-23B", title: "Repairmen - Experimental Aircraft Builders", pdfUrl: "/pdfs/AC_65-23B.pdf" },
  { id: "AC65-30B", title: "A&P", pdfUrl: "/pdfs/AC_65-30B_CHG_1.pdf" },
  { id: "AC65-32A", title: "Repairmen - Light-Sport", pdfUrl: "/pdfs/AC_65-32A.pdf" },
  { id: "AC65-34A", title: "Dispatchers", pdfUrl: "/pdfs/AC_65-34A_CHG_1.pdf" },
];

export default Resources;
