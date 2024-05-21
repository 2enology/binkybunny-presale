import { getContract } from "wagmi/actions";
import { Abi } from "viem";

import { write, read } from "./utils";
import {
  BUNNYTOKEN_CONTRACT_ADDR,
  DEFAULT_GAS,
  DEFAULT_GAS_PRICE,
  TOKEN_AIRDROP_CONTRACT_ADDR,
} from "../config";
import TOKEN_AIRDROP_CONTRACT_ABI from "../../public/abis/token_airdrop.json";
import BUNNYTOKEN_CONTRACT_ABI from "../../public/abis/bunnytoken.json";
import { ethers } from "ethers";

export function useBinky() {
  const getTotalReceivedEthAmount = async () => {
    try {
      const contract: any = getContract({
        address: TOKEN_AIRDROP_CONTRACT_ADDR as `0x${string}`,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
      });
      const res = await contract.read.totalEthReceived({
        args: [],
      });
      console.log("received tokens", res);
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const isAvailableTobuy = async () => {
    try {
      const contract: any = getContract({
        address: TOKEN_AIRDROP_CONTRACT_ADDR as `0x${string}`,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
      });
      const res = await contract.read.isAvailableToBuy({
        args: [],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const isTokenClaimable = async () => {
    try {
      const contract: any = getContract({
        address: TOKEN_AIRDROP_CONTRACT_ADDR as `0x${string}`,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
      });
      const res = await contract.read.isTokenClaimable({
        args: [],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const getUserData = async (address: string) => {
    try {
      const contract: any = getContract({
        address: TOKEN_AIRDROP_CONTRACT_ADDR as `0x${string}`,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
      });
      const res = await contract.read.getStakedInfoByUser({
        args: [address],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  const payWithEth = async (amount: number) => {
    try {
      const etherAmount = ethers.utils.parseEther(amount.toString());
      const valueToSend = BigInt(etherAmount.toString());
      return await write({
        address: TOKEN_AIRDROP_CONTRACT_ADDR,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
        functionName: "payEthToClaimTokens",
        value: valueToSend,
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const approveBunnyToken = async (amount: number) => {
    try {
      const etherAmount = ethers.utils.parseEther(amount.toString());
      const valueToSend = BigInt(etherAmount.toString());
      return await write({
        address: BUNNYTOKEN_CONTRACT_ADDR,
        abi: BUNNYTOKEN_CONTRACT_ABI as Abi,
        functionName: "approve",
        args: [TOKEN_AIRDROP_CONTRACT_ADDR, valueToSend],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const payWithBunny = async (amount: number) => {
    try {
      const etherAmount = ethers.utils.parseEther(amount.toString());
      const valueToSend = BigInt(etherAmount.toString());
      return await write({
        address: TOKEN_AIRDROP_CONTRACT_ADDR,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
        functionName: "payBunnyToClaimTokens",
        args: [valueToSend],
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const claimBunnyTokens = async () => {
    try {
      return await write({
        address: TOKEN_AIRDROP_CONTRACT_ADDR,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
        functionName: "claimBunnyTokens",
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const claimEthTokens = async () => {
    try {
      return await write({
        address: TOKEN_AIRDROP_CONTRACT_ADDR,
        abi: TOKEN_AIRDROP_CONTRACT_ABI as Abi,
        functionName: "claimEthTokens",
      });
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };

  const getBunnyTokenBalance = async (address: string) => {
    try {
      const contract: any = getContract({
        address: BUNNYTOKEN_CONTRACT_ADDR as `0x${string}`,
        abi: BUNNYTOKEN_CONTRACT_ABI as Abi,
      });
      const res = await contract.read.balanceOf({
        args: [address],
      });
      return res;
    } catch (error) {
      return { isError: true, msg: error };
    }
  };

  return {
    getTotalReceivedEthAmount,
    isAvailableTobuy,
    getUserData,
    payWithEth,
    payWithBunny,
    approveBunnyToken,
    claimBunnyTokens,
    claimEthTokens,
    getBunnyTokenBalance,
    isTokenClaimable,
  };
}
