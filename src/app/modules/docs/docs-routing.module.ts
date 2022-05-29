import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DocsComponent} from "@module/docs/docs.component";

const routes: Routes = [
	{
		path: 'docs',
		component: DocsComponent,
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	}

];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DocsRoutingModule {
}
