import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ServerService} from "@service/server.service";

@Component({
    selector: 'lthn-wizard-first-user',
    templateUrl: './first-user.component.html',
    styleUrls: ['./first-user.component.scss']
})
export class FirstUserComponent {

    username = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);
    passwordConfirm = new FormControl('', Validators.required);
    user: any = {};
    constructor(private server: ServerService) {
    }
    async createUser() {
        this.user = await this.server.sendPostRequest('auth/lethean/create', {
            username: this.username.value,
            password: this.password.value,
        })
        console.log(this.user, this.username.value, this.password.value, this.passwordConfirm.value)
        return true;
    }
}
