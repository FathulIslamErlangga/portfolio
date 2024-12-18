import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/LandingPage/section/Navbar";
import Footer from "@/components/LandingPage/section/Footer";
import { GlobalProvider } from "@/components/contexts/GlobalProvider";

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
      <body>
        <GlobalProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
