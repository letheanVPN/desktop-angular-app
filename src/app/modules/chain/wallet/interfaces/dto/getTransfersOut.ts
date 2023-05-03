import {Transfer} from '@module/chain/wallet/interfaces/types/transfer';
import {Destination} from '@module/chain/wallet/interfaces/types/destination';

export interface GetTransfersOut {
	in?: Transfer[] & Destination[]; // - boolean;
	out?: Transfer[]; // - boolean;
	pending?: Transfer[]; // - boolean;
	failed?: Transfer[]; // - boolean;
	pool?: Transfer[]; // - boolean;
}
