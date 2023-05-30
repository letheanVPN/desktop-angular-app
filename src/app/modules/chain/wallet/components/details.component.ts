import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from '@module/chain/wallet/wallet.service';

@Component({
  selector: 'lthn-wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
  @Input() name?: string = '';
  balance:any
  public transactions:any = []
  constructor(public wallet: WalletService) {


  }

  public ngOnInit(): void {
    this.wallet.getBalance()
    this.getTransactions().then(r => console.log(r))
  }

  public async getTransactions() {
    this.transactions = await this.wallet.loadTransfers({
      in: true,
      out: true,
      pending: true,
      failed: true,
      pool: true,
    }).then((data) => Object.values(data).flat());

  }


}
