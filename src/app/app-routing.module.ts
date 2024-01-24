import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductaddComponent } from './component/productadd/productadd.component';
import { CreatecustomerComponent } from './component/createcustomer/createcustomer.component';

const routes: Routes = [
  {
    path:'add',
    component:ProductaddComponent
  },
  {
    path:'addCustomer',
    component: CreatecustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
