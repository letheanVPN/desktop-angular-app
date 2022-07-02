import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {XmrigService} from '@module/mining/xmrig/xmrig.service';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';
import {Router} from '@angular/router';

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


  constructor(private  xmrig: XmrigService,  private notificationService: NotificationService, private router: Router) {

  }

  async ngOnInit() {}


  async ngAfterViewInit() {

    try{
      this.config = await this.xmrig.checkInstallConfig()

    }catch (e) {

    }

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
    await this.router.navigateByUrl('/')
  }

  /**
   * Toggles the setting start_on_boot and stops a current running node (soon[tm])
   */
  public async toggleStart() {
    //this.isSelected = !this.isSelected;


  }


  public ngOnDestroy(): void {
//    this.sub.unsubscribe();
//    this.sub2.unsubscribe();
  }
}
