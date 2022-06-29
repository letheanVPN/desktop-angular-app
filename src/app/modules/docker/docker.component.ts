import { Component, OnInit } from '@angular/core';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

@Component({
  selector: 'lthn-app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  public containers = [];
  constructor(private notificationService: NotificationService) { }

  async ngOnInit() {

    const containers = await fetch('http://localhost:36911/docker/containers', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    this.containers = await containers.json()
    console.log(this.containers)
  }

  async startContainer(containerId) {

     await fetch('http://localhost:36911/docker/containers/start', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: containerId})
    })
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Start Requested!',
      body: containerId
    })
  }
  async stopContainer(containerId) {

    const containers = await fetch('http://localhost:36911/docker/containers/stop', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: containerId})
    })
    //this.containers = await containers.json()
    console.log( await containers.json())
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Stop Requested!',
      body: containerId
    })
  }
  async restartContainer(containerId) {

    const containers = await fetch('http://localhost:36911/docker/containers/stop', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: containerId})
    })
    //this.containers = await containers.json()
    console.log( await containers.json())
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Restart Requested!',
      body: containerId
    })
  }

}
