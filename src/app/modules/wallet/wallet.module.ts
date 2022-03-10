import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from 'src/app/modules/wallet/wallet.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatSelectModule} from '@angular/material/select';
import {PipesModule} from '@pipe/pipes.module';
import { DetailsComponent } from './details/details.component';
import {NewComponent} from '@module/wallet/components/new.component';
import {RouterModule} from '@angular/router';



@NgModule({
	declarations: [
		WalletComponent,
		DetailsComponent,
		NewComponent
	],
	exports: [
	],
	imports: [
		CommonModule,
		MatCardModule,
		FlexModule,
		ReactiveFormsModule,
		MatListModule,
		MatButtonModule,
		MatCheckboxModule,
		MatExpansionModule,
		MatToolbarModule,
		MatIconModule,
		MatTooltipModule,
		MatInputModule,
		TranslateModule,
		NgxDatatableModule,
		MatSelectModule,
		MatTabsModule,
		PipesModule,
		RouterModule
	]
})
export class WalletModule {}
