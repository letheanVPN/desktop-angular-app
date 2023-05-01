import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core';
import {UserComponent} from './user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FlexModule} from '@angular/flex-layout';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
		data: {
			title: 'New User - Lethean (LTHN)',
			heading: 'New User Wizard',
			description: 'Lethean (LTHN) New User Panel',
			robots: false
		}
	}
];

@NgModule({
	declarations: [UserComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatDividerModule,
		MatCardModule,
		MatInputModule,
		FlexModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		MatProgressBarModule
	]
})
export class UserModule {
}
