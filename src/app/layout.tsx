import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { Agentation } from "agentation";
import "./globals.css";

const openRunde = localFont({
  src: [
    { path: "../../public/fonts/open-runde/OpenRunde-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/open-runde/OpenRunde-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/open-runde/OpenRunde-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/open-runde/OpenRunde-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-open-runde",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={openRunde.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </SoundProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
