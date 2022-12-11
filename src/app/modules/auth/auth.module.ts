import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
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
