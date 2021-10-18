import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();


  }

  fetchProducts(): any{
    // this.products = this.service.getAllProducts()
    this.service.getAllProducts()
    .subscribe( (prod: Product[])  => {
      // console.log(prod);
      this.products = prod;
    });
  }

  clickProductEvent(pro: Product): any{
    console.log('id: desde listado ' + pro.id);
    // console.log(pro);
  }

}
