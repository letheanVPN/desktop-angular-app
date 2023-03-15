import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {rpcBody} from '@service/json-rpc';
import {AuthService} from '@module/auth/auth.service';
import {ChainGetInfo} from "@module/chain/interfaces/props/get_info";
import {WebsocketService} from '@service/websocket.service';

@Injectable({
    providedIn: 'root'
})
export class BlockchainService {
    public chainInfo: ChainGetInfo = null;
    private _stdStream = undefined;
    constructor(private http: HttpClient, private ws: WebsocketService) {


    }

    connectProcessWebsocket(){
        this._stdStream = this.ws.connect().subscribe()
//
        this.ws.sendMessage(`daemon:letheand`)
    }

    stopDaemon() {
        if(this._stdStream === undefined){
            return true
        }
        this.ws.sendMessage('cmd:letheand:stop_daemon')
        this._stdStream.unsubscribe()
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
                `http://localhost:36911/blockchain/lethean/daemon/start`,
                {"configFile":"letheand.conf", 'logDir': 'data/log/lthn/letheand.log', "dataDir": "data/lthn"},
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
                `http://localhost:36911/system/update/cli`,{},
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
                `http://localhost:36911/blockchain/lethean/daemon/export`,
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
                `http://localhost:36911/blockchain/lethean/daemon/import`,
                {},
                options
            )
            .toPromise()
            .then((dat) => console.log(dat));
    }

    async chainRpc(params: any) {
        try {
            let request = {
                "url": params['url'],
                "req": rpcBody(params['method'])(params['params'])
            }
            const req = await fetch(`http://localhost:36911/blockchain/lethean/daemon/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': AuthService.token.access_token
                },
                body: JSON.stringify(request)
            })

            const res = await req.json()

            if(res['result']){
                return res['result']
            }
            return false
        } catch (e) {
            return false
        }
    }

    async getInfo() {
        return this.chainInfo = await this.chainRpc({ "method": 'get_info'})
    }

    async getTransactions(txsHashes: string[]) {

        return await this.chainRpc({"method": 'gettransactions', "params": {txs_hashes: txsHashes}});
    }


    async getBlock(block_id: string) {

        return await this.chainRpc({"method": "getblock", "params": {hash: block_id}})
    }

    async getBlocks(start_height: number, end_height: number) {

        return await this.chainRpc({"method": 'getblockheadersrange', "params": {
            start_height: start_height,
            end_height: end_height
        }})
    }
}
