import { TonSignedProof, TonWalletVersion, TonWorkChain } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type TonSignProofParams = {
  path: string | number[];
  appdomain: string;
  comment?: string;
  expireAt: number;
  walletVersion?: TonWalletVersion;
  walletId?: number;
  workchain?: TonWorkChain;
  isBounceable?: boolean;
  isTestnetOnly?: boolean;
};

export declare function tonSignProof(
  connectId: string,
  deviceId: string,
  params: CommonParams & TonSignProofParams
): Response<TonSignedProof>;
