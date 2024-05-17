/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TokenomicsChart } from "./Chart";
import { Bounce } from "react-awesome-reveal";

export const Tokenomics = () => {
  return (
    <section
      className="w-full bg-[#DAF3FF]  min-h-screen items-center justify-center flex relative"
      id="tokenomics"
    >
      <div className="w-full absolute -mb-2 top-0 rotate-180">
        <img src={"/imgs/about-shape.svg"} alt="shape" className="w-full" />
      </div>
      <Bounce>
        <div className="w-full xl:max-w-[1200px] flex p-3 relative justify-between animate__animated animate__fadeIn items-center gap-10 xl:flex-row flex-col">
          <div className="flex items-start justify-start my-5 flex-col gap-4 mt-[70px]">
            <h1 className="xl:text-[100px] text-[50px] outlined-bold uppercase">{`Tokenomics`}</h1>
            <div className="md:w-[550px] w-[350px] rounded-full bg-[#CBEFFF] h-[20px]">
              <div className="w-[70%] bg-[#E16DDF] rounded-full h-full" />
            </div>
            <h1 className="md:w-[550px] text-black text-2xl font-bold">{`70% LP`}</h1>
            <div className="md:w-[550px] w-[350px] rounded-full bg-[#CBEFFF] h-[20px]">
              <div className="w-[10%] bg-[#FED41D] rounded-full h-full" />
            </div>
            <h1 className="md:w-[550px] w-[350px] text-black text-2xl font-bold">{`10% Cex listing`}</h1>
            <div className="md:w-[550px] w-[350px] rounded-full bg-[#CBEFFF] h-[20px]">
              <div className="w-[10%] bg-[#FA7C29] rounded-full h-full" />
            </div>
            <h1 className="md:w-[550px] w-[350px] text-black text-2xl font-bold">{`10% marketing`}</h1>
            <div className="md:w-[550px] w-[350px] rounded-full bg-[#CBEFFF] h-[20px]">
              <div className="w-[10%] bg-[#033FD5] rounded-full h-full" />
            </div>
            <h1 className="text-black text-2xl font-bold">{`10% Airdrop`}</h1>
          </div>
          <div className=" md:w-[500px] w-full h-full p-10 relative bg-[#d9fdff4f] rounded-full border-2 border-white">
            <TokenomicsChart />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
              <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] border-2 border-[#474b4b4f] rounded-full">
                <Image
                  src={"/imgs/logo.jpg"}
                  alt="Avatar"
                  className="rounded-full"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </section>
  );
};
