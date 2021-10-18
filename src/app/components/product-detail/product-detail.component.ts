import { AfterContentInit, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../core/services/products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product ;
  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      // this.product = this.service.getProduct(id);
      this.fetchProduct(id);
    });
  }

  // getProductFromService(): any {
  //   this.route.params.subscribe((params: Params) => {
  //     console.log(params);
  //     const id = params.id;
  //     // this.product = this.service.getProduct(id);
  //     this.service.getProduct(id).subscribe((res: any) => {
  //       this.product = res;
  //     });
  //   });
  // }

  fetchProduct(id: string): any{
    this.service.getProduct(id)
      .subscribe(res => {
        console.log(res);
        this.product = res;
      });

  }

  createProduct(): any{
    const newProduct: Product = {
      id : '222',
      title: 'nuevo desde angular rog',
      image: 'assets/images/stickers2.png',
      description: 'prueba de create post por angular rog',
      price: 3000
    };

    this.service.createProduct(newProduct)
    .subscribe(res => {
      console.log(res);
    });
  }

  updateProduct(): any{
    const productToUpdate: Partial<Product> = {
      id : '222',
      description: 'edicion put por angular rog',
      price: 3200
    };

    this.service.updateProduct(productToUpdate, productToUpdate.id)
    .subscribe((res: any) => console.log(res));


  }
  deleteProduct(): any{

    this.service.deleteProduct('2')
    .subscribe((res: any) => console.log(res));

  }
}
