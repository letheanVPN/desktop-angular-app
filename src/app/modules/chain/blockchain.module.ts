import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockchainComponent} from 'src/app/modules/chain/blockchain.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FlexModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LetModule, PushModule} from '@ngrx/component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {PipesModule} from '@pipe/pipes.module';
import {HashRatePipe} from '@pipe/crypto/hashrate.pipe';
import {MomentModule} from 'ngx-moment';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {RouterModule} from '@angular/router';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
	ButtonModule, CardModule,
	CodeEditorModule,
	DropdownModule,
	IconModule,
	JSONTreeModule,
	SectionModule,
	TabsModule, ToggleModule,
	ToolbarModule,
	TreeModule
} from '@swimlane/ngx-ui';
import {BlockDetailsComponent} from '@module/chain/components/block/details.component';
import {BlockLedgerComponent} from '@module/chain/components/block/ledger.component';
import {BlockchainStatsComponent} from '@module/chain/components/stats.component';
import {BlockchainConfigComponent} from '@module/chain/components/config.component';
import {BlockTransactionsComponent} from '@module/chain/components/block/transactions.component';
import {ConsoleModule} from '@module/console/console.module';
import { StatusComponent } from './components/status/status.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {XMRStatusComponent} from '@module/chain/xmr/status.component';

@NgModule({
	declarations: [XMRStatusComponent, BlockchainComponent, BlockDetailsComponent, BlockLedgerComponent, BlockchainStatsComponent, BlockchainConfigComponent, BlockTransactionsComponent, StatusComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        FlexModule,
        TranslateModule,
        NgxDatatableModule,
        LetModule, PushModule,
        PipesModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatMenuModule,
        MomentModule,
        MatProgressBarModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SectionModule,
        ToolbarModule,
        TabsModule,
        CodeEditorModule,
        FormsModule,
        ButtonModule,
        TreeModule,
        JSONTreeModule,
        IconModule,
        ConsoleModule,
        DropdownModule,
        CardModule,
        ToggleModule,
        MatExpansionModule
    ],
	exports: [BlockchainComponent, StatusComponent, XMRStatusComponent],
	providers: [HashRatePipe]
})
export class BlockchainModule {
}
