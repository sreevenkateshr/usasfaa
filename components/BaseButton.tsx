"use client";

import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface BaseButtonProps extends ButtonProps {
  href?: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({ href, children, sx, ...rest }) => {
  return (
    <Button
      href={href}
      sx={{
        borderRadius: "50px",
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
