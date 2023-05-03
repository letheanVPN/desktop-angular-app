import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {CryptService} from '@service/crypt.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
import {Router} from '@angular/router';
import {AuthService} from '@module/user/auth/auth.service';

export interface Task {
	name: string;
	completed: boolean;
	status: string;
}

@Component({
	selector: 'lthn-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent {
	task: Task = {
		name: 'Sync Blockchain',
		completed: false,
		status: 'on'
	};

	userForm = new UntypedFormGroup({
		username: new UntypedFormControl(''),
		password: new UntypedFormControl(''),
		passwordRepeat: new UntypedFormControl('')
	});

	username = new UntypedFormControl('');
	password = new UntypedFormControl('');
	passwordRepeat = new UntypedFormControl('');
	processingForm = false;

	constructor(
		private cryptService: CryptService,
		private fileSystem: FileSystemService,
		private router: Router,
		private authService: AuthService
	) {
	}

	async addUser() {
		this.processingForm = true;
		const username = this.username.value;
		const password = this.password.value;
		const passwordRepeat = this.passwordRepeat.value;

		const usernameHash = this.cryptService.sha256Salty(username);

		if (password === passwordRepeat) {
			console.log('Creating OpenPGP Keys.');
			const {privateKey, publicKey, revocationCertificate} =
				await this.cryptService.createOpenPGP(usernameHash, password);
			console.log('Keys created');

			console.log('Saving keys to local filesystem');
			await this.fileSystem.writeFile(
				`users/${usernameHash}.lthn.key`,
				privateKey
			);
			await this.fileSystem.writeFile(
				`users/${usernameHash}.lthn.pub`,
				publicKey
			);
			await this.fileSystem.writeFile(
				`users/${usernameHash}.lthn.rev`,
				revocationCertificate
			);

			console.log('Creating User profile data file');

			await this.fileSystem.writeFile(
				`users/${usernameHash}.lthn`,
				await this.cryptService.encryptPGPSingle(
					usernameHash,
					JSON.stringify({
						username: username,
						id: usernameHash,
						key: this.cryptService.generateKey(
							username +
							this.cryptService
								.createSalt(username)
								.toString()
						)
					})
				)
			);
			await this.authService.login(privateKey, password);
			console.log('cleaning up');
			console.log('Done, and away we go!');
			await this.router.navigateByUrl(`/`);
		}
	}
}
