import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DockerComponent} from '@module/docker/docker.component';

const routes: Routes = [
	{
		path: 'docker',
		component: DockerComponent,
		data: {
			title: 'view.wallets.title',
			heading: 'view.wallets.heading',
			description: 'view.wallets.description',
			robots: false
		}
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DockerRoutingModule {
}
