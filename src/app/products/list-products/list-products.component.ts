import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product';
import { environment } from '../../../environments/environment';

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
  public url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
    this.data = new Array<Product>();
    this.httpClient = httpClient;
    this.httpClient
      .get<Array<Product>>(this.url+'/products')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }

  ngOnInit(): void {}

  saveProduct(): void {
    this.nProduct.id = Math.floor(Math.random() * 10) + 1;
    
    this.httpClient.post(this.url+"/products",this.nProduct).subscribe({
      next:()=>{
        this.data.push(this.nProduct);
        this.nProduct = new Product();
      },
      error:(errorMsg)=>{
        alert("error while posting new product "+errorMsg.toString());
      }
    });
  }

  deleteProduct(deleteProduct :Product) : void{
    delete this.data[this.data.findIndex(object => object.id == deleteProduct.id)]
  }

  editProduct(updateProduct: Product): void {
    
    this.httpClient.put(this.url,updateProduct).subscribe(
      {
        next:()=>{
          this.selectedProduct = updateProduct;
        },
        error:(errorMsg)=>{
          alert("error while updating product"+errorMsg.toString());
        }
      }
    );
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
