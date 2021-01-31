import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Product} from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  //@Output() productAded = new EventEmitter<Product>();
  pageNumbers:number[] = [];
  pageSize:number = 9;
  currentPage:number = 0;
  constructor(private productService:ProductService) {
    //this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response)=>{

         this.products = response['product'];
         this.calculatePageNumber(response['numberOfProducts']);

        
      },
      (err)=>{console.log(err);},
      ()=>{}


    );
    
   }

  ngOnInit(): void {
    
    
  }
  /* subscribFunction(object:Product){

    this.productService.productAdded.emit(object); useless
  } */
  getSlicedArrayOfProducts(){
    const start = this.currentPage*this.pageSize;
    return this.products.slice(start,start+9);
  }
  calculatePageNumber(length){
    this.pageNumbers=[];
    for (let index = 0; index < length/this.pageSize; index++) {
      
      this.pageNumbers.push(index+1);
    }
  }

  onSearchHandler(searchInput){

    this.products = this.productService.searchByName(searchInput.value);
    this.calculatePageNumber(this.products.length);
    
    


  }

}
