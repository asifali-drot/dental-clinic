import type { Metadata, Viewport } from "next";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import RevealObserver from "@/components/RevealObserver";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Dental Parlor and Implant Clinic | Dentist in G-13 Islamabad",
    template: "%s | Dental Parlor and Implant Clinic",
  },
  description:
    "Dental Parlor and Implant Clinic is a modern dental clinic in G-13, Islamabad offering general dentistry, cosmetic care, and dental implants. Rated 4.9/5 from 611 reviews. Call 0332 888 0891 to book.",
  keywords: [
    "dentist in G-13 Islamabad",
    "dental clinic in G-13 Islamabad",
    "dental implants in Islamabad",
    "dentist near G-13",
    "dental clinic Islamabad",
  ],
  openGraph: {
    title: "Dental Parlor and Implant Clinic | Dentist in G-13 Islamabad",
    description:
      "Modern dental care and implant solutions in G-13, Islamabad. Rated 4.9/5 from 611 reviews.",
    url: business.url,
    siteName: business.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Parlor and Implant Clinic | Dentist in G-13 Islamabad",
    description:
      "Modern dental care and implant solutions in G-13, Islamabad. Rated 4.9/5 from 611 reviews.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#123b5d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  image: `${business.url}/og-image.jpg`,
  url: business.url,
  telephone: business.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Street 169, G-13/3 G 13/3 G-13",
    addressLocality: "Islamabad",
    postalCode: "44000",
    addressCountry: "PK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  sameAs: [business.mapUrl],
  areaServed: {
    "@type": "City",
    name: "Islamabad",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-offwhite font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealObserver />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
