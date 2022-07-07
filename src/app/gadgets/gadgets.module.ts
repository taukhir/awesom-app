import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GagdgetsShopComponent } from './gagdgets-shop/gagdgets-shop.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { CartService, CartServiceImpl } from './cart-service';

const routes: Routes = [
  { path: 'gadgets', component: MainComponent ,children : [
    { path: 'shop', component: GagdgetsShopComponent},
    { path: 'cart', component: ViewCartComponent}
  ]},
];


@NgModule({
  declarations: [
    GagdgetsShopComponent,
    ViewCartComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers : [
    {provide : CartService, useClass : CartServiceImpl}
  ]
})
export class GadgetsModule { }
