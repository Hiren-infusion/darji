import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { OrderdetailComponent } from './orderdetail/orderdetail/orderdetail.component';
import { OrdersComponent } from './Orders/orders/orders.component';
import { OrderstatusComponent } from './orderstatus/orderstatus/orderstatus.component';

import { ReviewComponent } from './review/review/review.component'
import { ReviewdetailComponent } from './reviewdetail/reviewdetail/reviewdetail.component';
import { ReviewsdataComponent } from './reviews/reviewsdata/reviewsdata.component';
import { ShippmentdetailComponent } from './shippment/shippmentdetail/shippmentdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/shippementdetail', pathMatch: 'full' },
  { path: 'review', component: ReviewComponent},
  { path: 'reviewdetail', component: ReviewdetailComponent},
  { path: 'reviewsdata', component: ReviewsdataComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'orderdetail', component: OrderdetailComponent},
  { path: 'orderstatus', component: OrderstatusComponent},
  { path: 'shippementdetail', component: ShippmentdetailComponent},


];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
