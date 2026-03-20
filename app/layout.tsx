import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build on Seeker | The Developer Hub for Solana Mobile",
  description:
    "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker: live ecosystem stats, SDKs, grants, and resources.",
  metadataBase: new URL("https://buildonseeker.com"),
  applicationName: "Build on Seeker",
  authors: [{ name: "Saicharan", url: "https://github.com/saicharanpogul" }],
  generator: "Next.js",
  keywords: ["Solana", "Seeker", "Solana Mobile", "Saga", "dApp Store", "Web3 Mobile", "Crypto"],
  creator: "SuperteamIN",
  publisher: "SuperteamIN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Build on Seeker | The Developer Hub for Solana Mobile",
    description:
      "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker.",
    url: "https://buildonseeker.com",
    siteName: "Build on Seeker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build on Seeker | The Developer Hub for Solana Mobile",
    description:
      "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker.",
  },
  alternates: {
    canonical: "https://buildonseeker.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Build on Seeker",
  url: "https://buildonseeker.com",
  description:
    "The unofficial developer hub for the Solana Seeker ecosystem. Live ecosystem stats, SDKs, grants, and developer resources.",
  author: {
    "@type": "Person",
    name: "Saicharan",
    url: "https://github.com/saicharanpogul",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
