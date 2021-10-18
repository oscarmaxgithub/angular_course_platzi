import { Injectable } from '@angular/core';
import { Product } from '../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   }
  // ];

  constructor(
    private httpcli: HttpClient
  ) { }

  // getAllProducts(): Product[]{
  getAllProducts(): Observable<Product[]>{
    console.log('Entro al servicio');
    // return this.products;
    return this.httpcli.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string): any{
    // return this.products.find(item => item.id === id);
    // return this.httpcli.get(`http://platzi-store.herokuapp.com/products/${id}`);
    console.log('http://platzi-store.herokuapp.com/products/' + id);
    // return this.httpcli.get<Product>('http://platzi-store.herokuapp.com/products/' + id);
    return this.httpcli.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): any{
    return this.httpcli.post(`${environment.url_api}/products/`, product);
  }

  updateProduct(prodToUpdate: Partial<Product>, id: string): any{
    return this.httpcli.put(`${environment.url_api}/products/${id}`, prodToUpdate);
  }

  deleteProduct(id: string): any{
    return this.httpcli.delete(`${environment.url_api}/products/${id}`);
  }
}
