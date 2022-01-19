import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'Products',
    pathMatch:'full'
  },
    {
    path: 'Products',
    component:ProductsComponent
  },
   {
     path: 'Products-List',
     component:ProductsListComponent
   },
   {
    path: 'Products-Details/:id',
    component:ProductDetailsComponent
  },
  {
    path: 'Add-Products',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }