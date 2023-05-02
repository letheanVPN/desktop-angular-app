import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockchainComponent} from 'src/app/modules/chain/blockchain.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FlexModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
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
import {BlockDetailsComponent} from '@module/chain/components/block/details.component';
import {BlockLedgerComponent} from '@module/chain/components/block/ledger.component';
import {BlockchainStatsComponent} from '@module/chain/components/stats.component';
import {BlockchainConfigComponent} from '@module/chain/components/config.component';
import {BlockTransactionsComponent} from '@module/chain/components/block/transactions.component';
import { StatusComponent } from './components/status/status.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbUserModule} from "@nebular/theme";

@NgModule({
	declarations: [ BlockchainComponent, BlockDetailsComponent, BlockLedgerComponent, BlockchainStatsComponent, BlockchainConfigComponent, BlockTransactionsComponent, StatusComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        FlexModule,
        TranslateModule,
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
        FormsModule,

        MatExpansionModule, NbCardModule, NbListModule, NbUserModule, NbIconModule, NbButtonModule, NbInputModule
    ],
	exports: [BlockchainComponent, StatusComponent],
	providers: [HashRatePipe]
})
export class BlockchainModule {
}
