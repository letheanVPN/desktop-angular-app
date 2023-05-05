import {Injectable} from '@angular/core';
import {FileSystemService} from './filesystem/file-system.service';
import * as openpgp from 'openpgp';
import * as crypto from 'crypto-js';
import {PrivateKey} from 'openpgp';

@Injectable({
	providedIn: 'root'
})
export class CryptService {
	constructor(
		private fileSystem: FileSystemService
	) {
	}

	get keyMap() {
		return {
			'o': '0',
			'l': "1",
			'e': "3",
			'a': "4",
			's': "z",
			't': "7",
		}
	}

	/**
	 * creates a salted sha256 hash using the input to create a salt.
	 *
	 * @param {string} input
	 * @returns {string}
	 */
	createSalt(input: string): string {
		if (!input) {
			return '';
		}

		let i: number = input.length;
		let salt:string[] = []
		while (i--) {
			const char: string = input[i];
			salt.push(this.keyMap[char] !== undefined ? this.keyMap[char] : char);
		}

		return salt.join('');
	}

	/**
	 * sha256 hash that uses itself converted as a reproducable salt
	 *
	 * @param input
	 * @returns {string}
	 */
	sha256Salty(input): string {
		return crypto
			.SHA256(input + this.createSalt(input))
			.toString();
	}

	/**
	 * Create a salted PBKDF2 key for encryption purposes using a random word array
	 *
	 * @param input
	 * @returns {any}
	 */
	generateKey(input) {
		const salt = crypto.lib.WordArray.random(128 / 8);
		return crypto.PBKDF2(input, salt, {
			keySize: 256 / 32
		});
	}


	/**
	 * Creates a Armoured OpenPGP key for the username protected with the password supplied
	 *
	 * @param username
	 * @param password
	 * @returns {Promise<any>}
	 */
	async createOpenPGP(username, password) {
		return await openpgp.generateKey({
			type: 'rsa', // Type of the key, defaults to ECC
			rsaBits: 4096,
			userIDs: [{name: username}], // you can pass multiple user IDs
			passphrase: password, // protects the private key
			format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
		});
	}


	/**
	 * Using a Lethean user public key, encrypt the supplied data
	 *
	 * Bigger the string, longer it'll take on slow devices... please provide UI feedback even if its
	 * "quick for you" it wont be on a Pi4 under load
	 *
	 * @param {string} id cryptService.sha256Salty(username)
	 * @param {string} data
	 * @returns {Promise<any>}
	 */
	async encryptPGPSingle(id: string, data: string) {
		const encryptionKey = await this.fileSystem.readFile(
			`users/${id}.lthn.pub`
		);

		if (encryptionKey.length === 0) {
			throw new Error(`Failed to load encryption key id: ${id}`);
		}
		const encrypted = await openpgp.encrypt({
			message: await openpgp.createMessage({
				text: data
			}), // input as Message object
			encryptionKeys: await openpgp.readKey({
				armoredKey: encryptionKey
			})
		});

		return encrypted;
	}

	/**
	 * Requires the users password, for this reason, you might want to make or interact with profiles
	 * they are like sub accounts, but not, multiple personality syndrome with split brain describes it well.
	 *
	 * @param {string} id cryptService.sha256Salty(username)
	 * @param {string} passphrase
	 * @param {string} encrypted
	 * @returns {Promise<any>}
	 */
	async decryptPGPSingle(id: string, passphrase: string, encrypted: string) {
		/**
		 * @type string OpenPGP Armoured private key
		 */
		let encryptionKey = await this.fileSystem.readFile(
			`users/${id}.lthn.key`
		);

		if (encryptionKey.length === 0) {
			throw new Error(`Failed to load encryption key id: ${id}`);
		}
		// decrypt the private key
		let privateKey = await this.decryptPrivateKey( encryptionKey, passphrase);

		let message = await this.readMessage(encrypted);

		const {data: decrypted, signatures} =
			await openpgp.decrypt({
				message,
				decryptionKeys: privateKey
			});
		console.log(signatures)
		// Leave nothing to chance
		privateKey = null
		encryptionKey = ''
		message = null

		return decrypted;
	}

	async readMessage(encrypted: string ) {
		return await openpgp.readMessage({
			armoredMessage: encrypted
		})
	}

	async readPrivateKey(encryptionKey: string){
		return await openpgp.readPrivateKey({
			armoredKey: encryptionKey
		})
	}
	async readKey(encryptionKey: string){
		return await openpgp.readKey({
			armoredKey: encryptionKey
		})
	}

	async decryptPrivateKey(encryptionKey: string, passphrase: string){
		return await openpgp.decryptKey({
			privateKey: await this.readPrivateKey( encryptionKey),
			passphrase
		});
	}

	async sign(data: string, privateKey: PrivateKey) {
		const options: any = {
			message: await openpgp.createCleartextMessage({ text: data }),
			signingKeys: privateKey,
		};

		return await openpgp.sign(options);
	}

	async encryptPublic(data: any, publicKey: string) {

		try {
			const options: any = {
				message: await openpgp.createMessage({ text: data }),
				encryptionKeys:  await this.readKey(publicKey),
			};

			return await openpgp.encrypt(options);
		}catch (e) {
			return false
		}

	}

	async decryptPGP(
		message: string,
		privateKey: any
	): Promise<string> {

		let options: any = {
			message: await this.readMessage(message),
			decryptionKeys: privateKey,
		};

		return await openpgp.decrypt(options).then((result: any) => {
			return result.data;
		});

	}


}
