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

	public static apiUrl: string = 'https://localhost:36911';

	public static settings: any;
	public static config: ConfigIniParser = new ConfigIniParser();
	openpgp: any;
	crypto: any;

	constructor(private fs: FileSystemService) {

	}


	loadConfig(filename: string = '') {
		console.log(`Load Config: ${filename}`)
		if( filename === ''){ return false }
		this.fs.readFile(filename).then((data) => {
			AppConfigService.config.parse(data)
			console.log(filename)
			if(filename === 'conf/lethean.ini') {
				AppConfigService.apiUrl = AppConfigService.config.get('lethean-server', 'apiURL')
			}
			console.log(AppConfigService.apiUrl)
		}).catch((err) => {
			console.log(err)
		})
	}

}
