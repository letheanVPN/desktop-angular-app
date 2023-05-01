import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
	selector: 'lthn-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	key: string;
	error = '';
	fileName = '';
	public password: any;

	constructor(private authService: AuthService, private router: Router) {

	}

	inputChanged() {
		// Reset error after inputs are changed
		this.error = '';
	}

	async submit() {

		if (this.key) {

			//this.authService.login(privateKey);
			//this.router.navigate(['/']);

			 this.authService.login(this.key, this.password)
				.then(() => {
					if (this.authService.getAuthStatus()) {
						this.router.navigateByUrl('/');
					} else {
						this.error = 'Login Failed, try again.';
					}
				})
				.catch((e) => {
					console.log(e)
					this.error = 'Login Failed, try again.';
				});
		}
	}

	onFileSelected(event) {

		const file: File = event.target.files[0];

		const that = this;
		if (file) {

			this.fileName = file.name;

			let reader = new FileReader();

			reader.addEventListener('load', async function (e) {
				let text = e.target.result.toString();
				try {
					that.key = text;
				} catch (e) {

				}

			});

			// event fired when file reading failed
			reader.addEventListener('error', function () {
				// that.notificationService.create({
				// 	title: 'Error',
				// 	body: 'Could not read file',
				// 	type: NotificationType.html
				// });
			});

			// read file as text file
			reader.readAsText(file);

		}
	}
}
