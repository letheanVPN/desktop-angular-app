import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {FlexModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from '@module/user/auth/auth.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ConsoleModule} from '@module/system/console/console.module';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthService} from '@module/user/auth/auth.service';
import {HeaderInterceptor} from '@module/user/auth/auth.interceptor';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {UiKitModule} from "@ui/ui-kit.module";
import {ThemeModule} from "@ui/@theme/theme.module";
import {CoreModule} from "@ui/@core/core.module";
import {
	NbDatepickerModule,
	NbDialogModule,
	NbMenuModule,
	NbSidebarModule,
	NbToastrModule,
	NbWindowModule
} from "@nebular/theme";
import {TreeModule} from "@circlon/angular-tree-component";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

export function tokenGetter() {
	return AuthService.token["access_token"];
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		BrowserModule.withServerTransition({appId: 'lthn-data-sync'}),
		BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ["localhost:36911", "127.0.0.1:36911"],
			},
		}),
		AppRoutingModule,
		MatSidenavModule,
		MatIconModule,
		MatDividerModule,
		MatListModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule,
		MatTooltipModule,
		FlexModule,
		AuthModule,
		FontAwesomeModule,
		ConsoleModule,
		NbSidebarModule.forRoot(),
		NbMenuModule.forRoot(),
		NbDatepickerModule.forRoot(),
		NbDialogModule.forRoot(),
		NbWindowModule.forRoot(),
		NbToastrModule.forRoot(),
		CoreModule.forRoot(),
		ThemeModule.forRoot(),
		UiKitModule,
		TreeModule
	],
	bootstrap: [AppComponent],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
	]
})
/**
 * Application shell/bootstrap
 */
export class AppModule {
	constructor(library: FaIconLibrary) {
		// Add multiple icons to the library
		library.addIconPacks(fas, fab, far);
	}
}
