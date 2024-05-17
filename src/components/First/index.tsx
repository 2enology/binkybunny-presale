import { Bounce, Fade } from "react-awesome-reveal";

export const First = () => {
  return (
    <section className="w-full bg-[#BCDFFB]  min-h-screen items-center justify-center flex bg-[url('/imgs/homeBackground.png')] bg-no-repeat bg-center bg-cover flex-col">
      <div
        className="w-full xl:max-w-[1200px] lg:max-w-[900px] flex p-3 relative flex-col animate__animated animate__fadeIn
       "
      >
        <div className="flex items-center justify-center gap-3 flex-col">
          <Bounce>
            <h1 className="xl:text-[150px] lg:text-[100px] text-[50px] md:text-[70px] outlined-bold">{`$BINKYBUNNY`}</h1>
            <p className="text-white outlined font-bold md:text-3xl text-xl text-center">
              {`The new generation of degen millionaires.`} <br />
              {`Binkybunnys will conquer the memecoin world.`}
            </p>
            <button
              className="text-white bg-[#033FD5] px-7 py-3 rounded-full text-3xl outlined mt-[40px]
              shadow-black shadow-md hover:shadow-lg hover:shadow-black duration-300"
            >{`Buy now`}</button>
          </Bounce>
        </div>
      </div>
    </section>
  );
};
