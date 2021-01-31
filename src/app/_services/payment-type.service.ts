import { Injectable } from '@angular/core';
import { PaymentType } from '../_model/payment-type';

@Injectable()
export class PaymentTypeService {

  paymentTypes:PaymentType[]=[

    {id:1,name:"Direct BankTransfer"},
    {id:2,name:"Cheque Payment"},
    {id:3,name:"Paypal"},
    {id:4,name:"Visa"},
    {id:5,name:"Mastercard"},
    {id:6,name:"COD"},
    
  ];

  getAllPayments(){

    return this.paymentTypes.slice(); //slice for cloning 
  }

  constructor() { }
}
