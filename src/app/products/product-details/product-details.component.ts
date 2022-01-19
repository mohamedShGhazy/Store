import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private services:ServicesService) { }
 id:any
 product:any
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
  });
  this.getProject()
  }
  getProject(): void{
    this.services.getPtoductDetails(this.id).subscribe(res=>{
      this.product = res
    })

  }

}
