import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DockerComponent} from '@module/docker/docker.component';
import {AppsComponent} from "@module/apps/apps.component";

const routes: Routes = [
	{
		path: 'apps',
		component: AppsComponent,
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppsRoutingModule {
}
