/* eslint-disable @next/next/no-img-element */
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
export const About = () => {
  return (
    <section className="w-full bg-[#DAF3FF]  min-h-screen items-center justify-center flex flex-col relative">
      <Slide className="z-[99]">
        <div className="w-full max-w-[1200px] flex p-3 relative flex-col animate__animated animate__fadeIn items-center gap-4">
          <div className="flex items-center justify-center gap-3 flex-col">
            <h1 className="xl:text-[100px] text-[50px] outlined-bold uppercase">{`About us`}</h1>
            <p className="text-black font-bold text-3xl text-center">
              {`Binky the innocent of the bunnies!`}
            </p>
          </div>
          <div className="md:w-[450px] w-[350px] p-4 border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black">
            <p>
              {`Binky is an innocent rabbit who dreams of becoming a crypto millionaire alongside her friends in this bull run!`}{" "}
              <br />
              {`Binky's mission is to hop through all the meme coins and establish her dominion as the queen of cryptocurrencies.`}
              <br />
              {`She won't stop until she achieves it!`}
            </p>
          </div>
        </div>
      </Slide>
      <div className="w-full absolute -mb-2 bottom-0">
        <img src={"/imgs/about-shape.svg"} alt="shape" className="w-full" />
      </div>
      <Fade>
        <div className="absolute left-0 xl:top-0 lg:top-[140px] hidden lg:block">
          <img
            src="/imgs/aboutleft.png"
            className="xl:w-[650px] w-[450px] transform  -z-[99]"
          />
        </div>
        <div className="absolute right-0 xl:top-0 lg:top-[140px] hidden lg:block">
          <img
            src="/imgs/aboutleft.png"
            className="xl:w-[650px] w-[450px] scale-x-[-1] scale-y-[1] transform  -z-[99]"
          />
        </div>
      </Fade>
    </section>
  );
};
