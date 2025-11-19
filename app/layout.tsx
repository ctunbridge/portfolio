import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'App Template',
    template: '%s | App Template',
  },
  description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'App Template',
    title: 'App Template',
    description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Template',
    description: 'A modern Next.js application template with shadcn/ui, Tailwind CSS, and a comprehensive design system.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
