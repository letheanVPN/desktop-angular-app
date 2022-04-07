import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileSystemInterface} from '@interface/file-system.interface';
import {AuthService} from '@module/auth/auth.service';

@Injectable({
	providedIn: 'any'
})
export class FileSystemWebService implements FileSystemInterface {

	public apiUrl: string = 'http://127.0.0.1:36911';


	constructor(private http: HttpClient) {
		this.apiUrl = this.apiUrl + '/filesystem'
	}

	public exists(pathname): boolean {
		return pathname;
	}

	public async list(dirname) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization':  AuthService.token.access_token
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/list`, {path: dirname}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat));
	}

	public mkdir(dirname): void {
		console.log(dirname)
	}

	public path(filename) {
		console.log(filename)
	}


	public async read(filename) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': AuthService.token.access_token
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/read`, {path: filename}, options)
			.toPromise()
			.then((dat) => atob(dat));
	}

	public async write(filename, data) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': AuthService.token.access_token
			})
		};

		return await this.http
			.post(
				`${this.apiUrl}/write`,
				{path: filename, data: btoa(data)},
				options
			)
			.toPromise();
	}


}
