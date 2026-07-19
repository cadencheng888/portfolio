import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Caden Cheng — Software Developer",
  description:
    "Caden Cheng is a Computer Science & Mathematics student at UC San Diego who builds full-stack products and computer-vision systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="overflow-x-hidden bg-ink font-sans text-fg">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-9998 bg-[url('/grain.png')] bg-size-[180px_180px] bg-repeat opacity-[0.06] mix-blend-multiply"
        />
        {children}
      </body>
    </html>
  );
}
