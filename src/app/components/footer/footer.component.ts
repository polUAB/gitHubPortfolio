import { Component, OnInit } from '@angular/core';

import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  fecha = new Date().getFullYear();
  infopag: any ="";
  


  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getinfoPagina()
    .subscribe((resp:any)=> {
      console.log(resp);
      this.infopag = resp;
    })

  }

}
