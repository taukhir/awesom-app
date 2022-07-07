import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public data: Array<Product>;
  public searchProduct: string = '';
  public nProduct: Product = new Product();
  public selectedProduct: Product | null = null;

  constructor(private httpClient: HttpClient) {
    this.data = new Array<Product>();
    this.httpClient = httpClient;
    this.httpClient
      .get<Array<Product>>('http://localhost:9000/products')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }

  ngOnInit(): void {}

  saveProduct(): void {
    this.nProduct.id = Math.floor(Math.random() * 10) + 1;
    this.data.push(this.nProduct);
    this.nProduct = new Product();
    // this.httpClient.post("http://locahost:9000/",this.nProduct)
  }

  deleteProduct(deleteProduct :Product) : void{
    delete this.data[this.data.findIndex(object => object.id == deleteProduct.id)]
  }

  editProduct(updateProduct: Product): void {
    this.selectedProduct = updateProduct;
  }

  saveProdutHandler(product: Product) {
    // const index = this.data.map(object => object.id).indexOf(product.id);
    const index = this.data.findIndex(object => object.id == product.id);
    this.data[index] = product;
    this.selectedProduct = null;
  }

  cancelledEventHandler(msg: string) {
    alert('Message : ' + msg);
    this.selectedProduct = null;
  }
}
