import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {InputModule} from '@swimlane/ngx-ui';

@NgModule({
	declarations: [LoginComponent],
	exports: [
		LoginComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		TranslateModule,
		MatIconModule,
		InputModule,
		FormsModule
	]
})
export class AuthModule {
}
