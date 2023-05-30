import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {request} from '@service/json-rpc';
import {AddAddressBook, Address, Balance, CreateWallet, GetAddressBookOut, GetBulkPaymentsIn, GetBulkPaymentsOut, GetPaymentsIn, GetPaymentsOut, GetTransfersIn, GetTransfersOut, Height, IncomingTransfersIn, IncomingTransfersOut, IntegratedAddress, MakeIntegratedAddressIn, MakeUriIn, OpenWallet, QueryKeyIn, QueryKeyOut, SplitIntegratedAddressOut, StoreOut, SweepAllIn, SweepAllOut, Transfer, TransferIn, TransferOut, TransferSplitIn, TransferSplitOut, Uri} from '@plugin/../modules/chain/wallet/interfaces';
import {RestoreWallet} from '@module/chain/wallet/interfaces/requests/restoreWallet';


@Injectable({
	providedIn: 'root'
})
export class WalletRpcService {
	// @todo conf class is annoying me atm fix this later
	private url =  'http://localhost:36911/blockchain/lethean/wallet/json_rpc'

	constructor(private http: HttpClient) {}

	/**
	 * Send Wallet Service start POST req
	 *
	 */
	startWalletService() {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};

		const request = {walletDir:'wallets', rpcBindPort: '36963', disableRpcLogin: false};
		return this.http
			.post<any>(
				`http://localhost:36911/blockchain/lethean/wallet/start`,
				request,
				options
			);
	}

	/**
	 * Get opened wallet balance
	 *
	 * @returns {Promise<Balance>}
	 */
	getBalance(): Promise<Balance> {
		return request(this.url)('getbalance');
	}

	/**
	 * Get the address of the opened wallet
	 *
	 * @returns {Promise<Address>}
	 */
	getAddress(): Promise<Address> {
		return request(this.url)('getaddress');
	}

	/**
	 * Get chain height
	 *
	 * @returns {Promise<Height>}
	 */
	getHeight(): Promise<Height> {
		return request(this.url)('getheight');
	}

	/**
	 * Send a transaction
	 *
	 * @param {TransferIn} x
	 * @returns {Promise<TransferOut>}
	 */
	transfer(x: TransferIn): Promise<TransferOut> {
		return request(this.url)('transfer', x);
	}

	/**
	 *
	 * @param {TransferSplitIn} x
	 * @returns {Promise<TransferSplitOut>}
	 */
	transferSplit(x: TransferSplitIn): Promise<TransferSplitOut> {
		return request(this.url)('transfer_split', x);
	}

	/**
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	sweepDust() {
		return request(this.url)('sweep_dust');
	}

	/**
	 * Send all funds
	 * @param {SweepAllIn} x
	 * @returns {Promise<SweepAllOut>}
	 */
	sweepAll(x: SweepAllIn): Promise<SweepAllOut> {
		return request(this.url)('sweep_all', x);
	}

	/**
	 *
	 * @returns {Promise<StoreOut>}
	 */
	store(): Promise<StoreOut> {
		return request(this.url)('store');
	}

	/**
	 *
	 * @param {GetPaymentsIn} x
	 * @returns {Promise<GetPaymentsOut>}
	 */
	getPayments(x: GetPaymentsIn): Promise<GetPaymentsOut> {
		return request(this.url)('get_payments', x);
	}

	/**
	 *
	 * @param {GetBulkPaymentsIn} x
	 * @returns {Promise<GetBulkPaymentsOut>}
	 */
	getBulkPayments(x: GetBulkPaymentsIn): Promise<GetBulkPaymentsOut> {
		return request(this.url)('get_bulk_payments', x);
	}

	/**
	 *
	 * @param {GetTransfersIn} x
	 * @returns {Promise<GetTransfersOut>}
	 */
	getTransfers(x: GetTransfersIn): Promise<GetTransfersOut[]> {
		return request(this.url)('get_transfers', x);
	}

	/**
	 * Get transfer by Transactin ID
	 *
	 * @param {{txid: string}} x
	 * @returns {Promise<Transfer>}
	 */
	getTransferByTxid(x: { txid: string }): Promise<Transfer> {
		return request(this.url)('get_transfer_by_txid', x);
	}

	/**
	 *
	 * @param {IncomingTransfersIn} x
	 * @returns {Promise<IncomingTransfersOut>}
	 */
	incomingTransfers(
		x: IncomingTransfersIn
	): Promise<IncomingTransfersOut> {
		return request(this.url)('incoming_transfers', x);
	}

	/**
	 *
	 * @param {QueryKeyIn} x
	 * @returns {Promise<QueryKeyOut>}
	 */
	queryKey(x: QueryKeyIn): Promise<QueryKeyOut> {
		return request(this.url)('query_key', x);
	}

	/**
	 *
	 * @param {MakeIntegratedAddressIn} x
	 * @returns {Promise<IntegratedAddress>}
	 */
	makeIntegratedAddress(
		x: MakeIntegratedAddressIn
	): Promise<IntegratedAddress> {
		return request(this.url)('make_integrated_address', x);
	}

	/**
	 *
	 * @param {IntegratedAddress} x
	 * @returns {Promise<SplitIntegratedAddressOut>}
	 */
	splitIntegratedAddress(
		x: IntegratedAddress
	): Promise<SplitIntegratedAddressOut> {
		return request(this.url)('split_integrated_address', x);
	}

	/**
	 *
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	stopWallet() {
		return request(this.url)('stop_wallet');
	}

	/**
	 *
	 * @param {MakeUriIn} x
	 * @returns {Promise<Uri>}
	 */
	makeUri(x: MakeUriIn): Promise<Uri> {
		return request(this.url)('make_uri', x);
	}

	/**
	 *
	 * @param {Uri} x
	 * @returns {Promise<MakeUriIn>}
	 */
	parseUri(x: Uri): Promise<MakeUriIn> {
		return request(this.url)('parse_uri', x);
	}

	/**
	 *
	 * @param {{entries: number[]}} x
	 * @returns {Promise<GetAddressBookOut>}
	 */
	getAddressBook(x: { entries: number[] }): Promise<GetAddressBookOut> {
		return request(this.url)('get_address_book', x);
	}

	/**
	 *
	 * @param {AddAddressBook} x
	 * @returns {Promise<{index: number}>}
	 */
	addAddressBook(x: AddAddressBook): Promise<{ index: number }> {
		return request(this.url)('add_address_book', x);
	}

	/**
	 *
	 * @param {{index: number}} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	deleteAddressBook(x: { index: number }) {
		return request(this.url)('delete_address_book', x);
	}

	/**
	 *
	 * @param {OpenWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	openWallet(x: OpenWallet) {
		return request(this.url)('open_wallet', x);
	}

	/**
	 *
	 * @param {CreateWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	createWallet(x: CreateWallet) {
		return request(this.url)('create_wallet', x);
	}

	/**
	 *
	 * @param {RestoreWallet} x
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	restoreWallet(x: RestoreWallet) {
		return request(this.url)('generate_from_keys', x);
	}

	/**
	 *
	 * @param {string} method
	 * @param arg
	 * @returns {Promise<any>}
	 */
	other(method: string, arg?: any): Promise<any> {
		return request(this.url)(method, arg);
	}


}
