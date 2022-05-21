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

	public static apiUrl: string = 'http://127.0.0.1:36911';
	public static serverPublicKey;
	public static settings: any;
	public static config: ConfigIniParser = new ConfigIniParser();
	openpgp: any;
	crypto: any;
	online: boolean = false

	constructor(public fs: FileSystemService) {

	}

	async fetchServerPublicKey() {

		return await fetch(AppConfigService.apiUrl + '/cert')
			.then(response =>  response.text())
			.then(text => {
				return AppConfigService.serverPublicKey = text;
			});

	}


	loadConfig(filename: string = '') {
		console.log(`Load Config: ${filename}`);
		if (filename === '') {
			return false;
		}
		AppConfigService.apiUrl = AppConfigService.config.get('lethean-server', 'api_url', 'http://127.0.0.1:36911');

		return this.fs.readFile(filename).then((data) => {
			AppConfigService.config.parse(data);
		})

	}

	async makeDefault() {
		const p = new ConfigIniParser('\r\n');
		try {
			p.addSection('daemon');
			p.set('daemon', 'start_on_boot', 'true');

			p.addSection('lethean-server');
			p.set('lethean-server', 'api_url', 'http://127.0.0.1:36911');

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
	 * @param {string} defaultValue
	 * @returns {any}
	 */
	getConfig(section: string, key: string, defaultValue: any = '') {
		return AppConfigService.config.get(section, key, defaultValue);
	}

	/**
	 *
	 * @param {string} section
	 * @param {string} key
	 * @param {string} value
	 */
	setConfig(section: string, key: string, value: string) {
		AppConfigService.config.set(section, key, value);
	}

	/**
	 *
	 * @returns {Promise<Object>}
	 */
	saveConfig() {
		return this.fs.writeFile('conf/app.ini', AppConfigService.config.stringify());
	}


}