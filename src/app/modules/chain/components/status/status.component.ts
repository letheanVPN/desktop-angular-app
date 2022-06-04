import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BlockchainService} from "@module/chain/blockchain.service";
import {interval, Subscription} from "rxjs";
import {WebsocketService} from "@service/websocket.service";
import {FileSystemService} from "@service/filesystem/file-system.service";
import {AppConfigService} from '@service/app-config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'lthn-chain-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, AfterViewInit, OnDestroy {
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
  private sub: Subscription;

  constructor(private app: AppConfigService,
              private ws: WebsocketService,
              private fs: FileSystemService,
              private router: Router,
              public chain: BlockchainService) {

  }

  async ngOnInit() {




  }


  async checkDownloads() {

    try {

      if (await this.fs.listFiles('cli').then(res => res.length) < 3) {
        this.downloadNeeded = true;
        this.downloadProgress()
        this.downloaded = interval(1000).subscribe(
            async () => {
              if (await this.checkDownloaded()) {
                this.downloadNeeded = false;
                await this.chain.startDaemon()
                await this.chain.getInfo()
                this.downloaded.unsubscribe();


              }
            }
        );
        this.chain.downloadDaemons().then(() => console.log('done'))

        //return false;
      }else {
        this.downloadNeeded = false;
        return true;
      }

    } catch (e) {
      if ('HttpErrorResponse' === e.name) {
        if (e.status === 401) {
          this.authNeeded = true;
        }else{
          this.downloadNeeded = true
        }

      }
    }

    return



  }

  async checkDownloaded() {
    console.log('checking for cli');
    return await this.fs.listFiles('cli').then(res => res.length) > 3;

  }



  downloadProgress(){
    let that = this;
    console.log('ws')
    const subject = this.ws.connect().subscribe((data) => {
      console.log(data)
      that.downloadStats = JSON.parse(atob(data[1]));
      if(this.downloadStats.total == this.downloadStats.size){
        subject.unsubscribe();
      }
    })
    this.ws.sendMessage('daemon:download')

  }


  async ngAfterViewInit() {
    await this.checkDownloads()
    console.log('d',this.app.getConfig('app', 'start_on_boot', false, 'daemon').toLowerCase() )
    this.isSelected = this.app.getConfig('app', 'start_on_boot', false, 'daemon').toLowerCase() === 'true'
    if (this.isSelected) {
      await this.chain.startDaemon()
      this.sub = interval(5000).subscribe(async () => {
        this.chainInfo = await this.chain.getInfo()
        // this.isSelected = this.chainInfo !== undefined
      });
    }



  }

  /**
   * Toggles the setting start_on_boot and stops a current running node (soon[tm])
   */
  public async toggleStart() {
    //this.isSelected = !this.isSelected;

    if (this.isSelected) {
      console.log('stop', this.isSelected)
      await this.router.navigate(['/'])
    } else {
      console.log('start', this.isSelected)
      await this.router.navigate(['/'])
    }

    this.app.setConfig('app', 'start_on_boot', !this.isSelected, 'daemon')
    this.app.saveConfig('app').catch(e => console.log(e))
    this.app.updateState('app')
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
