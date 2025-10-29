"use client";

import React from "react";
import Link from "next/link";
import { Link as MUILink } from "@mui/material";

interface CustomLinkProps {
  href: string;
  inline?: boolean;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ href, inline, children }) => {
  return (
    <MUILink
      component={Link}
      href={href}
      underline="hover"
      color="primary"
      sx={{
        display: inline ? "inline" : "inline-block",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {children}
    </MUILink>
  );
};
