import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from '@module/chain/wallet/wallet.service';

@Component({
  selector: 'lthn-wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
  @Input() name?: string = '';
  balance:any
  constructor(public wallet: WalletService) {


  }

  public ngOnInit(): void {
    this.wallet.getBalance()
  }


}
