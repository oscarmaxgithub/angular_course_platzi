import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product;
  @Output() addCartEventCustom: EventEmitter<Product> = new EventEmitter();
  // product: Product={
  //   id: '1',
  //   image: 'assets/images/camiseta.png',
  //   title: 'Camiseta',
  //   price: 80000,
  //   description: 'bla bla bla bla'
  // };

  ngOnInit(): void {
  }

  addCart(): any{
    console.log('Agregando al carrito');
    this.addCartEventCustom.emit(this.product);
  }

}
