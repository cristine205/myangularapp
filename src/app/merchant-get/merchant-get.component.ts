import { Component, OnInit } from '@angular/core';
import Merchant from '../Merchant';
import { MerchantsService } from '../merchants.service';

@Component({
  selector: 'app-merchant-get',
  templateUrl: './merchant-get.component.html',
  styleUrls: ['./merchant-get.component.css']
})
export class MerchantGetComponent implements OnInit {

  merchants: Merchant[];
  constructor(private ps: MerchantsService) { }

  ngOnInit() {
    this.ps
      .getMerchants()
      .subscribe((data: Merchant[]) => {
        this.merchants = data;
    });
  }

  // merchant-get.component.ts

  deleteMerchant(id) {
    this.ps.deleteMerchant(id).subscribe(res => {
      this.merchants.splice(id, 1);
    });
  }
}