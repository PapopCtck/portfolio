import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const BASE_URL = "https://ppaopctck.cc";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "// PPAOP . | Portfolio",
    template: "%s | PPAOP Portfolio",
  },
  description:
    "Personal Portfolio of Papop Chattongchaikul. Software Engineer based in Bangkok, Thailand.",
  keywords: [
    "Papop Chattongchaikul",
    "PPAOP",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bangkok",
    "Thailand",
    "Portfolio",
  ],
  authors: [{ name: "Papop Chattongchaikul", url: BASE_URL }],
  creator: "Papop Chattongchaikul",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    type: "website",
    siteName: "PPAOP Portfolio",
    title: "// PPAOP . | Portfolio",
    description:
      "Personal Portfolio of Papop Chattongchaikul. Software Engineer based in Bangkok, Thailand.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "// PPAOP . | Portfolio",
    description:
      "Personal Portfolio of Papop Chattongchaikul. Software Engineer based in Bangkok, Thailand.",
    creator: "@ppaopctck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body className="bg-(--background) font-sans text-(--text) antialiased">
        {children}
      </body>
    </html>
  );
}
