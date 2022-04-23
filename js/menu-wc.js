'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">lthn-app-desktop documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9c7677ffd3033e450389a0cd99ce7171a576dc608fc181deea6c58aa6a497aea39c5bfc3b2ab7c9b892f40eb5326ea2103af68bd8d3d6bb4c4e98c2a971c2a75"' : 'data-target="#xs-components-links-module-AppModule-9c7677ffd3033e450389a0cd99ce7171a576dc608fc181deea6c58aa6a497aea39c5bfc3b2ab7c9b892f40eb5326ea2103af68bd8d3d6bb4c4e98c2a971c2a75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9c7677ffd3033e450389a0cd99ce7171a576dc608fc181deea6c58aa6a497aea39c5bfc3b2ab7c9b892f40eb5326ea2103af68bd8d3d6bb4c4e98c2a971c2a75"' :
                                            'id="xs-components-links-module-AppModule-9c7677ffd3033e450389a0cd99ce7171a576dc608fc181deea6c58aa6a497aea39c5bfc3b2ab7c9b892f40eb5326ea2103af68bd8d3d6bb4c4e98c2a971c2a75"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-30cd9d8cf489da6ae86233fba8e20869a6d32bd57a1e6606644f51c64eff1d98d9531dc24963fdc69f7d0bb4fdc481b3bf6ffd702ac2bd6525c32a533640affd"' : 'data-target="#xs-components-links-module-AuthModule-30cd9d8cf489da6ae86233fba8e20869a6d32bd57a1e6606644f51c64eff1d98d9531dc24963fdc69f7d0bb4fdc481b3bf6ffd702ac2bd6525c32a533640affd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-30cd9d8cf489da6ae86233fba8e20869a6d32bd57a1e6606644f51c64eff1d98d9531dc24963fdc69f7d0bb4fdc481b3bf6ffd702ac2bd6525c32a533640affd"' :
                                            'id="xs-components-links-module-AuthModule-30cd9d8cf489da6ae86233fba8e20869a6d32bd57a1e6606644f51c64eff1d98d9531dc24963fdc69f7d0bb4fdc481b3bf6ffd702ac2bd6525c32a533640affd"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockchainModule.html" data-type="entity-link" >BlockchainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlockchainModule-3dfe49ebb139a5886675f027acf9ac10c08feaaad66e9f946ce0c77e993a65ff49cd3729df5c2ffa80d83be2493284af08b8ef0ad11170de1ffe5ba784a2f3e8"' : 'data-target="#xs-components-links-module-BlockchainModule-3dfe49ebb139a5886675f027acf9ac10c08feaaad66e9f946ce0c77e993a65ff49cd3729df5c2ffa80d83be2493284af08b8ef0ad11170de1ffe5ba784a2f3e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlockchainModule-3dfe49ebb139a5886675f027acf9ac10c08feaaad66e9f946ce0c77e993a65ff49cd3729df5c2ffa80d83be2493284af08b8ef0ad11170de1ffe5ba784a2f3e8"' :
                                            'id="xs-components-links-module-BlockchainModule-3dfe49ebb139a5886675f027acf9ac10c08feaaad66e9f946ce0c77e993a65ff49cd3729df5c2ffa80d83be2493284af08b8ef0ad11170de1ffe5ba784a2f3e8"' }>
                                            <li class="link">
                                                <a href="components/BlockDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockLedgerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockLedgerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockTransactionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockTransactionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockchainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockchainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockchainConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockchainConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockchainStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockchainStatsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockchainRoutingModule.html" data-type="entity-link" >BlockchainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' : 'data-target="#xs-directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' :
                                        'id="xs-directives-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <li class="link">
                                            <a href="directives/ChartDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' : 'data-target="#xs-injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' :
                                        'id="xs-injectables-links-module-ChartModule-e2316919c4ee6b733704b74a34a6d2332942ed59435c7319c15bb2262dc02004f0bf1abfaf2a4106969aabc7e334e59036c64575bde627254cea1e7247288d8e"' }>
                                        <li class="link">
                                            <a href="injectables/ChartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsoleModule.html" data-type="entity-link" >ConsoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsoleModule-c221c7584739c4b68ac86950111484b29086dd7e2e9c52bcafd6c7678752c4c6f58e22ec8ee26ccc7bdebba4d6e8575fb386ea8f30eb502d12fcc086ce85c8c0"' : 'data-target="#xs-components-links-module-ConsoleModule-c221c7584739c4b68ac86950111484b29086dd7e2e9c52bcafd6c7678752c4c6f58e22ec8ee26ccc7bdebba4d6e8575fb386ea8f30eb502d12fcc086ce85c8c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsoleModule-c221c7584739c4b68ac86950111484b29086dd7e2e9c52bcafd6c7678752c4c6f58e22ec8ee26ccc7bdebba4d6e8575fb386ea8f30eb502d12fcc086ce85c8c0"' :
                                            'id="xs-components-links-module-ConsoleModule-c221c7584739c4b68ac86950111484b29086dd7e2e9c52bcafd6c7678752c4c6f58e22ec8ee26ccc7bdebba4d6e8575fb386ea8f30eb502d12fcc086ce85c8c0"' }>
                                            <li class="link">
                                                <a href="components/ConsoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TerminalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerminalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogsModule.html" data-type="entity-link" >LogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' : 'data-target="#xs-components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' :
                                            'id="xs-components-links-module-LogsModule-5d21f88d60d3eb636b7293877c7a010a550d251c988c72adb32ab9e2aca446ab49b3d24c0d83bc5b68f701a6c6bd23cf0e78fd1f8c7cfd395e67eda2b07428d6"' }>
                                            <li class="link">
                                                <a href="components/LogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link" >ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-1bfe4e42b09ee88ddb2e9ea184996ef5a3f3e176a4ffa9d2d89a620c288dc8e5a8353cdf12512e3e7640979c49f8344d42b2788ab0c033db7a774216751014bc"' : 'data-target="#xs-components-links-module-ModalModule-1bfe4e42b09ee88ddb2e9ea184996ef5a3f3e176a4ffa9d2d89a620c288dc8e5a8353cdf12512e3e7640979c49f8344d42b2788ab0c033db7a774216751014bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-1bfe4e42b09ee88ddb2e9ea184996ef5a3f3e176a4ffa9d2d89a620c288dc8e5a8353cdf12512e3e7640979c49f8344d42b2788ab0c033db7a774216751014bc"' :
                                            'id="xs-components-links-module-ModalModule-1bfe4e42b09ee88ddb2e9ea184996ef5a3f3e176a4ffa9d2d89a620c288dc8e5a8353cdf12512e3e7640979c49f8344d42b2788ab0c033db7a774216751014bc"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-eae2837dea7b85bb54888740811249d7010f48fd7b5ec471ddd369cb39185d5d27fadc51cb3b1e296a18fa30276660cd66c7e682bf660c54bbd5b15562c659bd"' : 'data-target="#xs-pipes-links-module-PipesModule-eae2837dea7b85bb54888740811249d7010f48fd7b5ec471ddd369cb39185d5d27fadc51cb3b1e296a18fa30276660cd66c7e682bf660c54bbd5b15562c659bd"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-eae2837dea7b85bb54888740811249d7010f48fd7b5ec471ddd369cb39185d5d27fadc51cb3b1e296a18fa30276660cd66c7e682bf660c54bbd5b15562c659bd"' :
                                            'id="xs-pipes-links-module-PipesModule-eae2837dea7b85bb54888740811249d7010f48fd7b5ec471ddd369cb39185d5d27fadc51cb3b1e296a18fa30276660cd66c7e682bf660c54bbd5b15562c659bd"' }>
                                            <li class="link">
                                                <a href="pipes/EffortPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EffortPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EscapeHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscapeHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FromCoinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FromCoinPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HashLinkPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HashLinkPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HashRatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HashRatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RemoveTrailingZerosPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveTrailingZerosPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ShruggiePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShruggiePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimeAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimeAgoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ToCoinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToCoinPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-08958358cbfe520ee192f5dbd340e1b0ab8f6bbd6849117a2f221ed070411f55a120eaa5dd6395b2538d484bd5949d1208467a6ce42c48dc9cb57e05978cb7d3"' : 'data-target="#xs-components-links-module-PostModule-08958358cbfe520ee192f5dbd340e1b0ab8f6bbd6849117a2f221ed070411f55a120eaa5dd6395b2538d484bd5949d1208467a6ce42c48dc9cb57e05978cb7d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-08958358cbfe520ee192f5dbd340e1b0ab8f6bbd6849117a2f221ed070411f55a120eaa5dd6395b2538d484bd5949d1208467a6ce42c48dc9cb57e05978cb7d3"' :
                                            'id="xs-components-links-module-PostModule-08958358cbfe520ee192f5dbd340e1b0ab8f6bbd6849117a2f221ed070411f55a120eaa5dd6395b2538d484bd5949d1208467a6ce42c48dc9cb57e05978cb7d3"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RootModule.html" data-type="entity-link" >RootModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RootModule-724941f32a7f96c2f3ce515fb0accc4e924fa8b3c5c736d51fb1a73a3091e01a90c1aefaa939cdedbdfd8f642a5845a60d31c28f54f2ba792b5addda17aba3a7"' : 'data-target="#xs-components-links-module-RootModule-724941f32a7f96c2f3ce515fb0accc4e924fa8b3c5c736d51fb1a73a3091e01a90c1aefaa939cdedbdfd8f642a5845a60d31c28f54f2ba792b5addda17aba3a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RootModule-724941f32a7f96c2f3ce515fb0accc4e924fa8b3c5c736d51fb1a73a3091e01a90c1aefaa939cdedbdfd8f642a5845a60d31c28f54f2ba792b5addda17aba3a7"' :
                                            'id="xs-components-links-module-RootModule-724941f32a7f96c2f3ce515fb0accc4e924fa8b3c5c736d51fb1a73a3091e01a90c1aefaa939cdedbdfd8f642a5845a60d31c28f54f2ba792b5addda17aba3a7"' }>
                                            <li class="link">
                                                <a href="components/RootComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RootComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RootRoutingModule.html" data-type="entity-link" >RootRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' : 'data-target="#xs-components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' :
                                            'id="xs-components-links-module-SettingsModule-a7318366188b36a9890b00f5eb7cc05a450d179df830807924bd82c2a8d034d752b71ce08abe18c8d9b94583f821073bf86b2847622ef4a5805edf818d4d035b"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpartaModule.html" data-type="entity-link" >SpartaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpartaModule-c9e15d316be1efa1d2bd17aaaaa93a55581aac01f900ce80bef374f8a3e52cc858ff6de852cd25771427f53107a8b4e8c38aa402f9275ab40ebca71db836f296"' : 'data-target="#xs-components-links-module-SpartaModule-c9e15d316be1efa1d2bd17aaaaa93a55581aac01f900ce80bef374f8a3e52cc858ff6de852cd25771427f53107a8b4e8c38aa402f9275ab40ebca71db836f296"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpartaModule-c9e15d316be1efa1d2bd17aaaaa93a55581aac01f900ce80bef374f8a3e52cc858ff6de852cd25771427f53107a8b4e8c38aa402f9275ab40ebca71db836f296"' :
                                            'id="xs-components-links-module-SpartaModule-c9e15d316be1efa1d2bd17aaaaa93a55581aac01f900ce80bef374f8a3e52cc858ff6de852cd25771427f53107a8b4e8c38aa402f9275ab40ebca71db836f296"' }>
                                            <li class="link">
                                                <a href="components/SpartaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpartaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpartaRoutingModule.html" data-type="entity-link" >SpartaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link" >StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' : 'data-target="#xs-components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' :
                                            'id="xs-components-links-module-StatusModule-62054be6efd4a21abb8f7fc8726eb26c40b4a2556c5edfbac90644c76fb9295e78eed5058c81e3829b970fc3d9999c6526d3deafab3fcd483ed20e923c2b872e"' }>
                                            <li class="link">
                                                <a href="components/NoDaemonRunningDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoDaemonRunningDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslateModule.html" data-type="entity-link" >TranslateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-47db465eb6c15b55edbd2ba0419079dbc6217f914bee3037bff9a232ee882789ada75ab88203a4077b4d5aba09ce958e012b2f2de701d2a25cd583abaa5cc79a"' : 'data-target="#xs-components-links-module-UserModule-47db465eb6c15b55edbd2ba0419079dbc6217f914bee3037bff9a232ee882789ada75ab88203a4077b4d5aba09ce958e012b2f2de701d2a25cd583abaa5cc79a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-47db465eb6c15b55edbd2ba0419079dbc6217f914bee3037bff9a232ee882789ada75ab88203a4077b4d5aba09ce958e012b2f2de701d2a25cd583abaa5cc79a"' :
                                            'id="xs-components-links-module-UserModule-47db465eb6c15b55edbd2ba0419079dbc6217f914bee3037bff9a232ee882789ada75ab88203a4077b4d5aba09ce958e012b2f2de701d2a25cd583abaa5cc79a"' }>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VpnModule.html" data-type="entity-link" >VpnModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VpnModule-c89de9888b2815ac5fa16e6c6c3847d00b5996d16d83ba1ea5e187c42ea99377355577b778f69965215a9f748deeb1e1ea356ae3e5fc620d52780e837f3c03c9"' : 'data-target="#xs-components-links-module-VpnModule-c89de9888b2815ac5fa16e6c6c3847d00b5996d16d83ba1ea5e187c42ea99377355577b778f69965215a9f748deeb1e1ea356ae3e5fc620d52780e837f3c03c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VpnModule-c89de9888b2815ac5fa16e6c6c3847d00b5996d16d83ba1ea5e187c42ea99377355577b778f69965215a9f748deeb1e1ea356ae3e5fc620d52780e837f3c03c9"' :
                                            'id="xs-components-links-module-VpnModule-c89de9888b2815ac5fa16e6c6c3847d00b5996d16d83ba1ea5e187c42ea99377355577b778f69965215a9f748deeb1e1ea356ae3e5fc620d52780e837f3c03c9"' }>
                                            <li class="link">
                                                <a href="components/VpnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VpnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VpnRoutingModule.html" data-type="entity-link" >VpnRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WalletModule.html" data-type="entity-link" >WalletModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WalletModule-fd619c1ccaa4c0c8233f43acfa2af111f1738450960a937ef37e1bfd47412e625bb020fa26a1ad4665496ce6154d197445708824bc0d9d73c7c4a7f2195e1288"' : 'data-target="#xs-components-links-module-WalletModule-fd619c1ccaa4c0c8233f43acfa2af111f1738450960a937ef37e1bfd47412e625bb020fa26a1ad4665496ce6154d197445708824bc0d9d73c7c4a7f2195e1288"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WalletModule-fd619c1ccaa4c0c8233f43acfa2af111f1738450960a937ef37e1bfd47412e625bb020fa26a1ad4665496ce6154d197445708824bc0d9d73c7c4a7f2195e1288"' :
                                            'id="xs-components-links-module-WalletModule-fd619c1ccaa4c0c8233f43acfa2af111f1738450960a937ef37e1bfd47412e625bb020fa26a1ad4665496ce6154d197445708824bc0d9d73c7c4a7f2195e1288"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransferComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransferComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WalletNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletNewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WalletRoutingModule.html" data-type="entity-link" >WalletRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddComponent.html" data-type="entity-link" >AddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockchainConfigComponent.html" data-type="entity-link" >BlockchainConfigComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockchainStatsComponent.html" data-type="entity-link" >BlockchainStatsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockDetailsComponent.html" data-type="entity-link" >BlockDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockLedgerComponent.html" data-type="entity-link" >BlockLedgerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlockTransactionsComponent.html" data-type="entity-link" >BlockTransactionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailsComponent.html" data-type="entity-link" >DetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OpenComponent.html" data-type="entity-link" >OpenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RestoreComponent.html" data-type="entity-link" >RestoreComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent-1.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TransactionsComponent.html" data-type="entity-link" >TransactionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WalletNewComponent.html" data-type="entity-link" >WalletNewComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PaginatorOptions.html" data-type="entity-link" >PaginatorOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatorOptionsInterface.html" data-type="entity-link" >PaginatorOptionsInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletState.html" data-type="entity-link" >WalletState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseChartConfigService.html" data-type="entity-link" >BaseChartConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlockchainService.html" data-type="entity-link" >BlockchainService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartsEffects.html" data-type="entity-link" >ChartsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CryptService.html" data-type="entity-link" >CryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Effects.html" data-type="entity-link" >Effects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Effects-1.html" data-type="entity-link" >Effects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSystemService.html" data-type="entity-link" >FileSystemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSystemWebService.html" data-type="entity-link" >FileSystemWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkHashrateChart.html" data-type="entity-link" >NetworkHashrateChart</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsEffects.html" data-type="entity-link" >SettingsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletEffects.html" data-type="entity-link" >WalletEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletRpcService.html" data-type="entity-link" >WalletRpcService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletService.html" data-type="entity-link" >WalletService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebsocketService.html" data-type="entity-link" >WebsocketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebStorageService.html" data-type="entity-link" >WebStorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HeaderInterceptor.html" data-type="entity-link" >HeaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddAddressBook.html" data-type="entity-link" >AddAddressBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Balance.html" data-type="entity-link" >Balance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlockHeader.html" data-type="entity-link" >BlockHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChainGetInfo.html" data-type="entity-link" >ChainGetInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartConfigInterface.html" data-type="entity-link" >ChartConfigInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDifficulty.html" data-type="entity-link" >ChartDifficulty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartsState.html" data-type="entity-link" >ChartsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateWallet.html" data-type="entity-link" >CreateWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Destination.html" data-type="entity-link" >Destination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileSystemInterface.html" data-type="entity-link" >FileSystemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAddressBookOut.html" data-type="entity-link" >GetAddressBookOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetBulkPaymentsIn.html" data-type="entity-link" >GetBulkPaymentsIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetBulkPaymentsOut.html" data-type="entity-link" >GetBulkPaymentsOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPaymentsIn.html" data-type="entity-link" >GetPaymentsIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPaymentsOut.html" data-type="entity-link" >GetPaymentsOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTransfersIn.html" data-type="entity-link" >GetTransfersIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTransfersOut.html" data-type="entity-link" >GetTransfersOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Height.html" data-type="entity-link" >Height</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncomingTransfersIn.html" data-type="entity-link" >IncomingTransfersIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncomingTransfersOut.html" data-type="entity-link" >IncomingTransfersOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IntegratedAddress.html" data-type="entity-link" >IntegratedAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogEntry.html" data-type="entity-link" >LogEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogsState.html" data-type="entity-link" >LogsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MakeIntegratedAddressIn.html" data-type="entity-link" >MakeIntegratedAddressIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MakeUriIn.html" data-type="entity-link" >MakeUriIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalConfig.html" data-type="entity-link" >ModalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpenWallet.html" data-type="entity-link" >OpenWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParseUri.html" data-type="entity-link" >ParseUri</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PluginDefinition.html" data-type="entity-link" >PluginDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plugins.html" data-type="entity-link" >Plugins</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileState.html" data-type="entity-link" >ProfileState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryKeyIn.html" data-type="entity-link" >QueryKeyIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryKeyOut.html" data-type="entity-link" >QueryKeyOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RestoreWallet.html" data-type="entity-link" >RestoreWallet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SettingsState.html" data-type="entity-link" >SettingsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SplitIntegratedAddressOut.html" data-type="entity-link" >SplitIntegratedAddressOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoreOut.html" data-type="entity-link" >StoreOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepAllIn.html" data-type="entity-link" >SweepAllIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepAllOut.html" data-type="entity-link" >SweepAllOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SweepDustOut.html" data-type="entity-link" >SweepDustOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transactions.html" data-type="entity-link" >Transactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transfer.html" data-type="entity-link" >Transfer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferIn.html" data-type="entity-link" >TransferIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferOut.html" data-type="entity-link" >TransferOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferSplitIn.html" data-type="entity-link" >TransferSplitIn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransferSplitOut.html" data-type="entity-link" >TransferSplitOut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Uri.html" data-type="entity-link" >Uri</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserMeta.html" data-type="entity-link" >UserMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserOptions.html" data-type="entity-link" >UserOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersState.html" data-type="entity-link" >UsersState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WalletsState.html" data-type="entity-link" >WalletsState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/EffortPipe.html" data-type="entity-link" >EffortPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/EscapeHtmlPipe.html" data-type="entity-link" >EscapeHtmlPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/FromCoinPipe.html" data-type="entity-link" >FromCoinPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/HashLinkPipe.html" data-type="entity-link" >HashLinkPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/HashRatePipe.html" data-type="entity-link" >HashRatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/RemoveTrailingZerosPipe.html" data-type="entity-link" >RemoveTrailingZerosPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ShruggiePipe.html" data-type="entity-link" >ShruggiePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TimeAgoPipe.html" data-type="entity-link" >TimeAgoPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ToCoinPipe.html" data-type="entity-link" >ToCoinPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});