import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

const SocialMedia = () => {
  return (
    <div className="flex flex-1 list-none items-center justify-center gap-8 sm:justify-end">
      <Link href="https://www.instagram.com/gabipaesecia_/" target="_blank">
        <AiOutlineInstagram className="font-semiboldtransition text-[34px] text-black duration-300 hover:border-pink-200 hover:text-pink-700" />
      </Link>
      <Link href="https://www.facebook.com/GabiPaeseCia" target="_blank">
        <CiFacebook className="text-[34px] font-semibold text-black transition duration-300 hover:border-blue-200 hover:text-blue-700" />
      </Link>
    </div>
  );
};

export default SocialMedia;
