import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 px-6 md:px-8 lg:px-14">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
