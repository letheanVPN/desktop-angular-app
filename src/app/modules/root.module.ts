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
import {
    CardModule,
    CodeEditorModule,
    DropdownModule,
    IconModule,
    SectionModule,
    TabsModule,
    ToggleModule
} from '@swimlane/ngx-ui';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {EditorModule} from '@module/devkit/editor/editor.module';
import {DockerModule} from '@module/docker/docker.module';
import {MiningModule} from '@module/mining/mining.module';
import {XmrigModule} from '@module/mining/xmrig/xmrig.module';

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
        XmrigModule
    ]
})
export class RootModule {
}
