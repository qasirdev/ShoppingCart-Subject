import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { OrderslistComponent } from './customers/orderslist/orderslist.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './shared/shared.module';
import { DataService, throwIfAlreadyLoaded } from './core';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerslistComponent,
    OrderslistComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AppModule');
  }
 }
