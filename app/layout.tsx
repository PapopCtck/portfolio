import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "// PPAOP ✦ | Portfolio",
  description:
    "Personal Portfolio of Papop Chattongchaikul. Software Engineer based in Bangkok, Thailand.",
  openGraph: {
    url: "https://ppaopctck.cc",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-inter bg-(--background) text-(--text) antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
