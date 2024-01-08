import type { Metadata } from "next";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ceezer Marketplace",
  description: "Ceezer Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
