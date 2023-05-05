import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServerService} from "@service/server.service";
import {FileSystemService} from "@service/filesystem/file-system.service";
import {CryptService} from "@service/crypt.service";
import {InputOutputService} from "../../../../typescript-angular";
@Component({
    selector: 'lthn-wizard-first-user',
    templateUrl: './first-user.component.html',
    styleUrls: ['./first-user.component.scss']
})
export class FirstUserComponent {

    userForm = new FormGroup({
        username : new FormControl('', [Validators.required, Validators.min(3)]),
        password : new FormControl('', Validators.required),
        passwordConfirm : new FormControl('', Validators.required)
    });

    user: any = {};
    constructor(private apiGateway: InputOutputService, private server: ServerService, private fs: FileSystemService, private cryptService: CryptService) {
    }
    async createUser() {
        await this.apiGateway.isFile({'path': 'users/' + this.cryptService.sha256Salty(this.userForm.get('username').value) + '.lthn.key'})
            .toPromise().then((exists) => {
console.log('exists', exists);
            })
        console.log(this.user, this.userForm.get('username').value)

        if(this.userForm.valid === false) {
            return false;
        }

        this.user = await this.server.sendPostRequest('auth/lethean/create', {
            username: this.userForm.get('username').value,
            password: this.userForm.get('password').value,
        })
        return true;
    }
}
