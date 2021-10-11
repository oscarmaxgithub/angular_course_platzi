import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

import { LayoutComponent } from './components/layout/layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // loadChildren: './components/home/home.module#HomeModule'
        loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule)
        // component: HomeComponent
      },
      {
        path: 'products/:id', component: ProductDetailComponent
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'contact', component: ContactComponent
      }
    ]
  }
  ,
  {
    path: 'pruebas', component: PruebasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
