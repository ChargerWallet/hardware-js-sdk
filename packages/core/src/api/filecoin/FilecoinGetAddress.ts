import { FilecoinGetAddress as HardwareFilecoinGetAddress } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import { FilecoinAddress, FilecoinGetAddressParams } from '../../types';

export default class FilecoinGetAddress extends BaseMethod<HardwareFilecoinGetAddress[]> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: FilecoinGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'showOnChargerWallet', type: 'boolean' },
        { name: 'isTestnet', type: 'boolean' },
      ]);

      const showOnCharger Wallet  = batch.showOnCharger Wallet  ?? true;

      this.params.push({
        address_n: addressN,
        show_display: showOnChargerWallet,
        testnet: batch.isTestnet,
      });
    });
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '2.10.0',
      },
      model_touch: {
        min: '3.5.0',
      },
    };
  }

  async run() {
    const responses: FilecoinAddress[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('FilecoinGetAddress', 'FilecoinAddress', {
        ...param,
      });

      const { address } = res.message;

      const result = {
        path: serializedPath(param.address_n),
        address,
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
