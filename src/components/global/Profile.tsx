import Image from "next/image";

// icon
import OpenIcon from "../../assets/open.svg";
import ProfilePic from "../../../custom/profile_pic.png";

// you profile
import {
  profileName,
  profileGithubLink,
  profileIntroduction,
} from "@/custom/profile";

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center p-10 lg:p-3">
      {/* profile img */}
      <Image
        width={70}
        height={70}
        src={ProfilePic}
        alt="profile"
        className="rounded-full"
      />
      {/* profile name */}
      <div className="mt-3 font-bold">{profileName}</div>
      {/* github link */}
      <a
        target="_blanck"
        href={profileGithubLink}
        className="flex items-center text-primary-500 text-xs font-bold mb-2"
      >
        Github <OpenIcon />
      </a>
      {/* profile introduction */}
      <div className="text-xs my-1">{profileIntroduction}</div>
    </div>
  );
}
