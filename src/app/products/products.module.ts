import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../matrial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
