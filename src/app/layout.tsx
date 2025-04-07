import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const interSans = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nextcent",
  description: "Nextcent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${interSans.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
