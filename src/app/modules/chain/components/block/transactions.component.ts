import {Component, Input} from '@angular/core';

@Component({
	selector: 'lthn-chain-block-transactions',
	templateUrl: './transactions.component.html'
})
export class BlockTransactionsComponent  {


	@Input() public blockData: any;


}
