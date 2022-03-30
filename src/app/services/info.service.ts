import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infopag: any = "";


  constructor( private http: HttpClient) { 
  this.getInfoEquipo();


  }
  getinfoPagina(){
    return this.http.get('assets/data/infoPag.json');
  }

public getInfoEquipo(){
  return this.http.get('https://portfolioapp-c95ef-default-rtdb.firebaseio.com/equipo.json');
}

  
}
