import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileSystemInterface} from '@interface/file-system.interface';
@Injectable({
	providedIn: 'any'
})
export class FileSystemWebService implements FileSystemInterface {

	public apiUrl: string = 'http://localhost:36911';


	constructor(private http: HttpClient) {
		this.apiUrl = this.apiUrl + '/api/system/files'
	}

	public exists(pathname): boolean {
		return pathname;
	}

	public async list(dirname) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
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


	public async read(filename: string = '') {

		if(!filename || filename === '') {
			return null;
		}

		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
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
				'Content-Type': 'application/json'
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

	public async isFile(filename) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/file-check`, {path: filename}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat))
			.then((dat) => dat.result);
	}

	public async isDir(filename) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		return await this.http
			.post<any>(`${this.apiUrl}/dir-check`, {path: filename}, options)
			.toPromise()
			.then((dat) => JSON.parse(dat))
			.then((dat) => dat.result);
	}


}
