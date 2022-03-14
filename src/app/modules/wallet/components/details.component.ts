import {Component, Input} from '@angular/core';
import {WalletService} from '@module/wallet/wallet.service';

@Component({
  selector: 'lthn-wallet-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent  {
  @Input() name?: string = '';
  balance:any
  constructor(public wallet: WalletService) {

  }


}
