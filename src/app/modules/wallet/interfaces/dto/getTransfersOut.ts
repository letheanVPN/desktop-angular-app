import {Transfer} from 'src/app/modules/wallet/interfaces/types/transfer';
import {Destination} from 'src/app/modules/wallet/interfaces/types/destination';

export interface GetTransfersOut {
	in?: Transfer[] & Destination[]; // - boolean;
	out?: Transfer[]; // - boolean;
	pending?: Transfer[]; // - boolean;
	failed?: Transfer[]; // - boolean;
	pool?: Transfer[]; // - boolean;
}
