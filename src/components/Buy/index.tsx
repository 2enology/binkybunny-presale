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
            <h1 className="xl:text-[100px] text-[50px] outlined-bold uppercase">{`Presale Info`}</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`- Total Supply: 10Billions.`}{" "}
                <br />
                {`- 50% of Supply up for Presale.`}
                <br />
							  {`- Buy with FLR or BUNNY Tokens.`}
							  <br />
							  {`- 1 FLR = 500 $BINKY.`}
							  <br />
                {`- 1 BUNNY = 100 $BINKY.`}
              </p>
            </div>
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`- Presale funds allocation.`}{" "}
                <br />
                {`- 50% added into seed Liquidity.`}
                <br />
							  {`- 20% team/development.`}
							  <br />
							  {`- 10% delegation pool: $BUNNY buyback`}
							  <br />
							   {`- 10% delegation pool: Doodle Bunny Flaredrops`}
							  <br />
                {`- 10% delegation pool: $Binky buyback`}
              </p>
            </div>
            <div className="p-7 text-center border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black font-bold text-lg">
              <p>
                {`- Additional.`}{" "}
                <br />
                {`- Presale duration - 1 week.`}
                <br />
							  {`- Claim after presale.`}
							   <br />
							  {`- Burn unsold tokens.`}
							   <br />
                {`- Handle by smart contract.`}
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};
