import type { Metadata } from "next";
import "./globals.css";

// components
import Navigation from "../src/components/global/Navigation";

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
      <body className="overflow-x-hidden">
        <Navigation />
        <div className="pt-[70px]">{children}</div>
      </body>
    </html>
  );
}
