import type { Metadata } from "next";
import Article from "./page";

export const metadata: Metadata = {
  title: "Next Blog",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Article />
    </div>
  );
}
