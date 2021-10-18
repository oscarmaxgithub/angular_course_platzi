import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import { ProductInventaryComponent } from './components/product-inventary/product-inventary.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'inventary',
        component: ProductInventaryComponent
      },
      {
        path: 'dashboard',
        component: ProductDashboardComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
