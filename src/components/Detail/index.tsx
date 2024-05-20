/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { flareTestnet } from "viem/chains";
import { ethers } from "ethers";
import { ClassicSpinner } from "react-spinners-kit";
import { TbWorld, TbBrandTwitter, TbBrandTelegram } from "react-icons/tb";
import { errorAlert, successAlert, warningAlert } from "../ToastGroup";
import Countdown from "../CountDown";
import { useBinky } from "../../hooks/use-binky";
import { GetTokenDataContext } from "../../contexts/TokenDataContext";
import {
  PRESALE_ENDED_TIME,
  SITE_LINK,
  TELEGRAM_LINK,
  TOTAL_ETH_AMOUNT,
  TWITTER_LINK,
} from "../../config";

const Detail = () => {
  const { isBuyState, userData, getInfo, ethBalanceOfContract } =
    useContext(GetTokenDataContext);
  const { payWithEth, claimToken } = useBinky();
  const { address } = useAccount();
  const [balance, setBalance] = useState(0); // Initialize with a default value
  const [payAmount, setPayAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  // const showClaimNoteState =
  //   userData &&
  //   address &&
  //   userData[0]?.canClaimAmount !== undefined &&
  //   userData[0]?.canClaimAmount !== 0;
  // const result = useBalance({
  //   address: address,
  //   chainId: flareTestnet.id,
  //   scopeKey: "foo",
  //   formatUnits: "ether",
  // });

  // useEffect(() => {
  //   if (result.data) {
  //     try {
  //       const formattedBalance = ethers.utils.formatUnits(
  //         result.data.value.toString(),
  //         "ether"
  //       );
  //       setBalance(Number(formattedBalance));
  //     } catch (error) {
  //       console.error("Error converting balance:", error);
  //     }
  //   }
  // }, [result.data]);

  const handleBuyFunc = async () => {
    try {
      setLoading(true);
      const rept = await payWithEth(payAmount);
      if (rept === null) {
        warningAlert("Rejected by User!");
      } else {
        setLoading(false);
        successAlert("Paid Successfully.");
      }
    } catch (error: any) {
      if (error.message.includes("User rejected the request.")) {
        setLoading(false);
        errorAlert("User rejected the request.");
      } else {
        console.log("error", error);
        setLoading(false);
        errorAlert("Failed Paid");
      }
    } finally {
      setLoading(false);
      getInfo();
    }
  };

  const handleClaimFunc = async () => {
    try {
      setLoading(true);
      const rept = await claimToken();
      if (rept === null) {
        warningAlert("Rejected by User!");
      } else {
        setLoading(false);
        successAlert("Claimed Successfully.");
      }
    } catch (error: any) {
      if (error.message.includes("User rejected the request.")) {
        setLoading(false);
        errorAlert("User rejected the request.");
      } else {
        console.log("error", error);
        setLoading(false);
        errorAlert("Failed Claimed");
      }
    } finally {
      setLoading(false);
      getInfo();
    }
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-[30px]">
        <div className="lg:w-[370px] md:w-1/2 w-full flex flex-col gap-4 p-2 relative">
          <div className="w-full bg-white min-h-[20vh] rounded-lg p-4 flex flex-col gap-2 bg-opacity-30 relative">
            <img
              src="/imgs/bg2.jpg"
              className="absolute bottom-0 right-0 top-0 left-0 -z-50 rounded-lg h-full w-full object-cover opacity-10"
              alt=""
            />
            <div>
              <Countdown timestamp={PRESALE_ENDED_TIME * 1000} />
            </div>
            <div className="relative w-full bg-gray-200 rounded-full mt-5">
              <div
                className="absolute top-0 h-3 rounded-full shim-green"
                style={{
                  width:
                    (Number(ethBalanceOfContract) * 100) / TOTAL_ETH_AMOUNT,
                }}
              />
            </div>
            <div className="w-full flex items-center justify-between text-[12px] font-bold text-gray-700">
              <p>{ethBalanceOfContract.toFixed(2)} C2FLR</p>
              <p>{TOTAL_ETH_AMOUNT} C2FLR</p>
            </div>

            <div className="text-[15px] mt-6 text-gray-700 font-bold">
              Amount (Max:
              <span className="text-[#E61A59]">
                {balance.toFixed(2) + "C2FLR"}
              </span>
              )
            </div>
            <div
              className="w-full flex items-center justify-between border-[1px] border-black
           border-opacity-10 rounded-lg p-2 gap-4"
            >
              <input
                className="w-full outline-none text-[16px] bg-transparent h-full text-gray-700"
                placeholder="0"
                type="number"
                onChange={(e) =>
                  Number(e.target.value) > Number((balance - 0.01).toFixed(3))
                    ? setPayAmount(Number((balance - 0.01).toFixed(3)))
                    : setPayAmount(Number(e.target.value))
                }
                value={payAmount !== 0 ? payAmount : ""}
              />
              <div
                className="text-[#E61A59] text-[16px] cursor-pointer"
                onClick={() =>
                  setPayAmount(Number((balance - 0.01).toFixed(3)))
                }
              >
                Max
              </div>
            </div>
            {payAmount !== 0 && (
              <p className="text-[14px] text-blue-500 duration-300 transition-all">
                You will receive {(payAmount * 100).toLocaleString()} TRWH
              </p>
            )}
            <div className="w-full flex items-center justify-between mt-3 gap-5">
              {address && isBuyState && (
                <button
                  className={`rounded-lg text-[13.1px] w-1/2 ${
                    payAmount === 0
                      ? "bg-[#d5d3d368] text-[#00000040] border-[1px] border-[#f9519138] cursor-not-allowed rounded-lg py-2"
                      : "bg-[#f95191ec] text-white py-[10px] cursor-pointer rounded-lg"
                  }  px-2 py-1 transition-all duration-300`}
                  onClick={() => payAmount !== 0 && handleBuyFunc()}
                >
                  Buy with C2FLR
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[calc(100%-370px)] relative md:w-1/2 w-full bg-white bg-opacity-30 min-h-[10vh] rounded-lg md:p-10 p-2">
          <img
            alt=""
            src="/imgs/bg1.jpg"
            className="absolute bottom-0 right-0 top-0 left-0 -z-50 rounded-lg h-full w-full object-cover opacity-10"
          />
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-2xl uppercase font-bold text-gray-700">
              About
            </h1>
            <a href={SITE_LINK} target="_blank" rel="referrer">
              <TbWorld color="#f95191ec" size={22} />
            </a>
            <a href={TWITTER_LINK} target="_blank" rel="referrer">
              <TbBrandTwitter color="#f95191ec" size={22} />
            </a>
            <a href={TELEGRAM_LINK} target="_blank" rel="referrer">
              <TbBrandTelegram color="#f95191ec" size={22} />
            </a>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-[15px]">
              {`ZOINK Token - a new era in the memecoin universe, taking its place on the Flare Network. Unlike any other, $ZOINK strides boldly into the future with a clear mission: to be the ultimate no-use-case memecoin.`}
            </p>
            <p className="text-[15px]">🔓 Revoked: Freeze, Mint, Metadata</p>
            <div>
              <p className="text-[15px]">
                {`🥇Top Tier SOL-OG Influencers & Callers`}
                <br /> {`🔶CA Renounced`} <br />
                {`🔶SOL Trending`} <br />
                {`📈 BuyBack & Burn🔥`}
                <br /> {`💯100x potential`}
                <br /> {`❌No Private Sale`}
                <br />
                {`❌No Team Token`} <br />
                {` ✅Highly experienced Team`}
                <br /> {`✅NO Whitelist ✅No buy/sell Tax`}
                <br /> {`✅Liquidity Lock`} <br />
                {`✅Token just for presale`}
              </p>
            </div>
          </div>
          <h1 className="text-2xl uppercase mt-5 font-bold text-gray-700">
            $ZOINK Token Roadmap
          </h1>
          <p className="text-[15px] mt-4">
            <strong className="text-[16px] text-gray-800">
              {` ✅ Phase 1: Launch Preparation Finalize Tokenomics:`}
              <br />
            </strong>
            {`Complete the
              distribution plan for the total supply of 100 Billion $ZOINK tokens.
              Set Up Presale on dApp: Announce and prepare for the presale event,
              exclusively on our Twitter account.`}
          </p>
          <p className="text-[15px] mt-2">
            <strong className="text-[16px] text-gray-800">
              {`✅ Phase 2: Presale Kickoff Presale Duration:`}
              <br />
            </strong>
            {`Launch a 48-hour presale event with 50% of the total supply allocated.
              Presale Terms: Exchange Rate: 1 FLR = 500 $ZOINK.
              Community Engagement: Increase awareness and participation through targeted
              social media campaigns.`}
          </p>
          <p className="text-[15px] mt-2">
            <strong className="text-[16px] text-gray-800">
              {`✅ Phase 3: Post-Presale Actions
              Token Distribution: `}
              <br />
            </strong>
            {`Distribute $ZOINK tokens to presale participants within 24 hours after the presale ends.
              Liquidity Addition: Add and lock liquidity on a leading DEX to ensure smooth trading experiences.
              Burn Unsold Tokens: Burn any unsold tokens from the presale to maintain value for early adopters.`}
          </p>
          <p className="text-[15px] mt-2">
            <strong className="text-[16px] text-gray-800">
              {`✅ Phase 4: Airdrop & Community Building
              Airdrop Snapshot: `}
              <br />
            </strong>
            {`Take a snapshot 1 hour before the presale goes live to identify eligible Fomo Mofos NFT holders.
              Airdrop Distribution: Begin distributing 1 Million $ZOINK per NFT, disbursed in 100k monthly installments over 10 months.
              Engage & Expand: Launch community engagement initiatives and giveaways to strengthen and grow the $ZOINK community.`}
          </p>
        </div>
      </div>
      {loading && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-[#1e1e1ee1] backdrop-blur-2xl duration-300
      transition-all"
        >
          <ClassicSpinner color="#E61A59" />
        </div>
      )}
    </>
  );
};

export default Detail;
