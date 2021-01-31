import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }
  

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      let reqClone;
      const token = localStorage.getItem('token');

      if(token){
       reqClone = req.clone({headers:req.headers.append('authorization',token)})
      //req.headers.append('authorization',token);
      
      }
      else{
        reqClone = req;
      }
      return next.handle(reqClone);

    }
  
}
