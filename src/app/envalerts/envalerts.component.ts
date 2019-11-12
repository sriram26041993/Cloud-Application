import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { NgNoValidate } from '@angular/forms/src/directives/ng_no_validate_directive';

@Component({
  selector: 'app-envalerts',
  templateUrl: './envalerts.component.html',
  styleUrls: ['./envalerts.component.css']
})



export class EnvalertsComponent implements OnInit {
  
  response: any;
  windspeedresult:number;
  Dewpointresult:number;
  windspeedmessage: string="";
  Dewpointmessage: string="";
   
  constructor(private weatherapi:ApiService){}
 
  ngOnInit() {
     this.weatherapi.getapiweather()
     .subscribe((response)=>{
      this.response= response;
      console.log(response)
      this.windspeedresult=this.response[0].Wind.Speed.Imperial.Value;
      this.Dewpointresult=this.response[0].DewPoint.Imperial.Value;
      if (this.windspeedresult > 10.0)
             {
                this.windspeedmessage = "Dont go outside,you will fly away with wind!"
             }
             else{
              this.windspeedmessage = "Windspeed is in comfortabe range, can go outside."
             }
      if (this.Dewpointresult > 65.0)
            {
              this.Dewpointmessage = "Go out to seee the gof and snow"
            }
             else{
              this.Dewpointmessage = "Dewpoint is in comfortabe range, can go outside."
            }
  })
  
  }}

