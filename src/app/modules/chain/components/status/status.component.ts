import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BlockchainService} from "@module/chain/blockchain.service";
import {interval, Subscription} from "rxjs";
import {WebsocketService} from "@service/websocket.service";
import {FileSystemService} from "@service/filesystem/file-system.service";

@Component({
  selector: 'lthn-chain-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, AfterViewInit {
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

  constructor(public chain: BlockchainService,  private ws: WebsocketService, private fs: FileSystemService) { }

  async ngOnInit() {


    this.chain.startDaemon().catch((err) => console.log(err))


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
        this.chain.downloadDaemons().then(() => this.chain.startDaemon());

        //return false;
      }else {
        this.downloadNeeded = false
        await this.chain.startDaemon()
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

  importChain() {

  }

  exportChain() {

  }

  async ngAfterViewInit() {
    await this.checkDownloads()
    this.isSelected = this.chain.chainInfo !== undefined
    interval(5000).subscribe(async () => {
      this.chainInfo = await this.chain.getInfo()
      this.isSelected = this.chainInfo !== undefined
    });
  }
}
