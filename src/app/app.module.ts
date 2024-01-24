import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerproductdetailsComponent } from './component/customerproductdetails/customerproductdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductaddComponent } from './component/productadd/productadd.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CreatecustomerComponent } from './component/createcustomer/createcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerproductdetailsComponent,
    ProductaddComponent,
    CreatecustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HttpClientModule,FormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
