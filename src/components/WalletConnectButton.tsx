/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { flareTestnet, xdc } from "wagmi/chains";
import "animate.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const WalletConnectBtn = () => {
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
    <div className="flex items-center justify-center flex-col gap-[32px] animate__animated animate__fadeIn">
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
                      className="text-white font-bold text-[13px] uppercase bg-gradient-to-r from-pink-500 to-pink-500 px-[10px] py-[13px]
                       rounded-md"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex items-center gap-[20px]">
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-black font-semibold text-[14px] uppercase bg-transparent px-[10px] py-[3px] gap-2
                      rounded-lg border-[1.5px] border-pink-500 border-opacity-50 flex items-center justify-between"
                    >
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={"/imgs/flare.png"}
                        style={{ width: 25, height: 25 }}
                      />
                      <div className="flex flex-col gap-[1px] justify-end items-end">
                        <span className="text-[12px]">
                          {account.displayName.slice(0, 4) +
                            "..." +
                            account.displayName.slice(-4)}
                        </span>
                        <span className="text-[#E61A59] font-bold">
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
