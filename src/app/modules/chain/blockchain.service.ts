import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {rpcBody} from '@service/json-rpc';
import {AuthService} from '@module/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class BlockchainService {
    public chainInfo: any;
    constructor(private http: HttpClient) {
    }

    startDaemon() {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as 'json',
        };
        return this.http
            .post<any>(
                `http://127.0.0.1:36911/daemon/chain/start`,
                {"configFile":"letheand.conf"},
                options
            )
            .toPromise()
            .then((dat) => console.log(dat));
    }

    downloadDaemons() {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as 'json',
        };
        return this.http
            .post<any>(
                `http://127.0.0.1:36911/update/cli`,{},
                options
            ) .toPromise()
            .then((dat) => console.log(dat));
    }

    /**
     * Export chain to a raw format
     *
     */
    exportChain() {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as 'json'
        };
        return this.http
            .post<any>(
                `http://127.0.0.1:36911/daemon/chain/export`,
                {},
                options
            )
            .toPromise()
            .then((dat) => console.log(dat));
    }

    /**
     * Import raw chain data file
     *
     */
    importChain() {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text' as 'json'
        };
        return this.http
            .post<any>(
                `http://127.0.0.1:36911/daemon/chain/import`,
                {},
                options
            )
            .toPromise()
            .then((dat) => console.log(dat));
    }

    chainRpc(method: string, params: any = '', url: string = 'json_rpc') {
        return fetch(`http://127.0.0.1:36911/daemon/chain/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  AuthService.token.access_token
            },
            body: JSON.stringify(rpcBody(method)(params))
        })
            .then(res => res.json())
            .then(res => res.result)
    }

    async getInfo() {
        return this.chainInfo = await this.chainRpc('get_info')
    }

    async getTransactions(txsHashes: string[]) {

        return await this.chainRpc('gettransactions', {txs_hashes: txsHashes});
    }


    async getBlock(block_id: string) {

        return await this.chainRpc('getblock', {hash: block_id})
    }

    async getBlocks(start_height: number, end_height: number) {

        return await this.chainRpc('getblockheadersrange', {
            start_height: start_height,
            end_height: end_height
        })
    }
}
