import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  relatedProducts:Product[]=[];
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //this.relatedProducts = this.productService.getAllProducts().slice(3,7); //4->6
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id = params.id;
        this.productService.getProductByID(id).subscribe(


          (response)=>{
            console.log(response);
            this.product = response;
          },
          (err)=>{},
          ()=>{}
        );
        this.productService.getAllProducts().subscribe(

          (response)=>{

            this.relatedProducts = response['product'].slice(4,8);
          },
          (err)=>{},
          ()=>{}
        );

      },
      ()=>{},
      ()=>{}
    );
    
    
  }

}
