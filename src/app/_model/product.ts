import { PaymentType } from "./payment-type";
import { ProductCategory } from "./product-category";
import { ProductLang } from "./product-lang";
import { Tags } from "./tags";

export interface Product{
    _id?:string,
    id?:number,
    data:ProductLang[],
    price?:number,
    discount?:number,
    imagesUrls?:string[],
    paymentTypes?:PaymentType[],
    category?:ProductCategory
    tags?:Tags[]
}