/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between relative flex-col bg-[#C7EBFD] py-10">
      <div className="flex items-center justify-center border-2 border-black relative w-[150px] h-[150px] rounded-full">
        <Image
          alt="Avatar"
          fill
          src={"/imgs/logo.jpg"}
          className="rounded-full"
        />
      </div>
      <p className="text-md font-bold text-center md:w-[700px] w-full mt-4">
        {`Disclamier: Monky is a meme coin made for entertainment purposes. We make no promises about future value, so be responsible. Crypto may be unregulated in your 
          jurisdiction.`}
      </p>
      <div className="flex items-center justify-center gap-3 my-5 z-10">
        <div className="p-2 rounded-full shadow-black shadow-sm bg-[#033FD5] border-black hover:shadow-black hover:shadow-md duration-300 cursor-pointer">
          <TbBrandTelegram color="white" />
        </div>
        <div className="p-2 rounded-full shadow-black shadow-sm bg-[#033FD5] border-black hover:shadow-black hover:shadow-md duration-300 cursor-pointer">
          <TbBrandTwitter color="white" />
        </div>
      </div>
      <div className="w-full absolute -mb-2 bottom-0">
        <img src={"/imgs/footerBanner.png"} alt="shape" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
