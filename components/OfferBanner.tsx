'use client'

import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function SubscriptionCard() {
  const leftColumn = [
    "Secure digital document storage",
    "Real-time mail notifications",
    "Worldwide document forwarding",
  ];
  const rightColumn = [
    "FAA compliance tracking",
    "24/7 customer support",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: 600,
        mx: "auto",
        my: 8,
        p: 4,
        position: "relative",
        overflow: "hidden",
        fontFamily: '"Inter", Arial, sans-serif',
      }}
    >
      {/* --- Top-right corner lines --- */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "90px",
          height: "90px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#0d6efd",
            height: "26px",
            width: "80px",
            top: "7px",
            right: "-35px",
            transform: "rotate(45deg)",
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#0d6efd",
            height: "4px",
            width: "120px",
            top: "42px",
            right: "-40px",
            transform: "rotate(45deg)",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* --- Card Content --- */}
      <Typography variant="h6" fontWeight={600} mb={1}>
        Annual Subscription plan
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        mb={3}
        sx={{ color: "#000" }}
      >
        $69!
      </Typography>

      <Typography
        variant="subtitle1"
        fontWeight={600}
        mb={2}
        sx={{ color: "#000" }}
      >
        Includes
      </Typography>

      {/* --- Features 2 Columns --- */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <List sx={{ p: 0 }}>
            {leftColumn.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 0.5,
                  px: 0,
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                <CheckIcon sx={{ color: "#2ecc71", fontSize: 20, mr: 1 }} />
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List sx={{ p: 0 }}>
            {rightColumn.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 0.5,
                  px: 0,
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                <CheckIcon sx={{ color: "#2ecc71", fontSize: 20, mr: 1 }} />
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#0d6efd",
          borderRadius: "50px",
          py: 1.5,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "16px",
          "&:hover": { backgroundColor: "#0b5ed7" },
        }}
      >
        Subscribe Now
      </Button>
    </Box>
  );
}
