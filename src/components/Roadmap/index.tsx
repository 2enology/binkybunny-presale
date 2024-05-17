import { Fade, JackInTheBox } from "react-awesome-reveal";

export const Roadmap = () => {
  return (
    <section
      className="w-full bg-[#C7EBFD]  min-h-screen items-center justify-center flex relative"
      id="roadmap"
    >
      <JackInTheBox>
        <div className="w-full max-w-[1200px] flex p-3 relative flex-col animate__animated animate__fadeIn items-center gap-4">
          <div className="flex items-center justify-center gap-3 flex-col">
            <h1 className="xl:text-[100px] text-[70px] outlined-bold uppercase">{`Roadmap`}</h1>
          </div>
          <div className="md:w-[450px] w-full p-4 border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black flex flex-col justify-center gap-4">
            <h1 className="text-[30px] text-center uppercase">{`phase 1 : meme`}</h1>
            <h1 className="text-[30px] text-center uppercase">{`phase 2 : hold`}</h1>
            <h1 className="text-[30px] text-center uppercase">{`phase 3 : more meme`}</h1>
          </div>
        </div>
      </JackInTheBox>
    </section>
  );
};
