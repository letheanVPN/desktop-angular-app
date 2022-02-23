import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SpartaComponent} from '@module/content/sparta/sparta.component';

const routes: Routes = [
	{
		path: 'sparta/:slug/:id',
		component: SpartaComponent
	}
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SpartaRoutingModule {}
