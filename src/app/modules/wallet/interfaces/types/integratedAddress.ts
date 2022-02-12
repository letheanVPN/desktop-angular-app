import {Address} from 'src/app/modules/wallet/interfaces/types/address';

export interface IntegratedAddress {
	integrated_address: Address;
	payment_id: string;
}
