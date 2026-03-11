import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Agentation } from "agentation";
import "./globals.css";

export const metadata: Metadata = {
  title: "shincn — Design System",
  description: "A portable design system built on shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TooltipProvider>{children}</TooltipProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
