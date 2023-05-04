import {Injectable} from '@angular/core';
import {ConfigIniParser} from 'config-ini-parser';
import {FileSystemService} from '@service/filesystem/file-system.service';

@Injectable({
    providedIn: 'root'
})
/**
 * @deprecated
 */
export class ServerService {
    public static get config(): { [p: string]: ConfigIniParser } {
        return this._config;
    }

    public static set config(value: { [p: string]: ConfigIniParser }) {
        this._config = value;
    }

    public sendPostRequest(url: string, data: any) {
        return fetch(ServerService.apiUrl + '/' + url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            return response.json();
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }


    public static apiUrl: string = 'http://localhost:36911';
    public static serverPublicKey;
    private static _config: { [key:string]: ConfigIniParser} = {  };

    public static settings:  any = {};
    openpgp: any;
    crypto: any;
    online: boolean = false

    constructor(public fs: FileSystemService) {
        try {

            this.loadConfig('app', 'conf/app.ini');
            this.fetchServerPublicKey().catch((err) => console.log(err));

        } catch (e) {

            this.makeDefault().catch((e) => console.log(e))
            this.loadConfig('conf/app.ini')
            this.saveConfig('app').catch((e) => console.log(e))

            console.log(e);
        }


    }


    /**
     * Get Server Public Key
     */
    async fetchServerPublicKey() {
        if(ServerService.serverPublicKey === undefined) {
            ServerService.serverPublicKey = false;
            return await fetch(ServerService.apiUrl + '/system/cert')
                .then(response => response.text())
                .then(text => {
                    return ServerService.serverPublicKey = text;
                }).catch((err) => {
                    console.log(err);
                    return ServerService.serverPublicKey = undefined;
                });
        }
    }

    syncStates(){
        // @todo loop over the states
    }

    /**
     *
     * @param {string} key
     * @param data
     */
    updateState(key: string = 'app', data?: any){

        if(ServerService.settings[key] == undefined){
            ServerService.settings[key] = {}
        }

        if(data){
            ServerService._config[key] = new ConfigIniParser()
            ServerService._config[key].parse(data)
        }

        ServerService._config[key].items().forEach((item: any[]) => {
            // if the section is not in the state yet, add it
            ServerService.settings[key][item[0]] = item[1]
        });
        ServerService._config[key].sections().forEach((section: string) => {
            ServerService._config[key].items(section).forEach((item: any[]) => {
                // if the section is not in the state yet, add it
                if(ServerService.settings[key][section] == undefined){ServerService.settings[key][section] = {};}
                ServerService.settings[key][section][item[0]] = item[1]
            });
        })

    }

    loadConfig(key: string = 'app', filename: string = '') {
        if(filename == ''){
            return
        }
        console.log(`Load Config: ${filename}`);

        try{
            this.fs.readFile(filename).then((data) => {
                this.updateState(key, data);
            }).catch(async () => {
                await this.makeDefault();
                this.fs.readFile(filename).then((data) => {
                    this.updateState(key, data);
                })
            })
        }catch (e) {
            console.log(e)
        }


    }

    async makeDefault() {
        const p = new ConfigIniParser('\r\n');
        try {

            p.setOptionInDefaultSection('api_url', 'http://localhost:36911');
            p.setOptionInDefaultSection('lang', 'en');

            p.addSection('daemon');
            p.set('daemon', 'start_on_boot', 'true');


            return await this.fs.writeFile(
                'conf/app.ini',
                p.stringify('\r\n')
            );
        } catch (e) {
            if (e === ConfigIniParser.Errors.ErrorDuplicateSectionError) {
                console.error('Duplicated section');
            }
        }
    }

    /**
     *
     * @param {string} section
     * @param {string} key
     * @param option
     * @param value
     * @param {string} defaultValue
     * @returns {any}
     */
    getConfig(key: string, option?: string, section?: string, defaultValue?: any) {

        if(section){
            if(!ServerService.settings[key][section][option] && defaultValue){
                return defaultValue
            }else{
                return ServerService.settings[key][section][option];
            }
        }
        try {
            return ServerService.settings[key][option]

        }catch (e) {
            this.fs.isFile(`conf/${key}.ini`).then((exists) => {
                if(exists) {
                    this.loadConfig(key, `conf/${key}.ini`);
                    return ServerService.settings[key][option]
                }
            })
        }

    }

    /**
     *
     * @param {string} section
     * @param {string} key
     * @param option
     * @param {string} value
     */
    setConfig(key: string, option: string, value: any, section?: string ) {
        if(section){
            ServerService._config[key].set(section, option, value);
        }else{
            ServerService._config[key].setOptionInDefaultSection(option, value)
        }

        this.saveConfig(key).then(() => console.log())
    }

    /**
     * @todo add the application key like `lthn-app-chain`, adjsut the conf path to `conf/${somthing, convert - to /}.ini`
     *
     * @returns {Promise<Object>}
     */
    saveConfig(key: string) {
        return this.fs.writeFile(`conf/${key}.ini`, ServerService._config[key].stringify());
    }

}
