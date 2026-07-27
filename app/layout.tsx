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
    "A restricted-access, read-only Google Ads analytics and reporting platform for client-authorized accounts.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    title: "Google Ads Analytics Dashboard",
    description:
      "Account-specific reporting for client-authorized Google Ads accounts.",
    type: "website",
    images: [
      {
        url: socialImageUrl,
        width: 1536,
        height: 1024,
        alt: "Google Ads Analytics Dashboard — restricted, read-only client reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Analytics Dashboard",
    description:
      "Account-specific reporting for client-authorized Google Ads accounts.",
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
