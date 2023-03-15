import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {rpcBody} from '@service/json-rpc';
import {AuthService} from '@module/auth/auth.service';
import {ChainGetInfo} from "@module/chain/interfaces/props/get_info";
import {WebsocketService} from '@service/websocket.service';

@Injectable({
    providedIn: 'root'
})
export class XMRBlockchainService {
    public chainInfo: ChainGetInfo = null;
    public config: any = {}
    private _stdStream;
    constructor(private http: HttpClient, private ws: WebsocketService) {

        this._stdStream = this.ws.connect().subscribe()
//
        this.ws.sendMessage(`daemon:monerod`)

        this.checkInstallConfig().then((res) => this.config = res)
    }

    stopDaemon() {
        this.ws.sendMessage('cmd:monerod:stop_daemon')
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
                `http://localhost:36911/chain/xmr/start`,
                {"configFile":"monerod.conf", "ticker": "XMR"},
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
                `http://localhost:36911/chain/xmr/download`,{},
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
                `http://localhost:36911/chain/xmr/export`,
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
                `http://localhost:36911/chain/xmr/import`,
                {},
                options
            )
            .toPromise()
            .then((dat) => console.log(dat));
    }

    chainRpc(params: any ) {
        let request = {
            "url": params['url'] ,
            "req": rpcBody(params['method'])(params['params'])
        }
        return fetch(`http://localhost:36911/chain/xmr/json_rpc`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  AuthService.token.access_token
            },
            body: JSON.stringify(request)
        })

            .then(res => res.json())
            .then(res => res.result)
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

    async checkInstallConfig() {
        try{
            const containers = await fetch('http://localhost:36911/config/object/get', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({group:"apps", object:"monerod"})
            })
            return await containers.json()
        }catch (e) {
            return false
        }

    }

    async setInstallConfig(config: any) {
        const containers = await fetch('http://localhost:36911/config/object/set', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({group:"apps", object:"monerod", data:config})
        })
        return await containers.json()
    }

}
