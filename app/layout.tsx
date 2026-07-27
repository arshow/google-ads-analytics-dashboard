import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Google Ads Analytics Dashboard | Arshow",
    description:
      "An internal, read-only Google Ads reporting and analytics tool operated by an independent advertiser.",
    openGraph: {
      title: "Google Ads Analytics Dashboard",
      description:
        "A private reporting workflow for owned Google Ads accounts.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
