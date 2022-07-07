import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  //child property
  @Input()
  public eProduct: Product = new Product();
  //this product is a reference from the array,
  //so it will get directly updated to avoid that we have to take copy of product not the reference of product


  @Output() 
  public saveEvent:EventEmitter<Product> = new EventEmitter<Product>();

  @Output() 
  public cancelledEvent:EventEmitter<string> = new EventEmitter<string>();

  public temp: Product = new Product();

  constructor() {
    console.log("EditProduct Constructor :", this.eProduct);
  }

  ngOnInit(): void {
    /*
     *  Deep Copy
     */
    console.log("EditProduct onInit :", this.eProduct);

    Object.assign(this.temp, this.eProduct);
  }

  ngOnChanges(changes: SimpleChange) {

    console.log("EditProduct onChange :", changes);

  }

  save(){
    //One way is to assign back temp to actual product reference
    //Object.assign(this.eProduct,this.temp);
    this.saveEvent.emit(this.temp);
  }

  cancel(){
    //One way is to assign back temp to actual product reference
    //Object.assign(this.eProduct,this.temp);
    this.cancelledEvent.emit("edit was cancelled");
  }
  
}
