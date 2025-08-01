import type { Metadata } from "next";
import { DM_Sans, Roboto_Mono, Zeyada } from "next/font/google";
import "./globals.css";
import { Dock } from "@ppaop/features/Dock";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const zeyada = Zeyada({
  variable: "--font-zeyada",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PPAOP | Portfolio",
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
        className={`${dmSans.variable} ${robotoMono.variable} ${zeyada.variable} ${dmSans.className} bg-background text-foreground antialiased`}
      >
        {children}
        <Dock />
      </body>
    </html>
  );
}
