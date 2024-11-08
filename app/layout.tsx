import type { Metadata } from "next";
import "./globals.css";

// components
import Navigation from "../src/components/global/Navigation";
import Footer from "../src/components/global/Footer";

// your blog title
import { blogTitle } from "@/custom/navigation";
import ThemeProvider from "@/src/components/global/ThemeProvider";

export const metadata: Metadata = {
  title: blogTitle,
  icons: {
    icon: "/icon.png",
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
        <ThemeProvider>
          <Navigation />
          <div className="pt-[70px] dark:bg-contrast-900 dark:text-contrast-300">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
