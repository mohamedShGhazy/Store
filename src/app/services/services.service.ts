import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

 getPtoductsList() {
    return this.http.get(`https://fakestoreapi.com/products?limit=10`)
  }
  getPtoductDetails(Product_ID:any) {
    return this.http.get(`https://fakestoreapi.com/products/${Product_ID}`)
  }
  postMethod(body:any){
    return this.http.post(`https://fakestoreapi.com/products`,body)
  }

}
