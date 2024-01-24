import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CustproserviceService } from '../../service/custproservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {

  product=new Product();
  constructor(private service:CustproserviceService,
    private router: Router) {
    
     }

  onSubmit()
  {
      this.save();
  }

  save()
  {
    this.service.createProduct(this.product).subscribe();
   
      this.gotoHomePage();
   
  }

  gotoHomePage(){
    this.router.navigate(['/']);
  }

}
