import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-gagdgets-shop',
  templateUrl: './gagdgets-shop.component.html',
  styleUrls: ['./gagdgets-shop.component.css'],
  // provider can be configured at component level
  // providers : []
})
export class GagdgetsShopComponent implements OnInit {
  
public products : Product[] = new Array<Product>();

  constructor(private cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    try {
     this.products = await this.cartService.fetchProducts();
      
    } catch (error) {}
  }

  add(item : Product, qtyValue:string){
    this.cartService.addToCart(item,Number(qtyValue));
  }
}
