import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReviewComponent} from './review/review/review.component'
import { ReviewdetailComponent} from './reviewdetail/reviewdetail/reviewdetail.component'
import { ReviewsdataComponent} from './reviews/reviewsdata/reviewsdata.component'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { OrdersComponent } from './Orders/orders/orders.component'
import { OrderdetailComponent } from './orderdetail/orderdetail/orderdetail.component'
import { OrderstatusComponent } from './orderstatus/orderstatus/orderstatus.component'
import { ShippmentdetailComponent } from './shippment/shippmentdetail/shippmentdetail.component'


@NgModule({
  bootstrap: [
    AppComponent
  ],

  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIListViewModule,
  ],

  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewdetailComponent,
    ReviewsdataComponent,
    OrdersComponent,
    OrderdetailComponent,
    OrderstatusComponent,
    ShippmentdetailComponent
  ],

  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
