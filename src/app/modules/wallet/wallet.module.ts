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
import {RouterModule} from '@angular/router';
import {WalletNewComponent} from '@module/wallet/components/wallet-new.component';
import {TransactionsComponent} from '@module/wallet/components/transactions.component';
import {SettingsComponent} from '@module/wallet/components/settings.component';
import {RestoreComponent} from '@module/wallet/components/restore.component';
import {CardModule, NgxUIModule, SectionModule, SelectModule, TabsModule} from '@swimlane/ngx-ui';
import {DetailsComponent} from '@module/wallet/components/details.component';
import {AddComponent} from '@module/wallet/components/add.component';
import {OpenComponent} from '@module/wallet/components/open.component';
import { TransferComponent } from './components/transfer/transfer.component';



@NgModule({
	declarations: [
		WalletComponent,
		DetailsComponent,
		WalletNewComponent,
		TransactionsComponent,
		SettingsComponent,
		RestoreComponent,
		AddComponent,
		OpenComponent,
  TransferComponent
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
		RouterModule,
		SelectModule,
		TabsModule,
		SectionModule,
		CardModule,
		NgxUIModule
	]
})
export class WalletModule {}
