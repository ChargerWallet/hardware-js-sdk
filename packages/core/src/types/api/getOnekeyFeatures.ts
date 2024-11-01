import type { CommonParams, Response } from '../params';
import type { ChargerWalletFeatures } from '../device';

export declare function getChargerWalletFeatures(
  connectId?: string,
  params?: CommonParams
): Response<ChargerWalletFeatures>;
