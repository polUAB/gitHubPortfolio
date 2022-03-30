import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textbusqueda:any = '';
  productos : any = [];

  productosResultados : any = [];
  loading=true;

  constructor(private route: ActivatedRoute,
    public productsService: ProductsService) { }


  ngOnInit(): void {
    this.textbusqueda = this.route.snapshot.paramMap.get('textBusc');
    console.log(this.textbusqueda)

    this.textbusqueda= this.textbusqueda.toLowerCase();

    this.productsService.getProducts()
    .subscribe((resp : any) => {
      this.productos = resp;
      

      this.productos.forEach((prod:any) => {

        let categoria = prod.categoria.toLowerCase();

        if(categoria.indexOf(this.textbusqueda) >=0) {
          this.productosResultados.push(prod);
        }

      })
      setTimeout(() => {
        this.loading=false;
      }, 1000);

    });
  }

}
