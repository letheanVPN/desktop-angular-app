import { Component, OnInit } from '@angular/core';
import {TransferIn} from '@module/wallet/interfaces';
import {WalletService} from '@module/wallet/wallet.service';

@Component({
  selector: 'lthn-wallet-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent implements OnInit {

  transfer: TransferIn = {
    destinations: [
      {
        address: '',
        amount: 0
      }
    ],
    mixin: 5,
    unlock_time:0,
    get_tx_key: true,
    payment_id: undefined
  }

  constructor(public wallet: WalletService) { }

  ngOnInit(): void {
  }

}
