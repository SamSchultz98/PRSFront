import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl:string="http://localhost:5050/api/Products"
  prods:Product[]=[];
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>
  }

  get(id:number): Observable<Product>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>
  }

  create(prod:Product): Observable<Product>{
    return this.http.post(`${this.baseurl}`, prod) as Observable<Product>
  }
  change(prod:Product): Observable<Product>{
    return this.http.put(`${this.baseurl}/${prod.id}`, prod) as Observable<Product>
  }
  remove(id:number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }

}