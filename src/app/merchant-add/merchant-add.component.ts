import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MerchantsService } from '../merchants.service';

@Component({
  selector: 'app-merchant-add',
  templateUrl: './merchant-add.component.html',
  styleUrls: ['./merchant-add.component.css']
})
export class MerchantAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: MerchantsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      MerchantName: ['', Validators.required ],
      MerchantCategory: ['', Validators.required ],
      MerchantPhoneNo: ['', Validators.required ]
    });
  }

  addMerchant(MerchantName, MerchantCategory, MerchantPhoneNo) {
    this.ps.addMerchant(MerchantName, MerchantCategory, MerchantPhoneNo);
  }

  ngOnInit() {
  }

}
