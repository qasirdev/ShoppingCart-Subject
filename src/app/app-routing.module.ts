import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { OrderslistComponent } from './customers/orderslist/orderslist.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo : '/customers'},
  {path: 'customers', component: CustomersComponent,
    children : [
      {path : 'customersList', component: CustomerslistComponent},
      {path: 'ordersList', component: OrderslistComponent
      // , canActivate: [AuthGuard]
      }
    ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
