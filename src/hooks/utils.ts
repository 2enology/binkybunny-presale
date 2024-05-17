import {
  writeContract,
  waitForTransaction,
  prepareWriteContract,
  PrepareWriteContractConfig,
  readContract,
  ReadContractConfig,
} from "@wagmi/core";

export const write = async (config: PrepareWriteContractConfig) => {
  const { request } = await prepareWriteContract(config);
  try {
    const { hash } = await writeContract(request);
    return await waitForTransaction({ hash });
  } catch (error) {
    return null;
  }
};

export const read = async (config: ReadContractConfig) => {
  const result = await readContract(config);
  return result;
};
