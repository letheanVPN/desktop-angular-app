import { Component, OnInit } from '@angular/core';
import { StepperPosition } from '@swimlane/ngx-ui';
import {AppConfigService} from '@service/app-config.service';
import {FileSystemService} from '@service/filesystem/file-system.service';
import {BlockchainService} from '@module/chain/blockchain.service';
import {interval, Subscription} from 'rxjs';
@Component({
  selector: 'lthn-app-bootstate',
  templateUrl: './bootstate.component.html',
  styleUrls: ['./bootstate.component.scss']
})
export class BootstateComponent implements OnInit {

  readonly StepperPosition = StepperPosition;
  readonly steps: Array<{ readonly title: string; readonly icon?: string; readonly completeIcon?: string }> = [
    { title: 'app.boot.server-check', icon: 'ngx-icon ngx-server' },
    { title: 'app.boot.folder-check', icon: 'ngx-icon ngx-folder' },
    { title: 'app.boot.download-check', icon: 'ngx-icon ngx-cloud-download' },
    { title: 'app.boot.start-runtime', icon: 'ngx-icon ngx-workstation' }
  ];
  index = 0;
  readonly = true;
  position = StepperPosition.Top;

  authNeeded = false;
  downloadNeeded = false;
  downloaded: Subscription;
	serverCheck: Subscription;

  constructor(private app: AppConfigService, private fs: FileSystemService, private chain: BlockchainService) { }

  async ngOnInit() {

	  this.serverCheck = interval(2000).subscribe(
		  async () => {
			  if (await this.checkServerAlive()) {
				  this.next();

				  this.serverCheck.unsubscribe();
				  if(await this.checkFolderStructure()){
					  this.next()
				  }

				  this.downloaded = interval(2000).subscribe(
					  () => {
						  if(this.checkDownloaded(this)){
							  this.next()
							  this.downloaded.unsubscribe()

						  }
					  }
				  );

				  console.log('check')

				  if(await this.checkDownloads()){
					  this.next()
				  }else{
					  return
				  }
				  try {
					  await this.app.fetchServerPublicKey()

					  await this.app.loadConfig('conf/app.ini')

					  if(this.app.getConfig('daemon', 'start_on_boot', true)){
						  await this.chain.startDaemon();
					  }
				  } catch (e) {
					  console.log(e)
				  }

				  this.app.online = true

			  }
		  }
	  );





  }

  next() {
    if (this.index < this.steps.length - 1) {
      this.index++;
    }
  }

  async checkServerAlive() {
    try{
      console.log('check')
      await this.app.fetchServerPublicKey();
    }catch (e) {
      return false;
    }
    return true;

  }
  async checkFolderStructure() {
    try{
      if(!await this.fs.isDir('conf')){
        await this.fs.mkDir('conf');
        await this.app.makeDefault()
      }
      if(!await this.fs.isDir('data')){
        await this.fs.mkDir('data');
      }
      if(!await this.fs.isDir('users')){
        await this.fs.mkDir('users');
      }
      if(!await this.fs.isDir('wallets')){
        await this.fs.mkDir('wallets');
      }

    }catch (e) {
      if ('HttpErrorResponse' === e.name) {
        if (e.status === 401) {
          this.authNeeded = true
        }
      }
      return false;
    }
    return true;

  }

  async checkDownloads() {
    try{

      if(!await this.fs.isDir('cli')){
        await this.fs.mkDir('cli');
        return false
      }

      if(await this.fs.listFiles('cli') < 3){
        this.downloadNeeded = true
        this.chain.downloadDaemons().then(() => console.log('daemons downloaded'));
        return false
      }


    }catch (e) {
      if ('HttpErrorResponse' === e.name) {
        if (e.status === 401) {
          this.authNeeded = true

        }
      }
      return false;
    }
    return true;

  }

  async checkDownloaded(that: BootstateComponent) {

   return await that.fs.listFiles('cli') > 3

  }
}

