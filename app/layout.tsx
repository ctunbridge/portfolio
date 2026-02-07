import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { ClientLayout } from "@/components/layout/client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Portfolio',
    title: 'Portfolio',
    description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
