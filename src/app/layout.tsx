import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathul | Protfolio",
  description: "portfolio fathul",
  icons: "/svg/blob.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
