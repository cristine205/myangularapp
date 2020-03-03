import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantAddComponent } from './merchant-add/merchant-add.component';
import { MerchantUpdateComponent } from './merchant-update/merchant-update.component';
import { MerchantGetComponent } from './merchant-get/merchant-get.component';

const routes: Routes = [
  {
    path: 'merchant/create',
    component: MerchantAddComponent
  },
  {
    path: 'edit/:id',
    component: MerchantUpdateComponent
  },
  {
    path: 'merchants',
    component: MerchantGetComponent
  }
];

@NgModule({
  imports: [
	     RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
