import { Component,EventEmitter,Input ,OnChanges,OnInit, Output } from '@angular/core';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import {Product} from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit , OnChanges {

  @Input() product : Product;
  //@Output() itemAdded =  new EventEmitter<Product>(); no need for that we will use services
  

  constructor(private productService: ProductService) { 
    
    
  }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    // remember hooks and component life cycle and b4 anyhooks get started only constructor called :D
    //this.product = {name:'photo',price:125,discount:50,imgUrl:'../../../../assets/img/placeholder.png'}
  }

  addedToCart(){

    //this.itemAdded.emit(this.product);
    this.productService.productAdded.emit(this.product);

  }

  

}
