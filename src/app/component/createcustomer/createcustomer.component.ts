import { Component } from '@angular/core';
import { CustproserviceService } from '../../service/custproservice.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer';
import { Product } from '../../model/product';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent {

  custo=new Customer();
  public products: Observable<Product[]> =of([]);
 
  constructor(private service:CustproserviceService,
    private router: Router) {
    
      
     }


     ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.products = this.service.getAllProducts();
    }

    addItemProduct(id:string)
    {
      this.products.pipe(
        map(productList => productList[Number(id)])
      ).subscribe(
        selectedProduct => {
          this.custo.products.push(selectedProduct);
        }
      );
      
    }

    onSubmit()
    {
      this.save();
    }
  
    save()
    {
      console.log(this.custo);
      this.service.createCustomer(this.custo).subscribe();
  }
}
