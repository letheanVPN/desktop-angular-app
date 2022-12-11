import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FlexModule} from '@angular/flex-layout';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {TranslateModule} from '@ngx-translate/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {LetModule, PushModule} from '@ngrx/component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatIconModule} from '@angular/material/icon';
import {PipesModule} from '@pipe/pipes.module';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {WalletModule} from '@module/wallet/wallet.module';
import {BlockchainModule} from '@module/chain/blockchain.module';
import {
	CardModule,
	CodeEditorModule,
	DropdownModule,
	IconModule,
	SectionModule, SplitModule,
	TabsModule,
	ToggleModule
} from '@swimlane/ngx-ui';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import {EditorModule} from '@module/devkit/editor/editor.module';
import {DockerModule} from '@module/docker/docker.module';
import {MiningModule} from '@module/mining/mining.module';
import {XmrigModule} from '@module/mining/xmrig/xmrig.module';
import {NgMagicIframeModule} from '@sebgroup/ng-magic-iframe';
import { LoadAppComponent } from './load-app/load-app.component';

@NgModule({
	declarations: [RootComponent, LoadAppComponent],
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
		LetModule, PushModule,
		PipesModule,
		NgxDatatableModule,
		MatIconModule,
		MatCardModule,
		BlockchainModule,
		DockerModule,
		MiningModule,
		CodeEditorModule,
		FormsModule,
		CardModule,
		IconModule,
		ToggleModule,
		DropdownModule,
		SectionModule,
		RouterModule,
		TabsModule,
		MatProgressBarModule,
		EditorModule,
		XmrigModule,
		NgMagicIframeModule,
		SplitModule
	]
})
export class RootModule {
}
