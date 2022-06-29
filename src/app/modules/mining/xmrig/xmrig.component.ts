import { Component, OnInit } from '@angular/core';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';
import {XmrigService} from '@module/mining/xmrig/xmrig.service';

@Component({
  selector: 'lthn-app-xmrig',
  templateUrl: './xmrig.component.html',
  styleUrls: ['./xmrig.component.scss']
})
export class XmrigComponent implements OnInit {

  constructor(private xmrig: XmrigService, private notificationService: NotificationService) { }

  public config: any;
  public downloads: any;

  async ngOnInit() {
    await this.setInstallConfig()
    this.config = await this.xmrig.checkInstallConfig()
  }

  async setInstallConfig() {

    await this.xmrig.setInstallConfig({'version': '6.18.0'})
  }

  async fetchRelease() {

    this.downloads = await this.xmrig.fetchRelease()

  }


  async downloadXmrig(id: string) {
    await this.xmrig.downloadXmrig(id)
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Download Requested!',
      body: id
    })
  }

}
