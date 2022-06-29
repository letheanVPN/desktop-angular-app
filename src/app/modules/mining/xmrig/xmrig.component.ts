import { Component, OnInit } from '@angular/core';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

@Component({
  selector: 'lthn-app-xmrig',
  templateUrl: './xmrig.component.html',
  styleUrls: ['./xmrig.component.scss']
})
export class XmrigComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  public downloads: any;

  ngOnInit(): void {
  }

  async fetchRelease() {
    const containers = await fetch('http://localhost:36911/mining/xmrig/downloads', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    this.downloads = await containers.json()


  }


  async downloadXmrig(id: string) {
    const containers = await fetch('http://localhost:36911/mining/xmrig/download', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id})
    })
    //this.containers = await containers.json()
    console.log(await containers.json())
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Download Requested!',
      body: id
    })
  }

}
