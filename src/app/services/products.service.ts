import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http : HttpClient) { }

  public getProducts(){

    return this.http.get('https://portfolioapp-c95ef-default-rtdb.firebaseio.com/productos.json')
    
  }


  public getProducts2(){
    return this.http.get('https://portfolioapp-c95ef-default-rtdb.firebaseio.com/productos2.json')
  }

  public getProduct(id: string){
    return this.http.get(`https://portfolioapp-c95ef-default-rtdb.firebaseio.com/productos2/${id}.json`)
  }
}

