import { Injectable, OnInit  } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
 
 
  constructor(private http: HttpClient) { }
 
  
  getapiweather() {

    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/7910_PC?apikey=IS16rGyGjCyvf6NT430MtjP54S6vcjVJ%20&language=en-us&details=true')        
  }
}
