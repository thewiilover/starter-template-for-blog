import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../src/components/global/Navigation";
import Footer from "../src/components/global/Footer";
import { blogTitle } from "@/console/navigation";

export const metadata: Metadata = {
  title: blogTitle,
  icons: {
    icon: "/logo-icon.png",
  },
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
