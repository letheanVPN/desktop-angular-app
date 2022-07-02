import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HashVaultService} from '@module/mining/hashvault/hashvault.service';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'lthn-app-hashvault',
  templateUrl: './hashvault.component.html',
  styleUrls: ['./hashvault.component.scss']
})
export class HashvaultComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  @Input() wallet: string = ''
  public poolInfo: any;

  constructor(public HashVault: HashVaultService) {

  }

  async ngOnInit() {

    this.poolInfo = await this.HashVault.getWalletStats(this.wallet)
    this.sub = interval(30000).subscribe(async () => {
      this.poolInfo = await this.HashVault.getWalletStats(this.wallet)
      console.log(this.poolInfo)

    });



  }
  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }




}
