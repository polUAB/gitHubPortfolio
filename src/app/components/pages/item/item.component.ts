import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  
  producto:any;
  id: any = "";

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) { }

    ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.productsService.getProduct(this.id)
      .subscribe((resp : any) => {
        console.log(resp);
        this.producto=resp;
        ;
      })
      

  }

}
