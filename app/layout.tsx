import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Assessment – KREA.ai Landing Page Replica",
  description:
    "Frontend skills assessment: pixel-perfect replication of KREA.ai's former landing page as an internship task.",
  authors: [
    {
      name: "Emmanuel Odewale",
      url: "https://github.com/Odewale-Emmanuel/ui-assessment",
    },
  ],
  openGraph: {
    title: "UI Assessment – KREA.ai Landing Page Replica",
    description:
      "Frontend skills assessment: pixel-perfect replication of KREA.ai's former landing page as an internship task.",
    url: "https://github.com/Odewale-Emmanuel/ui-assessment",
    siteName: "UI Assessment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fonts.geistMono.className, fonts.geistSans.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
