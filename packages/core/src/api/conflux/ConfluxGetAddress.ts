import { ConfluxGetAddress as HardwareConfluxGetAddress } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import { ConfluxAddress, ConfluxGetAddressParams } from '../../types/api/confluxGetAddress';

export default class ConfluxGetAddress extends BaseMethod<HardwareConfluxGetAddress[]> {
  hasBundle = false;

  init() {
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: ConfluxGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'chainId', type: 'number' },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);

      const showOnCharger Wallet  = batch.showOnCharger Wallet  ?? true;

      this.params.push({
        address_n: addressN,
        chain_id: batch.chainId ?? 1029,
        show_display: showOnChargerWallet,
      });
    });
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '2.4.0',
      },
    };
  }

  async run() {
    const responses: ConfluxAddress[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('ConfluxGetAddress', 'ConfluxAddress', {
        ...param,
      });

      const path = serializedPath(param.address_n);
      responses.push({
        path,
        ...res.message,
      });

      this.postPreviousAddressMessage({
        path,
        address: res.message.address,
      });
    }

    validateResult(responses, ['address'], {
      expectedLength: this.params.length,
    });

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
