import { Zoom } from "react-awesome-reveal";

export const Buy = () => {
  return (
    <section
      className="w-full bg-[#C1EAFF]  min-h-screen items-center justify-center flex flex-col"
      id="buy"
    >
      <Zoom>
        <div className="w-full max-w-[1200px] flex p-3 relative flex-col animate__animated animate__fadeIn items-center gap-4">
          <div className="flex items-center justify-center my-5 flex-col">
            <h1 className="xl:text-[100px] text-[50px] outlined-bold uppercase">{`How to buy`}</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`Monky is a simian who seeks to become a crypto millionaire alongside his friends in this bull run!`}{" "}
                <br />
                {`Monky's mission is to conquer all meme coins and establish his dominion as the king of cryptocurrencies.`}
                <br />
                {`He won't stop until he achieves it!`}
              </p>
            </div>
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`Monky is a simian who seeks to become a crypto millionaire alongside his friends in this bull run!`}{" "}
                <br />
                {`Monky's mission is to conquer all meme coins and establish his dominion as the king of cryptocurrencies.`}
                <br />
                {`He won't stop until he achieves it!`}
              </p>
            </div>
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`Monky is a simian who seeks to become a crypto millionaire alongside his friends in this bull run!`}{" "}
                <br />
                {`Monky's mission is to conquer all meme coins and establish his dominion as the king of cryptocurrencies.`}
                <br />
                {`He won't stop until he achieves it!`}
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};
