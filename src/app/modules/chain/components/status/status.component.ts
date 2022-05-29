import { Component, OnInit } from '@angular/core';
import {BlockchainService} from "@module/chain/blockchain.service";
import {interval} from "rxjs";

@Component({
  selector: 'lthn-chain-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  isFocused: boolean = false;
  isSelected: boolean = false;
  chainInfo: any;

  constructor(public chain: BlockchainService) { }

  async ngOnInit() {
    await this.chain.getInfo()
    this.isSelected = this.chain.chainInfo !== undefined
   interval(5000).subscribe(async () => {
     this.chainInfo = await this.chain.getInfo()
     this.isSelected = this.chainInfo !== undefined
   });

    console.log()
  }

  importChain() {

  }

  exportChain() {

  }
}
