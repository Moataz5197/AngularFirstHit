import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable()

export class ProductService{

    currentPage="listing";

    private products:Product[] = [

        /* {id:0,data:[{name:'photo x ',description:"hahahahaa"}],price:125,discount:50, category:{id:1,name:"Arts & Crafts"},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:1,data:[{name:'photoCamera ',description:"hahahahaa"}],price:225,discount:30,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:2,data:[{name:'photo-s ',description:"hahahahaa"}],price:1250,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:3,data:[{name:'photo-xs ',description:"hahahahaa"}],price:1325,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:4,data:[{name:'photo-ss ',description:"hahahahaa"}],price:1525,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:5,data:[{name:'photo-y ',description:"hahahahaa"}],price:6125,discount:50,category:{id:7},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:6,data:[{name:'photo-xy ',description:"hahahahaa"}],price:9125,discount:50,category:{id:8},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:7,data:[{name:'photo ',description:"hahahahaa"}],price:12500,discount:50,category:{id:9},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:8,data:[{name:'photo-help ',description:"hahahahaa"}],price:12555,discount:50,category:{id:2},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:9,data:[{name:'photo-help-me ',description:"hahahahaa"}],price:9125,discount:50,category:{id:3},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:10,data:[{name:'photo-help-me-plz ',description:"hahahahaa"}],price:12500,discount:50,category:{id:4},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:11,data:[{name:'photo x ',description:"hahahahaa"}],price:12555,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:12,data:[{name:'photo x ',description:"hahahahaa"}],price:9125,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:13,data:[{name:'photo x ',description:"hahahahaa"}],price:12500,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']},
        {id:14,data:[{name:'photo x ',description:"hahahahaa"}],price:12555,discount:50,category:{id:5},imagesUrls:['../../../../assets/img/placeholder.png']} */
    ];
    
    productAdded = new EventEmitter<Product>();

    baseUrl = "https://mearn-stack-backend-test.herokuapp.com/";

    constructor(private httpClient : HttpClient){




    }


    getAllProducts(){
        return this.httpClient.get(`${this.baseUrl}product`);
        //return this.products.slice()  //clone??  no clone  so using slice



    }

    //unknown vs any datatype ?  any may return once string or number but unknown once declared can't be changed
    getProductByID(id){

        //return this.products.find(p=>p.id === id );
        return this.httpClient.get(`${this.baseUrl}product/${id}`);
    }
    addProduct(product){
        /* const id = this.products.length;
        const newProduct: Product = {id,data:product.data,price:product.price,discount:product.discount,category:product.category,imagesUrls:product.imagesUrls,paymentTypes:product.paymentTypes,tags:product.tags}
        this.products.push(newProduct);
        console.log(this.products); */

        let body = {
            discount: product.discount,
            price: product.price,
            imagesUrls: product.imagesUrls,
            data: product.data,
            categoryId: product.category.id
        };
        /* const token = localStorage.getItem('token');
        console.log(token);
        const headers = new HttpHeaders({authorization:token}) */

        return this.httpClient.post(`${this.baseUrl}product/add`,body);
    }
    updateProduct(product:Product){
        const index = this.products.findIndex(p=>p.id===product.id);

        this.products[index] = {id:product.id,data:product.data,price:product.price,discount:product.discount,category:product.category,imagesUrls:product.imagesUrls,paymentTypes:product.paymentTypes,tags:product.tags}

    }
    deleteProduct(id:number){

        const index = this.products.findIndex(p=>p.id===id);
        this.products.splice(index,1);
    }
    searchByName(searchInput:string){
        const prodname =  searchInput.toLowerCase()
        return this.products.filter(p=>p.data[0].name.toLowerCase().includes(prodname));
    }


}