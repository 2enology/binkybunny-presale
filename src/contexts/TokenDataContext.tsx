import { ReactNode, createContext, useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { useBinky } from "../hooks/use-binky";
import { GetTokenDataContextValue, UserDatas } from "../types/dataType";
import { ethers } from "ethers";
import { flareTestnet } from "viem/chains";
import { TOKEN_AIRDROP_CONTRACT_ADDR } from "../config";
export const GetTokenDataContext = createContext<GetTokenDataContextValue>({
  isBuyState: true,
  ethBalanceOfContract: 0,
  isClaimableForuser: false,
  userData: undefined,
  getInfo: () => {},
});

interface GetTokenDataProviderProps {
  children: ReactNode;
}

const GetTokenDataProvider: React.FC<GetTokenDataProviderProps> = ({
  children,
}) => {
  const { address } = useAccount();
  const {
    getTotalReceivedEthAmount,
    isAvailableTobuy,
    getUserData,
    isTokenClaimable,
  } = useBinky();

  const [totalReceivedEth, setTotalReceivedEth] = useState<string | number>(0);
  const [userData, setUserData] = useState<UserDatas>({
    walletAddr: "",
    ethPaidAmount: 0,
    bunnyPaidAmount: 0,
    ethCanClaimAmount: 0,
    bunnyCanClaimAmount: 0,
    ethClaimedState: false,
    bunnyClaimedState: false,
  });
  const [isClaimableForuser, setIsClaimableForUser] = useState(false);
  const [isBuyState, setIsBuyState] = useState(true);
  const [ethBalanceOfContract, setEthBalanceOfContract] = useState(0);

  const result = useBalance({
    address: TOKEN_AIRDROP_CONTRACT_ADDR,
    chainId: flareTestnet.id,
    scopeKey: "foo",
    formatUnits: "ether",
  });

  const getInfo = async () => {
    const state = await getTotalReceivedEthAmount();
    const formattedBalance = Number(state).toString();
    setTotalReceivedEth(formattedBalance);
    const buyState = await isAvailableTobuy();
    console.log("buyState ===>", buyState);
    setIsBuyState(buyState);
    if (address) {
      const data = await getUserData(address);
      console.log("data ===>", data);

      setUserData({
        walletAddr: data.walletAddress,
        ethPaidAmount: Number(data.ethPaidAmount) / 10 ** 18,
        bunnyPaidAmount: Number(data.bunnyPaidAmount) / 10 ** 18,
        ethCanClaimAmount: Number(data.ethCanClaimAmount) / 10 ** 18,
        bunnyCanClaimAmount: Number(data.bunnyCanClaimAmount) / 10 ** 18,
        ethClaimedState: data.ethClaimedState,
        bunnyClaimedState: data.bunnyClaimedState,
      });
      setIsClaimableForUser(
        data.ethCanClaimAmount !== 0 && data.ethClaimedState !== true
      );
    }
    getEthBalanceOfCtr();
  };

  const getEthBalanceOfCtr = () => {
    if (result.data) {
      try {
        const formattedBalance = Number(result.data.value).toString();
        setEthBalanceOfContract(Number(formattedBalance) / 10 ** 18);
      } catch (error) {
        console.error("Error converting balance:", error);
      }
    }
  };

  useEffect(() => {
    if (address) {
      getInfo();
      const interval = setInterval(() => {
        getInfo();
      }, 6000); // 1 minute
      return () => clearInterval(interval);
    } else {
      setIsClaimableForUser(false);
      setUserData({
        walletAddr: "",
        ethPaidAmount: 0,
        bunnyPaidAmount: 0,
        ethCanClaimAmount: 0,
        bunnyCanClaimAmount: 0,
        ethClaimedState: false,
        bunnyClaimedState: false,
      });
    }
    // eslint-disable-next-line
  }, [address]);

  return (
    <GetTokenDataContext.Provider
      value={{
        isBuyState,
        ethBalanceOfContract,
        isClaimableForuser,
        userData,
        getInfo,
      }}
    >
      {children}
    </GetTokenDataContext.Provider>
  );
};

export default GetTokenDataProvider;
