import Link from "next/link";
import MenuIcon from "../../assets/menu.svg";

export default function Navigation() {
  return (
    <div className="z-[100] fixed w-full h-[65px] flex justify-between items-center px-6 bg-white shadow-sm">
      <Link href="/" className="text-xl">
        blogTitle
      </Link>
      <div className="inline-block lg:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
