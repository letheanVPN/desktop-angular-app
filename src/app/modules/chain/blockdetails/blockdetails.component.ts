import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ChainGetInfo} from "@module/chain/interfaces/props/get_info";
import {select, Store} from "@ngrx/store";
import {getChainInfo} from "@module/chain/data";
import {ActivatedRoute} from "@angular/router";
import {BlockchainService} from "@module/chain/blockchain.service";
import {BlockHeader} from "@module/chain/interfaces/types/blockHeader";

@Component({
  selector: 'lthn-app-blockdetails',
  templateUrl: './blockdetails.component.html',
  styleUrls: ['./blockdetails.component.scss']
})
export class BlockdetailsComponent implements OnInit, OnDestroy {
  public chainInfo: Observable<ChainGetInfo>;
  blockID: string;
  sub: Subscription;
  block: BlockHeader;
  constructor( private store: Store,
               private route:ActivatedRoute,
               private chain: BlockchainService) { }

  ngOnInit(): void {
    this.chainInfo = this.store.pipe(select(getChainInfo))
    this.route.params.subscribe( params => {
      this.blockID = params['id']
      this.sub = this.chain.getBlock(this.blockID).subscribe((data) => {
        this.block = data.result['block_header']
      })
    }
  )

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
