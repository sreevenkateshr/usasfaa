"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/Header";  // ✅ default import (no curly braces)
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
