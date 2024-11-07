import MailIcon from "../../assets/mail.svg";
import OpenIcon from "../../assets/open.svg";

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center p-10 lg:p-3">
      <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
      <div className="mt-3 font-bold">jnoncode</div>
      <a
        target="_blanck"
        href="https://github.com/jnoncode"
        className="flex items-center text-blue-500 text-xs font-bold mb-2"
      >
        Github <OpenIcon />
      </a>
      <div className="text-xs my-1">
        Hi, I'm a Software Developer. I like to make dev tools. I wish this blog
        boilerplate make it easy to build a blog for you.
      </div>
    </div>
  );
}
