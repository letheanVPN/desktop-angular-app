import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockchainComponent} from 'src/app/modules/chain/blockchain.component';
import {ChartModule} from '@module/chart/chart.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveComponentModule} from '@ngrx/component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {PipesModule} from '@pipe/pipes.module';
import {HashRatePipe} from '@pipe/crypto/hashrate.pipe';
import {MomentModule} from 'ngx-moment';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
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
import { BlockchainConsoleComponent } from './components/console/console.component';

@NgModule({
	declarations: [BlockchainComponent, BlockDetailsComponent, BlockLedgerComponent, BlockchainStatsComponent, BlockchainConfigComponent, BlockTransactionsComponent, StatusComponent, BlockchainConsoleComponent],
    imports: [
        CommonModule,
        ChartModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        FlexModule,
        TranslateModule,
        NgxDatatableModule,
        ReactiveComponentModule,
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
	exports: [BlockchainComponent, StatusComponent],
	providers: [HashRatePipe]
})
export class BlockchainModule {
}
