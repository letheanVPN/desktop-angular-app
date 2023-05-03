import {Address} from '@module/chain/wallet/interfaces/types/address';

export interface SplitIntegratedAddressOut {
	standard_address: Address;
	payment_id: string;
}
