import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor( private services:ServicesService) { }
 products: any
  ngOnInit(): void {
    this.services.getPtoductsList().subscribe(res=>{
      this.products= res
    })
  }

}
