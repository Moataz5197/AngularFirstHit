import { registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { Error404Component } from "./error404/error404.component";

import { HomeComponent } from "./home/home.component";



const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"home",redirectTo:"",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"product",loadChildren:'./features/product/product.module#ProductModule'},
    {path:"**",component:Error404Component}
]
@NgModule({

    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules, scrollPositionRestoration:"top" , useHash:true})],
    exports:[RouterModule]

})

export class CustomAppRoutingModule {}