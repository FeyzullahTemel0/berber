import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARA Barber Studio | İyi kesim, iyi hissettirir.",
  description:
    "KARA Barber Studio — iyi kesim, iyi hissettirir. Randevu demosunu keşfet.",
};

export const viewport: Viewport = {
  themeColor: "#111a16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
