import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: "400",
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Systems & Technical Delivery | David Ogbaki",
  description:
    "David Ogbaki builds and connects software systems, APIs, and AI-enabled workflows.",
  openGraph: {
    title: "Software Systems & Technical Delivery | David Ogbaki",
    description:
      "David Ogbaki builds and connects software systems, APIs, and AI-enabled workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if (sessionStorage.getItem("portfolio-intro-seen") === "true") document.documentElement.dataset.introSuppressed = "true"; } catch {}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
