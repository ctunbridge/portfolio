import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { ClientLayout } from "@/components/layout/client-layout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Chris Tunbridge | Product Designer & Design Engineer",
    template: "%s | Chris Tunbridge",
  },
  description:
    "Portfolio of Chris Tunbridge, a senior product designer and design engineer building high-impact digital products, design systems, and AI-assisted experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Chris Tunbridge Portfolio",
    title: "Chris Tunbridge | Product Designer & Design Engineer",
    description:
      "Senior product designer and design engineer specialising in digital products, design systems, and AI-assisted experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Tunbridge | Product Designer & Design Engineer",
    description:
      "Senior product designer and design engineer specialising in digital products, design systems, and AI-assisted experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
