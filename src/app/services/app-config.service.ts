import {Injectable} from '@angular/core';
import {ConfigIniParser} from 'config-ini-parser';
import {FileSystemService} from '@service/filesystem/file-system.service';

@Injectable({
	providedIn: 'root',
})
/**
 * @deprecated
 */
export class AppConfigService {

	public static apiUrl: string = 'http://127.0.0.1:36911';
	public static serverPublicKey;
	public static settings: any;
	public static config: ConfigIniParser = new ConfigIniParser();
	openpgp: any;
	crypto: any;

	constructor(private fs: FileSystemService) {
		if(!AppConfigService.serverPublicKey){
			this.fetchServerPublicKey()
		}
	}

	fetchServerPublicKey(){
		fetch(AppConfigService.apiUrl + '/cert')
			.then(response => response.text())
			.then(text => {
				AppConfigService.serverPublicKey = text;
				//console.log(AppConfigService.serverPublicKey);
			});
	}


	loadConfig(filename: string = '') {
		console.log(`Load Config: ${filename}`)
		if( filename === ''){ return false }
		AppConfigService.apiUrl = AppConfigService.config.get('lethean-server', 'api_url', 'http://127.0.0.1:36911')

			return this.fs.readFile(filename).then((data) => {
				AppConfigService.config.parse(data)
			})

	}

	/**
	 *
	 * @param {string} section
	 * @param {string} key
	 * @param {string} defaultValue
	 * @returns {any}
	 */
	getConfig(section: string, key: string, defaultValue: any = '') {
		return AppConfigService.config.get(section, key, defaultValue)
	}

	/**
	 *
	 * @param {string} section
	 * @param {string} key
	 * @param {string} value
	 */
	setConfig(section: string, key: string, value: string) {
		AppConfigService.config.set(section, key, value)
	}

	/**
	 *
	 * @returns {Promise<Object>}
	 */
	saveConfig() {
		return this.fs.writeFile('conf/app.ini', AppConfigService.config.stringify())
	}




}
