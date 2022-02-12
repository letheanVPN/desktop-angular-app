import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from 'src/app/modules/content/post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from '@pipe/pipes.module';

const routes: Routes = [
	{
		path: '',
		component: PostComponent
	},
	{
		path: '**',
		component: PostComponent
	}
];

@NgModule({
	declarations: [PostComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatCardModule,
		PipesModule
	]
})
export class PostModule {
}
