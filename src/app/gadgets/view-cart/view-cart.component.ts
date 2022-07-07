import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {


  public cart : CartItem[] = new Array<CartItem>();

  constructor(public cartService : CartService) { 

    this.cart = this.cartService.getCart();

    this.cartService.subjects.subscribe((data) => {
      this.cart = data;
    });

  }


  ngOnInit(): void {
  }

}
