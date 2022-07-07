import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BlockchainService} from "@module/chain/blockchain.service";
import {interval, Subscription} from "rxjs";
import {WebsocketService} from "@service/websocket.service";
import {FileSystemService} from "@service/filesystem/file-system.service";
import {AppConfigService} from '@service/app-config.service';

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
  private sub2: Subscription;

  constructor(private app: AppConfigService,
              private ws: WebsocketService,
              private fs: FileSystemService,
              public chain: BlockchainService) {

  }

  async ngOnInit() {}


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
    const subject = this.ws.connect().subscribe((data) => {
      try{
        that.downloadStats = JSON.parse(atob(data[1]));
        if(this.downloadStats.total == this.downloadStats.size){
          subject.unsubscribe();
        }
      }catch (e){

      }


    })
    this.ws.sendMessage('daemon:download')

  }


  async ngAfterViewInit() {
    await this.checkDownloads()
    console.log('d',this.app.getConfig('app', 'start_on_boot', false, 'daemon') == 'true' )
    this.isSelected = this.app.getConfig('app', 'start_on_boot', false, 'daemon') == 'true'
    if (this.isSelected) {
      this.chain.startDaemon().catch(e => console.log(e))
      this.sub = interval(500).subscribe(async () => {
        this.chainInfo = await this.chain.getInfo()
        if(this.chainInfo.height > 0){
          this.sub.unsubscribe();
        }
        // this.isSelected = this.chainInfo !== undefined
      });

      this.sub2 = interval(15000).subscribe(async () => {
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



    this.app.setConfig('app', 'start_on_boot', !this.isSelected, 'daemon')
    this.app.saveConfig('app').catch(e => console.log(e))
    this.app.updateState('app')
    if (this.isSelected) {
      console.log('stop', this.isSelected)
      this.chain.stopDaemon()
      this.sub.unsubscribe();
      this.sub2.unsubscribe();
    } else {
      this.chain.startDaemon().catch(e => console.log(e))
      console.log('start', this.isSelected)
      this.sub = interval(1000).subscribe(async () => {
        this.chainInfo = await this.chain.getInfo()
        // this.isSelected = this.chainInfo !== undefined
      });
    }
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

	public async openLink() {
      await this.app.openLink("https://docs.lt.hn")
    }
}
