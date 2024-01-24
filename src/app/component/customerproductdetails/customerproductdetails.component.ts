import { Component } from '@angular/core';
import { CustproserviceService } from '../../service/custproservice.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer';


@Component({
  selector: 'app-customerproductdetails',
  templateUrl: './customerproductdetails.component.html',
  styleUrl: './customerproductdetails.component.css'
})
export class CustomerproductdetailsComponent {
  constructor(private service: CustproserviceService,
    private router: Router) {
      
    }
    cust:Customer = new Customer();
    visit=false;
   // cust1: Observable<Customer> =of();
  customerDetails(id:string)
  {

    //this.cust1=this.service.getOneCustomer(Number(id));

    return this.service.getOneCustomer(Number(id)).subscribe(
      (data: Customer)=>{
        this.cust = data;
        console.log(data);
        console.log(this.cust);
        this.visit=true;
      })

  }

  addProduct(){
    this.router.navigate(['add']);
  }

  addCustomer()
  {
    this.router.navigate(['addCustomer']);
  }

}
