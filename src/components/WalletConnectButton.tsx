/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { flareTestnet, xdc } from "wagmi/chains";
import "animate.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const WalletConnectBtn = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [balance, setBalance] = useState(0); // Initialize with a default value

  const result = useBalance({
    address: address,
    chainId: flareTestnet.id,
    scopeKey: "foo",
    formatUnits: "ether",
  });

  useEffect(() => {
    if (result.data && result.data.value) {
      try {
        console.log("result.data.value", result.data.value);
        const formattedBalance = Number(result.data.value).toString();
        setBalance(Number(formattedBalance) / 10 ** 18);
      } catch (error) {
        console.error("Error converting balance:", error);
      }
    }
  }, [result.data]);

  return (
    <div
      className={`flex items-center justify-center flex-col gap-[32px] animate__animated animate__fadeIn ${
        router.pathname !== "/presale" && "hidden"
      }`}
    >
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="text-white font-bold text-[13px] uppercase bg-blue-700 px-[10px] py-[13px]
                       rounded-full shadow-sm hover:shadow-md hover:shadow-black duration-300 shadow-black"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="text-white font-bold text-[13px] uppercase bg-pink-500 px-[10px] py-[13px]
                    rounded-full shadow-sm hover:shadow-md hover:shadow-black duration-300 shadow-black"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex items-center">
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-white font-bold text-[13px] uppercase bg-blue-700 w-[140px] py-[3px]
                      rounded-full shadow-sm hover:shadow-md hover:shadow-black duration-300 shadow-black flex items-center justify-center gap-2"
                    >
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={"/imgs/flareNetwork.png"}
                        style={{ width: 25, height: 25 }}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-[1px] justify-end items-end">
                        <span className="text-[16px]">
                          {account.displayName.slice(0, 4) +
                            "..." +
                            account.displayName.slice(-4)}
                        </span>
                        <span className="text-white">
                          {balance.toFixed(2)} C2FLR
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default WalletConnectBtn;
