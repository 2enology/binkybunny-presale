/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import WalletConnectBtn from "../WalletConnectButton";
import {
  TbBrandDiscord,
  TbBrandTelegram,
  TbBrandTwitter,
  TbMenu,
  TbMenu2,
} from "react-icons/tb";
import { menuData } from "./menuData";
import Image from "next/image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="w-full xl:flex items-center justify-center border-opacity-5 p-1 bg-transparent backdrop-blur-sm fixed z-[9999] border-b-[1px] border-[#29292921] py-2">
        <div className="xl:w-[1200px] w-auto flex items-center justify-between px-3">
          <div className="flex items-center justify-center top-[24px] p-1 gap-3 border-[2px] border-[#00000042] rounded-full">
            <img
              src="/imgs/logo.jpg"
              className="w-[50px] h-[50px] border-black rounded-full "
              alt=""
            />
          </div>
          <ul className="items-center justify-center gap-8 md:flex hidden">
            {menuData.map((data, index) => (
              <div onClick={() => router.push(data.path)} key={index}>
                <li className="text-white outlined cursor-pointer text-xl font-bold hover:text-blue-400 duration-300">
                  {data.title}
                </li>
              </div>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 rounded-full bg-[#033FD5] border-black hover:shadow-black shadow-black shadow-sm hover:shadow-md duration-300 cursor-pointer">
              <TbBrandDiscord color="white" />
            </div>
            <div className="p-2 rounded-full bg-[#033FD5] border-black hover:shadow-black hover:shadow-md shadow-black shadow-sm duration-300 cursor-pointer">
              <TbBrandTwitter color="white" />
            </div>
            <div
              className="cursor-pointer md:hidden"
              onClick={() => setShowMenu(true)}
            >
              <TbMenu2 size={30} />
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 backdrop-blur-md z-[9999]
      flex items-center justify-center gap-9 flex-col"
        >
          <div
            className="absolute top-5 right-5"
            onClick={() => setShowMenu(false)}
          >
            <MdClose size={30} />
          </div>
          {menuData.map((data, index) => (
            <div key={index}>
              <li
                onClick={() => {
                  router.push(data.path);
                  setShowMenu(false);
                }}
                className="text-white outlined cursor-pointer font-bold hover:text-blue-400 duration-300 list-none text-3xl"
              >
                {data.title}
              </li>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
