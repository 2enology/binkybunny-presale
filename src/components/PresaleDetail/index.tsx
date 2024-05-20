"use client";
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useContext, useEffect, useMemo, useState } from "react";
import { flareTestnet } from "viem/chains";
import { ethers } from "ethers";
import { HeartSpinner, PulseSpinner } from "react-spinners-kit";
import { useAccount, useBalance } from "wagmi";
import { useBinky } from "../../hooks/use-binky";
import { errorAlert, successAlert, warningAlert } from "../ToastGroup";
import { GetTokenDataContext } from "../../contexts/TokenDataContext";
const CountDown = dynamic(() => import("../../components/CountDown"), {
  ssr: false,
  loading: () => <></>,
});

export const PresaleDetail = () => {
  const { address } = useAccount();
  const { getBunnyTokenBalance, payWithEth, approveBunnyToken } = useBinky();
  const { getInfo, userData } = useContext(GetTokenDataContext);
  const [buyWithBunny, setBuyWithBunny] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payAmount, setPayAmount] = useState(0);
  const [balance, setBalance] = useState(0); // Initialize with a default value
  const [bunnyTokenBalance, setBunnyTokenBalance] = useState(0); // Initialize with a default value

  const result = useBalance({
    address: address,
    chainId: flareTestnet.id,
    scopeKey: "foo",
    formatUnits: "ether",
  });

  const formattedBalance = useMemo(() => {
    if (result.data) {
      try {
        const balanceInEther = ethers.utils.formatUnits(
          result.data.value.toString(),
          "ether"
        );
        return Number(balanceInEther);
      } catch (error) {
        console.error("Error converting balance:", error);
      }
    }
    return null;
  }, [result.data]);

  useEffect(() => {
    if (formattedBalance !== null) {
      setBalance(formattedBalance);
    }
  }, [formattedBalance]);

  useEffect(() => {
    const fetchData = async () => {
      if (address) {
        const result = await getBunnyTokenBalance(address);
        const resultInEther = ethers.utils.formatUnits(
          result.toString(),
          "ether"
        );
        setBunnyTokenBalance(Number(resultInEther));
        // Do something with the result here
      }
    };

    fetchData();
  }, [address]);

  const handleBuyWithFlrFunc = async () => {
    console.log("buy with eth");
    try {
      setLoading(true);

      const rept = await approveBunnyToken(payAmount);
      if (rept === null) {
        warningAlert("Rejected by User!");
        setLoading(false);
      } else {
        try {
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
      }
    } catch (error: any) {
      console.log("error", error);
      setLoading(false);
      errorAlert("Failed Paid");
    }
  };
  const handleBuyWithBunnyFunc = async () => {
    console.log("buy with bunny");

    setLoading(true);
  };
  const handleClaimWithFlrFunc = async () => {
    setLoading(true);
  };
  const handleClaimWithBunnyFunc = async () => {
    setLoading(true);
  };

  console.log("userData ==================>", userData);

  return (
    <div className="flex items-start justify-center  border-2 border-black bg-[#BCDAFC] rounded-2xl flex-col p-3 md:w-[600px] w-full shadow-md shadow-black relative overflow-hidden">
      <div className="absolute top-2 right-2 flex items-center justify-center gap-1 z-40">
        <span className="text-blue-800 uppercase"> Flr</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              setBuyWithBunny(e.target.checked);
              setPayAmount(0);
            }}
          />
          <span className="slider"></span>
        </label>
        <span className="text-[#ea47b4] uppercase"> Bunny</span>
      </div>{" "}
      <div className="absolute right-0 z-[1]">
        <img
          src="/imgs/background/back.png"
          className="w-full scale-x-[-1] scale-y-[1] transform opacity-10 -z-[1]"
          alt=""
        />
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <CountDown
          timestamp={Number(process.env.NEXT_PUBLIC_ENDPRESALE) * 1000}
        />
      </div>
      <div className="text-[15px] mt-6 text-gray-700 font-bold flex items-start justify-start">
        Amount (Max :
        <span
          className={` ${!buyWithBunny ? "text-[#033FD5]" : "text-[#ea47b4]"}`}
        >
          {buyWithBunny ? bunnyTokenBalance : balance.toFixed(2) + "C2FLR"}
        </span>
        )
      </div>
      <div
        className="w-full flex items-center justify-between border-2 border-black
           border-opacity-50 rounded-lg p-2 gap-4 z-[1]"
      >
        <input
          className="w-full outline-none text-[16px] bg-transparent h-full text-black"
          placeholder="0"
          type="number"
          onChange={(e) =>
            Number(e.target.value) > Number((balance - 0.01).toFixed(3))
              ? !buyWithBunny
                ? setPayAmount(Number((balance - 0.01).toFixed(3)))
                : setPayAmount(bunnyTokenBalance)
              : setPayAmount(Number(e.target.value))
          }
          value={payAmount !== 0 ? payAmount : ""}
        />
        <div
          className={`text-[16px] cursor-pointer  ${
            !buyWithBunny ? "text-[#033FD5]" : "text-[#ea47b4]"
          }`}
          onClick={() =>
            !buyWithBunny
              ? setPayAmount(Number((balance - 0.01).toFixed(3)))
              : setPayAmount(bunnyTokenBalance)
          }
        >
          Max
        </div>
      </div>
      {payAmount !== 0 && (
        <p
          className={`text-[16px]  duration-300 transition-all ${
            !buyWithBunny ? "text-[#033FD5]" : "text-[#ea47b4]"
          }`}
        >
          You will receive{" "}
          {(payAmount * (buyWithBunny ? 100 : 500)).toLocaleString()} Binky
        </p>
      )}
      <div
        className={`w-full flex items-center justify-between text-[12px] font-bold text-black mt-3 `}
      >
        <p>{!buyWithBunny ? "FLR Rate" : "BUNNY Rate"}</p>
        <p>{!buyWithBunny ? "1 FLR = 500 $Binky" : "1 BUNNY = 100 BINKY"}</p>
      </div>
      <div className={`w-full grid grid-cols-2 gap-3 mt-3 z-[2] `}>
        <div
          className={`text-white text-center ${
            !buyWithBunny ? "bg-[#033FD5]" : "bg-[#ea47b4]"
          } px-3 py-2 rounded-full text-xl outlined cursor-pointer
          shadow-black shadow-sm hover:shadow-md hover:shadow-black duration-300 uppercase`}
          onClick={() =>
            !buyWithBunny ? handleBuyWithFlrFunc() : handleBuyWithBunnyFunc()
          }
        >
          {!buyWithBunny ? "Buy FLR" : "Buy bunny"}
        </div>{" "}
        <div className="relative">
          <div
            className={`text-white text-center ${
              !buyWithBunny ? "bg-[#033FD5]" : "bg-[#ea47b4]"
            } px-3 py-2 rounded-full text-xl outlined cursor-pointer
          shadow-black shadow-sm hover:shadow-md hover:shadow-black duration-300 uppercase relative`}
            onClick={
              !buyWithBunny ? handleClaimWithFlrFunc : handleClaimWithBunnyFunc
            }
          >
            {!buyWithBunny ? "Claim FLR" : "Claim bunny"}
          </div>{" "}
          {!userData?.ethClaimedState && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-20 backdrop-blur-md rounded-full cursor-not-allowed" />
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <p
          className={` ${
            !buyWithBunny ? "text-[#033FD5]" : "text-[#ea47b4]"
          } font-bold md:text-2xl text-xl text-center my-5 animate-pulse`}
        >
          {`You can claim ${
            !buyWithBunny
              ? userData?.ethCanClaimAmount
              : userData?.bunnyCanClaimAmount
          } $Binky!`}{" "}
          <br />
        </p>
      </div>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md z-[9999]
      ${!loading && "hidden"}`}
      >
        <PulseSpinner color={buyWithBunny ? "#ea47b4" : "#033FD5"} size={50} />
      </div>
    </div>
  );
};
