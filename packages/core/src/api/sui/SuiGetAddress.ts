import { SuiGetAddress as HardwareSuiGetAddress } from '@chargerwallet/hd-transport';

import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import { SuiAddress, SuiGetAddressParams } from '../../types';
import { supportBatchPublicKey } from '../../utils/deviceFeaturesUtils';
import { publicKeyToAddress } from './normalize';

export default class SuiGetAddress extends BaseMethod<HardwareSuiGetAddress[]> {
  hasBundle = false;

  shouldConfirm = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    this.shouldConfirm = this.hasBundle
      ? this.payload.bundle.some((i: any) => !!i.showOnChargerWallet)
      : false;

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: SuiGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);

      const showOnCharger Wallet  = batch.showOnCharger Wallet  ?? true;

      this.params.push({
        address_n: addressN,
        show_display: showOnChargerWallet,
      });
    });
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '3.0.0',
      },
      model_touch: {
        min: '4.3.0',
      },
    };
  }

  async run() {
    if (this.hasBundle && supportBatchPublicKey(this.device?.features) && !this.shouldConfirm) {
      const res = await this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
        paths: this.params,
        ecdsa_curve_name: 'ed25519',
      });
      const result = res.message.public_keys.map((publicKey: string, index: number) => ({
        path: serializedPath((this.params as unknown as any[])[index].address_n),
        publicKey,
        address: publicKeyToAddress(publicKey),
      }));

      validateResult(result, ['address'], {
        expectedLength: this.params.length,
      });

      return Promise.resolve(result);
    }

    const responses: SuiAddress[] = [];
    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('SuiGetAddress', 'SuiAddress', {
        ...param,
      });

      const { address } = res.message;

      const result = {
        path: serializedPath(param.address_n),
        address: address?.toLowerCase(),
      };
      responses.push(result);
      this.postPreviousAddressMessage(result);
    }

    validateResult(responses, ['address'], {
      expectedLength: this.params.length,
    });

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
