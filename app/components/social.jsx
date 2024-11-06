import React from "react";
import Link from "next/link";
import Image from "next/image";
const social = () => {
  return (
    <div>
      <div className="social_media mt-[20px] flex">
        <Link
          href={"facebook.com/muhammed"}
          target="_blank"
          className="mt-[10px] mr-1 rounded-sm text-[black] text-md p-[5px]">
          <Image
            src={"/social-facebook.png"}
            alt="facebook"
            width={20}
            height={20}
            className="opacity-[.5] hover:opacity-[1] transition"
          />
        </Link>

        <Link
          href={"github.com/muhammed222lab"}
          target="_blank"
          className="mt-[10px] mr-1 rounded-sm text-[black] text-sm p-[5px]">
          <Image
            src={"/social-github.png"}
            alt="github"
            width={20}
            height={20}
            className="opacity-[.5] hover:opacity-[1] transition"
          />
        </Link>

        <Link
          href={"#"}
          className="mt-[10px] mr-1 rounded-sm text-[black] text-sm p-[5px]">
          <Image
            src={"/social-linkedin.png"}
            alt="linkedin"
            width={20}
            height={20}
            className="opacity-[.5] hover:opacity-[1] transition"
          />
        </Link>
        <Link
          href={"#"}
          className="mt-[10px] mr-1 rounded-sm text-[black] text-sm p-[5px]">
          <Image
            src={"/social-twitter.png"}
            alt="linkedin"
            width={20}
            height={20}
            className="opacity-[.5] hover:opacity-[1] transition"
          />
        </Link>
      </div>
    </div>
  );
};

export default social;
