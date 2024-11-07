import { blogTitle } from "@/custom/navigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="z-[100] fixed w-full h-[65px] flex items-center px-6 bg-white shadow-sm">
      <Link href="/" className="text-xl">
        {blogTitle}
      </Link>
    </div>
  );
}
