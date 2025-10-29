"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
        Frequently asked questions
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(0,0,0,0.6)",
          mb: 4,
          lineHeight: 1.6,
          maxWidth: "800px",
        }}
      >
        Subscribe before April 2025 for just $99 per year—absolutely no hidden
        fees. With one simple payment, you’ll achieve full FAA compliance,
        secure your digital mailbox.
      </Typography>

      {/* FAQ Accordions */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            mb: 1.5,
            borderRadius: "8px",
            backgroundColor: expanded === index ? "#f5f5f5" : "#fafafa",
            boxShadow: "none",
            border: "1px solid #e0e0e0",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <CloseIcon sx={{ fontSize: 20, color: "#333" }} />
              ) : (
                <AddIcon sx={{ fontSize: 20, color: "#333" }} />
              )
            }
            sx={{
              fontWeight: 600,
              color: "#000",
              fontSize: "0.95rem",
              "& .MuiAccordionSummary-content": {
                my: 0.5,
              },
            }}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              pl: 1,
              pr: 3,
              pb: 2,
            }}
          >
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const faqs = [
  {
    question: "How often will you send me my mail?",
    answer:
      "As often as you receive mail we inform you immediately via notification. We forward your mail as soon as we receive your notification to do so via your chosen carrier.",
  },
  {
    question: "Can I choose to have packages forwarded via USPS?",
    answer: "Yes.",
  },
  {
    question: "Can I get a free trial?",
    answer: "",
  },
  {
    question: "Do you have a monthly plan?",
    answer: "",
  },
  {
    question: "Is there a setup fee?",
    answer: "",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "",
  },
  {
    question: "Where is my mail processed?",
    answer: "",
  },
];

export default FAQSection;
