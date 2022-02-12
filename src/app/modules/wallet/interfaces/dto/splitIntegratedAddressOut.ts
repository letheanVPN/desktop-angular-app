import {Address} from 'src/app/modules/wallet/interfaces/types/address';

export interface SplitIntegratedAddressOut {
	standard_address: Address;
	payment_id: string;
}
