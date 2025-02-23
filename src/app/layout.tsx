import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "AnnCer",
    description: settings.data.meta_description || "Some text about ceramics",
    openGraph: {
      images: [settings.data.og_image.url || "Background image"],
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
