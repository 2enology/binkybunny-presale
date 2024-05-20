/* eslint-disable @next/next/no-img-element */
import { Fade, JackInTheBox } from "react-awesome-reveal";

export const Roadmap = () => {
  return (
    <section
      className="w-full bg-[#C7EBFD]  min-h-screen items-center justify-center flex relative"
      id="roadmap"
    >
      <JackInTheBox className="z-[99]">
        <div className="w-full max-w-[1200px] flex p-3 relative flex-col animate__animated animate__fadeIn items-center gap-4 z-[99]">
          <div className="flex items-center justify-center gap-3 flex-col">
            <h1 className="xl:text-[100px] text-[70px] outlined-bold uppercase">{`Roadmap`}</h1>
          </div>
          <div className="md:w-[450px] w-full p-4 border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black flex flex-col justify-center gap-4">
            <h1 className="text-[20px] text-center uppercase">{`phase 1 : Plan, Website, Announcement`}</h1>
            <h1 className="text-[20px] text-center uppercase">{`phase 2 : Presale, Claim, Launch`}</h1>
            <h1 className="text-[20px] text-center uppercase">{`phase 3 : Marketing, Staking`}</h1>
          </div>
        </div>
      </JackInTheBox>
      <Fade>
        <div className="absolute left-0 lg:top-[140px] hidden lg:block">
          <img
            src="/imgs/roadmap.png"
            className="xl:w-[650px] w-[450px] transform -z-[99]"
            alt=""
          />
        </div>
        <div className="absolute right-0 lg:top-[140px] hidden lg:block">
          <img
            src="/imgs/roadmap.png"
            className="xl:w-[650px] w-[450px] scale-x-[-1] scale-y-[1] transform  -z-[99]"
            alt=""
          />
        </div>
      </Fade>
    </section>
  );
};
