
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantsService } from '../merchants.service';

@Component({
  selector: 'app-merchant-update',
  templateUrl: './merchant-update.component.html',
  styleUrls: ['./merchant-update.component.css']
})
export class MerchantUpdateComponent implements OnInit {

  angForm: FormGroup;
  merchant: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: MerchantsService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      MerchantName: ['', Validators.required ],
      MerchantCategory: ['', Validators.required ],
      MerchantPhoneNo: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editMerchant(params['id']).subscribe(res => {
          this.merchant = res;
      });
    });
  }
}
