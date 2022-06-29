import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from "rxjs";
import {XmrigService} from '@module/mining/xmrig/xmrig.service';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';

@Component({
  selector: 'lthn-xmrig-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class XmrigStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  isFocused: boolean = false;
  isSelected: boolean = false;
  chainInfo: any;
  authNeeded = false;
  downloadNeeded = true;
  downloaded: Subscription;
  downloadStats: {
    file: string,
    dir: string,
    fullPath: string,
    size: number,
    total: number,
  } = {
    file: undefined,
    dir: undefined,
    fullPath: undefined,
    size: 0,
    total: 0
  }
  public config: any;
  public downloads: any;

  private sub: Subscription;
  private sub2: Subscription;

  constructor(private  xmrig: XmrigService,  private notificationService: NotificationService) {

  }

  async ngOnInit() {}


  async ngAfterViewInit() {

    this.config = await this.xmrig.checkInstallConfig()

    if(this.config['dir'] == undefined){
      this.downloadNeeded = true
      this.downloads = await this.xmrig.fetchRelease()
    }else{
      this.downloadNeeded = false
    }

  }
  async downloadXmrig(id: string) {
    await this.xmrig.downloadXmrig(id)
    await this.xmrig.setInstallConfig({id: id, version: this.downloads.version, dir: `xmrig-${this.downloads.version}`})
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Download Requested!',
      body: id
    })
  }

  /**
   * Toggles the setting start_on_boot and stops a current running node (soon[tm])
   */
  public async toggleStart() {
    //this.isSelected = !this.isSelected;


  }

  public async startXmrig() {
    await this.xmrig.startXmrig()
    this.notificationService.create({
      type: NotificationType.html,
      styleType: NotificationStyleType.success,
      title: 'Xmrig started!',
      body: "Make it so"
    })
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
