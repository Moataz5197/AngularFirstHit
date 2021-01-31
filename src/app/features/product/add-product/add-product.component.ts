import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product = {data:[{}],paymentTypes:[],tags:[],category:{}};
  paymentTypes:PaymentType[] = [];
  productCategory:ProductCategory[]=[];
  isOnSale:boolean;
  editMode:boolean = false;
  
  constructor(
    private paymentTypeService : PaymentTypeService,
    private productCategoryService: ProductCategoryService,
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router: Router
     ) {

    
   }

  ngOnInit(): void {
    // this is supposed to be if xDDD
    this.editMode =  this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'edit' && true; // wow :D
    if(this.editMode){
      const id = parseInt(this.activatedRoute.snapshot.params.id,10); // eli rage3 dh string
    
      //console.log(this.productService.getProductByID(id));
      this.productService.getProductByID(id).subscribe(
        (response)=>{

          this.product = response['product'];
        },
        (err)=>{},
        ()=>{}
      );

    }
    
    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllProductCategory();

  }
  onSubmit(form){

    for(let i = 0 ; i < this.paymentTypes.length ; i++){

      if(form.value["check_"+i]){

        this.product.paymentTypes.push(this.paymentTypes[i]);
      }
    }

    this.productService.addProduct(this.product).subscribe(

      (respond)=>{

        console.log(respond);
        this.router.navigate(['/product','listing']);
      },
      (err)=>{console.log(err)},
      ()=>{}
    );
    console.log(this.product);
  }

  onTagAdded(input){

    this.product.tags.push({name:input.value});
    input.value ='';

  }

  removeTag(target){
    
    const index = this.product.tags.indexOf(target);
    
    this.product.tags.splice(index,1);
  }
  

}
