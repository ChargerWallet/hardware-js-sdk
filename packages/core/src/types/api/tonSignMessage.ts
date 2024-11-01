import { TonSignedMessage, TonWalletVersion, TonWorkChain } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type TonSignMessageParams = {
  path: string | number[];
  destination: string;
  jettonMasterAddress?: string;
  jettonWalletAddress?: string;
  tonAmount: number;
  jettonAmount?: number;
  fwdFee?: number;
  comment?: string;
  isRawData?: boolean;
  mode?: number;
  seqno: number;
  expireAt: number;
  walletVersion?: TonWalletVersion;
  walletId?: number;
  workchain?: TonWorkChain;
  isBounceable?: boolean;
  isTestnetOnly?: boolean;
  extDestination?: string[];
  extTonAmount?: number[];
  extPayload?: string[];
};

export type TonSignedMessageResponse = {
  skip_validate: boolean;
} & TonSignedMessage;

export declare function tonSignMessage(
  connectId: string,
  deviceId: string,
  params: CommonParams & TonSignMessageParams
): Response<TonSignedMessageResponse>;
