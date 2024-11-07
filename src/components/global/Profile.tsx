import OpenIcon from "../../assets/open.svg";
import ProfilePic from "../../../console/profile_pic.png";

import {
  profileName,
  profileGithubLink,
  profileIntroduction,
} from "@/console/profile";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center p-10 lg:p-3">
      <Image
        width={70}
        height={70}
        src={ProfilePic}
        alt="profile"
        className="rounded-full"
      />
      <div className="mt-3 font-bold">{profileName}</div>
      <a
        target="_blanck"
        href={profileGithubLink}
        className="flex items-center text-blue-500 text-xs font-bold mb-2"
      >
        Github <OpenIcon />
      </a>
      <div className="text-xs my-1">{profileIntroduction}</div>
    </div>
  );
}
