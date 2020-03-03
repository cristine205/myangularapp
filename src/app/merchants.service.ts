
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  uri = 'http://localhost:4000/merchants';

  constructor(private http: HttpClient) { }

  addMerchant(MerchantName, MerchantCategory, MerchantPhoneNo) {
    console.log(MerchantName, MerchantCategory, MerchantPhoneNo);
    const obj = {
      MerchantName,
      MerchantCategory,
      MerchantPhoneNo
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getMerchants() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editMerchant(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  deleteMerchant(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
