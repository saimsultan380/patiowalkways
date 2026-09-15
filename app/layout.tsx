import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const siteTitle = "Empresa Galdamez Hardscaping | Outdoor Living Charlotte";
const siteDescription =
  "Transform your Charlotte property with expert patio, paver, walkway, driveway, and outdoor living services. Custom patios, hardscaping, landscaping, and outdoor living across Charlotte and surrounding communities.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Empresa Galdamez Hardscaping LLC",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-48.png?v=2", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Empresa Galdamez Hardscaping LLC",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Empresa Galdamez Hardscaping LLC logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Empresa Galdamez Hardscaping LLC",
    image: "/logo.jpg",
    logo: {
      "@type": "ImageObject",
      url: "/logo.jpg",
      width: 512,
      height: 512,
    },
    description: siteDescription,
    telephone: "704-699-3661",
    email: "Moisesgaldamez63@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      postalCode: "28202",
      addressCountry: "US",
    },
    areaServed: "Charlotte, NC",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
