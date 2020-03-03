import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantAddComponent } from './merchant-add/merchant-add.component';
import { MerchantGetComponent } from './merchant-get/merchant-get.component';
import { MerchantUpdateComponent } from './merchant-update/merchant-update.component';
import { MerchantsService } from './merchants.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MerchantAddComponent,
    MerchantGetComponent,
    MerchantUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MerchantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
