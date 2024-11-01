import { Address, InputScriptType, MultisigRedeemScriptType } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type BTCAddress = {
  path: string;
} & Address;

export type BTCGetAddressParams = {
  path: string | number[];
  coin?: string;
  showOnChargerWallet?: boolean;
  multisig?: MultisigRedeemScriptType;
  scriptType?: InputScriptType;
};

export declare function btcGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & BTCGetAddressParams
): Response<BTCAddress>;

export declare function btcGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: BTCGetAddressParams[] }
): Response<Array<BTCAddress>>;