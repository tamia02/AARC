import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookkeeping Services in Cypress & Tomball, TX | AARC Smart Bookkeeping",
  description: "Professional monthly bookkeeping, catch-up cleanup, payroll, and QuickBooks setup for small businesses in Cypress, Tomball, and Northwest Houston, TX. Book a free consultation.",
  metadataBase: new URL("https://aarcsmartbookkeeping.com"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  themeColor: "#1b1c1c",
  openGraph: {
    title: "AARC Smart Bookkeeping | Cypress & Tomball, TX",
    description: "Professional monthly bookkeeping, catch-up cleanup, payroll, and QuickBooks setup for small businesses.",
    url: "/",
    siteName: "AARC Smart Bookkeeping",
    locale: "en_US",
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
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Calendly CSS link */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {/* Google Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AARC Smart Bookkeeping",
              "areaServed": ["Cypress, TX", "Tomball, TX", "Northwest Houston, TX"],
              "priceRange": "$$",
              "founder": "Raksha Shetty",
              "description": "Professional monthly bookkeeping, catch-up cleanup, payroll, and QuickBooks setup for small businesses in Cypress, Tomball, and Northwest Houston, TX.",
              "url": "https://aarcsmartbookkeeping.com"
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black-deep font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Calendly widget external script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
