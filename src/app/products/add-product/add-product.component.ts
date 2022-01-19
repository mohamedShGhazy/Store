import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
  });
  constructor(private services:ServicesService,private router: Router,) {}

  ngOnInit(): void {}

  onSubmit() {
    let body = {
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description,
      image: 'https://i.pravatar.cc',
      category: this.form.value.category,
    };
    this.services.postMethod(body).subscribe(res=>{
      if(res){
        this.router.navigate(["/Products-List"]);
      }
    })
  }
}
