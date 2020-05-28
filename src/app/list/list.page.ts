import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  private products=[];
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://example-ecommerce.herokuapp.com/product/list').subscribe((product:any)=>{
      this.products=product;
      
    })
    this.products.forEach(product => {
      console.log(product.name)
    })
}
}
