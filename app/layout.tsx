import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  "https://arshow.github.io/google-ads-analytics-dashboard/";
const socialImageUrl =
  "https://arshow.github.io/google-ads-analytics-dashboard/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Google Ads Analytics Dashboard | Arshow",
  description:
    "An internal, read-only Google Ads reporting and analytics tool operated by an independent advertiser.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    title: "Google Ads Analytics Dashboard",
    description:
      "A private reporting workflow for owned Google Ads accounts.",
    type: "website",
    images: [
      {
        url: socialImageUrl,
        width: 1536,
        height: 1024,
        alt: "Google Ads Analytics Dashboard — internal, read-only reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Analytics Dashboard",
    description:
      "A private reporting workflow for owned Google Ads accounts.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
