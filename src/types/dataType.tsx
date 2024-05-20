export type UserDatas = {
  walletAddr: string;
  ethPaidAmount: number;
  bunnyPaidAmount: number;
  ethCanClaimAmount: number;
  bunnyCanClaimAmount: number;
  ethClaimedState: boolean;
  bunnyClaimedState: boolean;
};

export type GetTokenDataContextValue = {
  isBuyState: boolean;
  ethBalanceOfContract: number;
  isClaimableForuser: boolean;
  userData: UserDatas | undefined;
  getInfo: () => void;
};
