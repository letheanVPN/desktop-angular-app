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

	public static settings: any;
	public static config: ConfigIniParser = new ConfigIniParser();
	openpgp: any;
	crypto: any;

	constructor(private fs: FileSystemService) {

	}


	loadConfig(filename: string = '') {
		console.log(`Load Config: ${filename}`)
		if( filename === ''){ return false }
		AppConfigService.apiUrl = AppConfigService.config.get('lethean-server', 'api_url', 'http://127.0.0.1:36911')

			return this.fs.readFile(filename).then((data) => {
				AppConfigService.config.parse(data)
			})

	}

}
