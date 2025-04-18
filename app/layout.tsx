import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PPAOP | Portfolio",
  description: "Personal Portfolio of Papop Chattongchaikul. Software Engineer based in Bangkok, Thailand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
