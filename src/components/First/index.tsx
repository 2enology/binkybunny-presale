/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Bounce, Fade } from "react-awesome-reveal";

export const First = () => {
  return (
    <section className="w-full bg-[#BCDFFB]  min-h-screen items-center justify-center flex bg-[url('/imgs/homeBackground.png')] bg-no-repeat bg-center bg-cover flex-col relative">
      <div
        className="w-full xl:max-w-[1200px] lg:max-w-[900px] flex p-3 relative flex-col animate__animated animate__fadeIn
        z-[999]"
      >
        <div className="flex items-center justify-center gap-3 flex-col">
          <Bounce>
            <h1 className="xl:text-[140px] lg:text-[95px] text-[45px] md:text-[65px] outlined-bold">{`BINKY BUNNY`}</h1>
            <p className="text-white outlined font-bold md:text-3xl text-xl text-center">
              {`The new generation of memecoin by Doodle Bunny.`} <br />
              {`$BINKY will conquer the memecoin world.`}
            </p>
            <Link href={"/presale"}>
              <div
                className="text-white bg-[#033FD5] px-7 py-3 rounded-full text-3xl outlined mt-[40px]
              shadow-black shadow-md hover:shadow-lg hover:shadow-black duration-300"
              >{`Presale Now`}</div>
            </Link>
          </Bounce>
        </div>
      </div>
      <Fade className="absolute right-0">
        <img
          src="/imgs/background/back.png"
          className="w-[650px] scale-x-[-1] scale-y-[1] transform -z-[99]"
          alt=""
        />
      </Fade>
    </section>
  );
};
