import { Component, OnInit } from '@angular/core';
import {WalletService} from '@module/wallet/wallet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lthn-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  name: string
  balance:any
  constructor(private wallet: WalletService, private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.wallet.openWallet({filename: this.name, password: 'test'}).then(async (data) => {
      console.log(data)
      this.balance = await this.wallet.getBalance()
    }).catch((err) => console.error(err))

  }

}
