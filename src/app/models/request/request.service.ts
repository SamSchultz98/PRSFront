import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl:string="http://localhost:5050/api/Requests"
  reqs:Request[]=[];

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>
  }

  get(id:number): Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>
  }

  create(req:Request): Observable<Request>{
    return this.http.post(`${this.baseurl}`, req) as Observable<Request>
  }
  change(req:Request): Observable<Request>{
    return this.http.put(`${this.baseurl}/${req.id}`, req) as Observable<Request>
  }
  remove(id:number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }
}
