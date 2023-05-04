import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';
import {FileSystemService} from '@service/filesystem/file-system.service';

@Injectable()
export class AuthGuard  {


	constructor(
		private router: Router,
		private authService: AuthService,
		private fileSystem: FileSystemService
	) {
	}


	/**
	 * Handles logged out access
	 * Run during routing to check if the user is logged in or not, we do this check if
	 * getAuthStatus() returns true, the username variable is set, to logout simply clear the username
	 *
	 * If the user is not authenticated this function acts in one of two ways
	 *
	 * 1) if ~/Lethean/users is empty perform first run / welcome
	 * 2) if users do exsist, take to the /login page
	 *
	 * if APP_CONFIG.production === false auth check is bypassed, but without login decryption cant happen
	 * you may or may not have to login to develop, for now at least
	 *
	 * @param {ActivatedRouteSnapshot} route
	 * @param {RouterStateSnapshot} state
	 * @returns {boolean | Promise<boolean>}
	 */
	async canActivate(): Promise<boolean> {
		return true
		let isAuthenticated = this.authService.getAuthStatus();

		if (!isAuthenticated) {

			try {
				isAuthenticated = await this.fileSystem.listFiles('users').then(async (dat: any) => {
					return dat.length > 0 && !dat.map((file: string) => file.endsWith('.lthn')).includes(true);
				});
			} catch (e) {
				isAuthenticated = false
			}

		}

		if(!isAuthenticated){
			await this.router.navigate(['/login']);
		}

		return isAuthenticated;
	}
}
