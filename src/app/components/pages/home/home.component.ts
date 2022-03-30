import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos : any = [];
  loading = true;
  constructor( public productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts()
    .subscribe((resp : any) => {
      this.productos = resp;
      
      setTimeout(()=>{
        this.loading=false;
      },1000);
    });

  }


}
