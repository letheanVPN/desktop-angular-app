import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {TranslateModule} from '@ngx-translate/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {ReactiveComponentModule} from '@ngrx/component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatIconModule} from '@angular/material/icon';
import {PipesModule} from '@pipe/pipes.module';
import {MatCardModule} from '@angular/material/card';
import {WalletModule} from '@module/wallet/wallet.module';
import {BlockchainModule} from '@module/chain/blockchain.module';
import {PostModule} from '@module/content/post/post.module';
import {SpartaModule} from '@module/content/sparta/sparta.module';
import {CodeEditorModule} from '@swimlane/ngx-ui';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [RootComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		FlexModule,
		MatTabsModule,
		WalletModule,
		TranslateModule,
		MatDividerModule,
		MatProgressSpinnerModule,
		MatListModule,
		ReactiveComponentModule,
		PipesModule,
		NgxDatatableModule,
		MatIconModule,
		MatCardModule,
		BlockchainModule,
		PostModule,
		SpartaModule,
		CodeEditorModule,
		FormsModule
	]
})
export class RootModule {
}
