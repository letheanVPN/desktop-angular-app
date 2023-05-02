import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';

const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  data: {layout: 'full'},
  children: [
    {
      path: 'calendar',
      component: CalendarComponent,
      data: {layout: 'full'}
    },
    {
      path: 'progress-bar',
      component: ProgressBarComponent,
      data: {layout: 'full'}
    },
    {
      path: 'spinner',
      component: SpinnerComponent,
      data: {layout: 'full'}
    },
    {
      path: 'alert',
      component: AlertComponent,
      data: {layout: 'full'}
    },
    {
      path: 'calendar-kit',
      component: CalendarKitFullCalendarShowcaseComponent,
      data: {layout: 'full'}
    },
    {
      path: 'chat',
      component: ChatComponent,
      data: {layout: 'full'}
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
