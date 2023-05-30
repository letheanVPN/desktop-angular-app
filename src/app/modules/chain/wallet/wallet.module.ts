import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from '@module/chain/wallet/wallet.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {FlexModule} from '@angular/flex-layout';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {PipesModule} from '@pipe/pipes.module';
import {RouterModule} from '@angular/router';
import {WalletNewComponent} from '@module/chain/wallet/components/wallet-new.component';
import {TransactionsComponent} from '@module/chain/wallet/components/transactions.component';
import {SettingsComponent} from '@module/chain/wallet/components/settings.component';
import {RestoreComponent} from '@module/chain/wallet/components/restore.component';
import {DetailsComponent} from '@module/chain/wallet/components/details.component';
import {AddComponent} from '@module/chain/wallet/components/add.component';
import {OpenComponent} from '@module/chain/wallet/components/open.component';
import { TransferComponent } from './components/transfer/transfer.component';
import {ConsoleModule} from '@module/system/console/console.module';
import {NbButtonModule, NbCardModule, NbInputModule, NbListModule} from "@nebular/theme";



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
        MatSelectModule,
        MatTabsModule,
        PipesModule,
        RouterModule,
        NbCardModule,
        NbListModule,
        NbButtonModule,
        NbInputModule,
        FormsModule
    ]
})
export class WalletModule {}
