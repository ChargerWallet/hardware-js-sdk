import { AlgorandAddress as HardwareAlgoGetAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type AlgoAddress = {
  path: string;
} & HardwareAlgoGetAddress;

export type AlgoGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function algoGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & AlgoGetAddressParams
): Response<AlgoAddress>;

export declare function algoGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: AlgoGetAddressParams[] }
): Response<Array<AlgoAddress>>;