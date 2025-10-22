import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "MOTRAC Global Resources Limited - Human Capital Development & Business Consulting",
    template: "%s | MOTRAC Global Resources",
  },
  description:
    "MOTRAC Global Resources Limited is a leading Nigerian consulting firm specializing in Human Capital Development, ICT Solutions, Business Development, Policy Consulting, and Media Services. Established in 2003, we transform individuals into effective entrepreneurs and drive organizational growth.",
  keywords: [
    "Human Capital Development",
    "Business Consulting Nigeria",
    "ICT Solutions",
    "Policy Development Consulting",
    "Business Development Services",
    "Corporate Training Nigeria",
    "Capacity Building",
    "Enterprise Content Management",
    "Web Development Nigeria",
    "Media Production Services",
    "Economic Policy Consulting",
    "Governance Consulting",
    "Skills Acquisition Programs",
    "MOTRAC Nigeria",
    "Abuja Consulting Firm",
  ],
  authors: [{ name: "MOTRAC Global Resources Limited" }],
  creator: "MOTRAC Global Resources Limited",
  publisher: "MOTRAC Global Resources Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.motracresources.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "MOTRAC Global Resources Limited - Human Capital Development & Business Consulting",
    description:
      "Leading Nigerian consulting firm specializing in Human Capital Development, ICT Solutions, Business Development, and Policy Consulting. Transforming individuals and organizations since 2003.",
    url: "https://www.motracresources.com",
    siteName: "MOTRAC Global Resources Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "MOTRAC Global Resources Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MOTRAC Global Resources Limited - Human Capital Development & Business Consulting",
    description:
      "Leading Nigerian consulting firm specializing in Human Capital Development, ICT Solutions, Business Development, and Policy Consulting.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F23B11" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
