"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
      <Toaster position="bottom-center" closeButton  richColors />
    </ThemeProvider>
  );
}
