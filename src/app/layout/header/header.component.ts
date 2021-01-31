import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,OnChanges{
  @Input() cartArray: Product[] = [];

  
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.productAdded.subscribe(
      (res)=>{

        //handling the response!!
        this.cartArray.push(res);
        
      
      },
      (err)=>{console.error(err)},
      (completed)=>{console.log("hamadacompleted");}
      
       );
  }
  ngOnChanges(){}

  changeCurrentPage(d:string){

    this.productService.currentPage = d;


  }
  calculateTotalAmount():number{
    let total = 0; 
    for (let i = 0; i < this.cartArray.length; i++) {
      const product = this.cartArray[i];
      total +=product.discount?product.price-product.discount:product.price;
    }
    return total;

  }

}
