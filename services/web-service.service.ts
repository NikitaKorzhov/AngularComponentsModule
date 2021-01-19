import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  private headers: HttpHeaders;
  constructor(private http:HttpClient) { this.initHeaders();}

  auntUser(url,userName,password):Observable<any>{
    console.log(url)
    return  this.http.post(url,{userName,password})
    
  }

  private initHeaders() {
    this.headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
  }

}
