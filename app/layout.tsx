import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/global/Navigation";
import Footer from "../components/global/Footer";

export const metadata: Metadata = {
  title: "Next Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navigation />
        <div className="pt-[70px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
