import type { Metadata } from "next";
import "./globals.css";

// components
import Navigation from "../src/components/global/Navigation";
import Footer from "../src/components/global/Footer";

// your blog title
import { blogTitle } from "@/custom/navigation";
export const metadata: Metadata = {
  title: blogTitle,
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
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
