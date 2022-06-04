import {Injectable} from '@angular/core';
import {ConfigIniParser} from 'config-ini-parser';
import {FileSystemService} from '@service/filesystem/file-system.service';

@Injectable({
	providedIn: 'root'
})
/**
 * @deprecated
 */
export class AppConfigService {
	public static get config(): { [p: string]: ConfigIniParser } {
		return this._config;
	}

	public static set config(value: { [p: string]: ConfigIniParser }) {
		this._config = value;
	}


	public static apiUrl: string = 'http://127.0.0.1:36911';
	public static serverPublicKey;
	private static _config: { [key:string]: ConfigIniParser} = {  };

	public static settings:  any = {}; // too "drunk" rn
	openpgp: any;
	crypto: any;
	online: boolean = false

	 constructor(public fs: FileSystemService) {
		try {

			this.loadConfig('app', 'conf/app.ini');
			 this.fetchServerPublicKey().catch((err) => console.log(err));

		} catch (e) {
			console.log(e);
		}


	}


	async fetchServerPublicKey() {

		return await fetch(AppConfigService.apiUrl + '/cert')
			.then(response =>  response.text())
			.then(text => {
				return AppConfigService.serverPublicKey = text;
			});

	}

	syncStates(){
		// @todo loop over the states
	}

	/**
	 *
	 * @param {string} key
	 * @param data
	 */
	updateState(key: string, data?: any){

		if(AppConfigService.settings[key] == undefined){
			AppConfigService.settings[key] = {};
			// do this better
			if(key == 'app'){
				AppConfigService.settings[key]['api_url'] = AppConfigService.apiUrl;
			}
		}

		if(data){
			AppConfigService._config[key] = new ConfigIniParser('\r\n').parse(data)
		}

		if(!(AppConfigService._config[key] instanceof ConfigIniParser)){
			return false;
		}
		 AppConfigService._config[key].items().forEach((item) => {
			 // if the section is not in the state yet, add it
			 AppConfigService.settings[key][item[0]] = item[1]
		});

		AppConfigService._config[key].sections().forEach((section) => {
			// if the section is not in the state yet, add it
			if(AppConfigService.settings[key] == undefined){AppConfigService.settings[key] = {};}
			AppConfigService._config[key].items(section).forEach((item) => {
				// if the section is not in the state yet, add it
				if(AppConfigService.settings[key][section] == undefined){AppConfigService.settings[key][section] = {};}
				AppConfigService.settings[key][section][item[0]] = item[1]
			});
		})
console.log(AppConfigService.settings)
	}

	loadConfig(key: string, filename: string = '') {
		if(filename == ''){
			return
		}
		console.log(`Load Config: ${filename}`);


		this.fs.readFile(filename).then((data) => {
			 this.updateState(key, data);
		})

	}

	async makeDefault() {
		const p = new ConfigIniParser('\r\n');
		try {
			p.addSection('daemon');
			p.set('daemon', 'start_on_boot', 'true');

			p.setOptionInDefaultSection('api_url', 'http://127.0.0.1:36911');

			await this.fs.writeFile(
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
	getConfig(key: string, option?: string, defaultValue?: any, section?: string) {
		if(section){
			return AppConfigService._config[key].get(section, option, defaultValue);
		}

		try {
			return AppConfigService._config[key].getOptionFromDefaultSection(option)

		}catch (e) {
			this.fs.isFile(`conf/${key}.ini`).then((exists) => {
				if(exists) {
					this.loadConfig(key, `conf/${key}.ini`);
					return AppConfigService._config[key].getOptionFromDefaultSection(option)
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
		AppConfigService._config[key].set(section, option, value);
	}

	/**
	 * @todo add the application key like `lthn-app-chain`, adjsut the conf path to `conf/${somthing, convert - to /}.ini`
	 *
	 * @returns {Promise<Object>}
	 */
	saveConfig(key: string) {
		return this.fs.writeFile(`conf/${key}.ini`, AppConfigService._config[key].stringify());
	}


}
