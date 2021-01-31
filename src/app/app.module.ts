import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';

import { FooterComponent } from './layout/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ProductService } from './_services/product.service';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { CustomAppRoutingModule } from './app-routing.module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category.service';

import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { MyInterceptorService } from './_services/my-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    
    FooterComponent,
    
    
    
    LoginComponent,
    RegisterComponent,
    
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ProductModule,
    CustomAppRoutingModule,
    HttpClientModule,
    
    SharedModule

    /* RouterModule.forRoot([{
      path:"product-listing",
      component:ProductListingComponent
    },{
      path:"login",
      component:LoginComponent
    }]) */
  ],
  providers: [ProductService,PaymentTypeService,ProductCategoryService,{provide:HTTP_INTERCEPTORS,useClass:MyInterceptorService, multi:true}],   //dependency injections  // for  interceptor use multi : true for multi interceptors
  bootstrap: [AppComponent]
})
export class AppModule { }
