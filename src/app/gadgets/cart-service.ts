import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom, ReplaySubject, Subject } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';

interface CartInterface {
  fetchProducts(): Promise<Product[]>;
  addToCart(product: Product, qty: Number): void;
  getCart(): CartItem[];
  getProducts(): Promise<Product[]>;
}

export abstract class CartService implements CartInterface {
  public subjects: ReplaySubject<CartItem[]> = new ReplaySubject<CartItem[]>();

  abstract addToCart(product: Product, qty: Number): void;

  abstract getCart(): CartItem[];

  abstract fetchProducts(): Promise<Product[]>;

  abstract getProducts(): Promise<Product[]>;
}

@Injectable()
//if we we want to inject other services into out service
export class CartServiceImpl extends CartService {
  public products: Product[] = new Array<Product>();

  public cart: CartItem[] = new Array<CartItem>();

  constructor(private httpClient: HttpClient) {
    super();
  }

  fetchProducts(): Promise<Product[]> {
    const url = 'http://localhost:9000/products';

    const result$ = this.httpClient.get<Product[]>(url);
    return lastValueFrom(result$);
    // return "fetchProducts :: CartServiceImpl : cartService"
  }

  async getProducts(): Promise<Product[]> {
    if (this.products.length != 0) {
      return this.products;
    } else {
      try {
        const products = await this.fetchProducts();
        this.products = products;
      } catch (error) {
        console.log('error__ ', error);
      }
      return this.products;
    }
  }

  addToCart(product: Product, qty: number): void {
    this.cart.push(new CartItem(product, qty));

    //subject.next is like publishing cart
    this.subjects.next(this.cart);
  }
  getCart(): CartItem[] {
    return [...this.cart];
  }
}

// export class MockCartServiceImpl extends CartService{

//     fetchProducts() {
//         return "fetchProducts :: MockCartServiceImpl : cartService"
//     }
// }
