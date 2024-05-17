/* eslint-disable @next/next/no-img-element */
import { Slide } from "react-awesome-reveal";
export const About = () => {
  return (
    <section className="w-full bg-[#DAF3FF]  min-h-screen items-center justify-center flex flex-col relative">
      <Slide>
        <div className="w-full max-w-[1200px] flex p-3 relative flex-col animate__animated animate__fadeIn items-center gap-4">
          <div className="flex items-center justify-center gap-3 flex-col">
            <h1 className="xl:text-[100px] text-[50px] outlined-bold uppercase">{`About us`}</h1>
            <p className="text-black font-bold text-3xl text-center">
              {`Monky the king of the apes!`}
            </p>
          </div>
          <div className="md:w-[450px] w-[350px] p-4 border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black">
            <p>
              {`Monky is a simian who seeks to become a crypto millionaire alongside his friends in this bull run!`}{" "}
              <br />
              {`Monky's mission is to conquer all meme coins and establish his dominion as the king of cryptocurrencies.`}
              <br />
              {`He won't stop until he achieves it!`}
            </p>
          </div>
        </div>
      </Slide>
      <div className="w-full absolute -mb-2 bottom-0">
        <img src={"/imgs/about-shape.svg"} alt="shape" className="w-full" />
      </div>
    </section>
  );
};
