import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../_model/person';
import {HttpClient} from "@angular/common/http";
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private HttpClient :HttpClient) {


   }

  baseUrl = "https://mearn-stack-backend-test.herokuapp.com/";

  register(person:Person){


    return this.HttpClient.post(`${this.baseUrl}user/register`,person);

  }
  login(person:Person){

    return this.HttpClient.post(`${this.baseUrl}user/login`,{email:person.email,password:person.password});

    
  }
  
  isAuthenticated():boolean{

    if(localStorage.getItem('token')){console.log("true") ; return true; }
    else{return false;}
  }

}
