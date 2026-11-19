import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const TITLE = "caden cheng — software engineer";
const DESCRIPTION =
  "software engineer building full stack and ai-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cadenfcheng.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "caden cheng",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
