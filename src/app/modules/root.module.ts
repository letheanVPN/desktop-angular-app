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
import {MatIconModule} from '@angular/material/icon';
import {PipesModule} from '@pipe/pipes.module';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {WalletModule} from '@module/chain/wallet/wallet.module';
import {BlockchainModule} from '@module/chain/blockchain.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import {DockerModule} from '@module/docker/docker.module';
import {MiningModule} from '@module/mining/mining.module';
import {XmrigModule} from '@module/mining/xmrig/xmrig.module';
import { LoadAppComponent } from '@module/apps/load-app/load-app.component';
import {AppsModule} from "@module/apps/apps.module";
import {NbCardModule} from "@nebular/theme";

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
        MatIconModule,
        MatCardModule,
        AppsModule,
        BlockchainModule,
        DockerModule,
        MiningModule,
        RouterModule,
        MatProgressBarModule,
        XmrigModule, NbCardModule
    ]
})
export class RootModule {
}
