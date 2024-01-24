import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustproserviceService {
  baseUrl='http://localhost:8083';
  
  constructor(private http:HttpClient) { }

  getOneCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/c/getCustomer/${id}`);
  

  }

  createProduct(product: Object): Observable<Object> {
    console.log(product);
    return this.http.post(`${this.baseUrl}/c/addProduct`, product);
  }


  getAllProducts():any
  {
    return this.http.get(`${this.baseUrl}/c/getAllProduct`);
  }

  createCustomer(customer: Object): Observable<Object> {
    console.log(customer);
    return this.http.post(`${this.baseUrl}/c/addCustomer`, customer);
  }

}
