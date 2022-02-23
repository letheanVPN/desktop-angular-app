import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from 'src/app/modules/content/post/post.component';
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from '@pipe/pipes.module';
import {MatListModule} from '@angular/material/list';
import {ReactiveComponentModule} from '@ngrx/component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
	declarations: [PostComponent],
	exports: [
		PostComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		PipesModule,
		MatListModule,
		ReactiveComponentModule,
		MatButtonModule
	]
})
export class PostModule {
}
