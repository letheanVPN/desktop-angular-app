import {Injectable} from '@angular/core';
import {CryptService} from '@service/crypt.service';
import {AppConfigService} from '@service/app-config.service';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private user = '';
	private id = '';
	public static token: { access_token: string, refresh_token: string } = {
		access_token: undefined,
		refresh_token: undefined
	};

	constructor(
		private cryptService: CryptService,
		private notificationService: NotificationService
	) {
this.getAuthStatus()
	}

	/**
	 * User auth check is (this.user.length > 0) we only need to store how to access the data.
	 *
	 * Please do not add identifiable data or anything here, data like that should live in the users encrypted
	 * json profiles.
	 *
	 * If extra data is required here, it should be kept to a min, not expose, not persist and only be for user benefit
	 * not because it would just be easier to code
	 *
	 * @returns {boolean}
	 */
	getAuthStatus() {
		if (AuthService.token['access_token'] == undefined) {
			AuthService.token['access_token'] = sessionStorage.getItem('access_token')
		}

		if (AuthService.token['refresh_token'] == undefined) {
			AuthService.token['refresh_token'] = sessionStorage.getItem('refresh_token')
		}
		return AuthService.token['access_token']?.length > 0
	}

	/**
	 * Takes a username and password and tries to decrypt data files with a name id matching
	 *
	 * It either works and that was the right password, or it does not and then it wont.
	 *
	 * We are using OpenPGP so adding a backup key that can decrypt the current password, that we update using the public key.
	 * so if the worst happens, they can decrypt using a HSM/encrypted file stored passwordless private key
	 *
	 * @param username
	 * @param password
	 * @returns {Promise<void>}
	 */
	async login(key, password) {

		try {

			let privateKey = await this.cryptService.decryptPrivateKey(key, password);
			if (privateKey) {

				//console.log(privateKey.getUserIDs())
				const msg = await this.cryptService.encryptPublic(await this.cryptService.sign(`{"id":"${privateKey.getUserIDs()[0]}"}`, privateKey), AppConfigService.serverPublicKey)
					.then((res) => {
						console.log(res)
						return btoa(res.toString())
					});

				return fetch(AppConfigService.apiUrl + '/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						payload: msg
					})
				}).then((res) => res.json())
					.then(async res => {
						console.log(res)
						if (res['result'] == false) {
							this.notificationService.create({type: NotificationType.html, styleType: NotificationStyleType.error, body: 'Failed to login'});
						} else {

							AuthService.token = JSON.parse(await this.cryptService.decryptPGP(atob(res['result']), privateKey))

							sessionStorage.setItem('access_token', AuthService.token['access_token']);
							sessionStorage.setItem('refresh_token', AuthService.token['refresh_token']);
							return true;
						}


					});
			}
		} catch(e){ console.log(e)}
		return false;
	}

	/**
	 * Clear the user prop by setting to a empty string, making auth checks fail.
	 */
	logout() {
		this.user = '';
	}

	getId(){
		return this.id;
	}

	getUser(){
		return this.user;
	}
}
