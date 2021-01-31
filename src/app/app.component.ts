import { Component, DoCheck, OnInit, Output } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'my-app2';
  productsArray : Product[]=[];
  currentPage:string ='';

  constructor(private productService:ProductService){


  }
  ngDoCheck():void{
    this.currentPage = this.productService.currentPage;

  }
  addToCartAtHeader(product:Product){

    this.productsArray.push(product);
  }
}
