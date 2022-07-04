import { Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {WebsocketService} from "@service/websocket.service";
import {FileSystemService} from "@service/filesystem/file-system.service";
import {XMRBlockchainService} from '@module/chain/xmr/blockchain.service';

@Component({
  selector: 'xmr-chain-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class XMRStatusComponent implements OnInit, OnDestroy {
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

  constructor(
              private ws: WebsocketService,
              private fs: FileSystemService,
              public chain: XMRBlockchainService) {

  }

  async ngOnInit() {
  }


  async checkDownloads() {

    try {

      if (this.chain.config['dir'] == undefined) {

        this.downloadNeeded = true;
        //this.downloadProgress()
        this.downloaded = interval(1000).subscribe(
            async () => {
              if (await this.checkDownloaded()) {
                this.downloadNeeded = false;
               // await this.chain.startDaemon()
               // await this.chain.getInfo()
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
    return await this.fs.listFiles('cli/xmr').then(res => res.length) > 3;

  }

  async startDownload() {
    await this.chain.downloadDaemons()
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


  /**
   * Toggles the setting start_on_boot and stops a current running node (soon[tm])
   */
  public async toggleStart() {
    //this.isSelected = !this.isSelected;

  }

  public ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
    if(this.sub2) this.sub2.unsubscribe();
  }
}
