import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "// PPAOP . | Portfolio",
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
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body className="bg-(--background) font-sans text-(--text) antialiased">
        {children}
      </body>
    </html>
  );
}
