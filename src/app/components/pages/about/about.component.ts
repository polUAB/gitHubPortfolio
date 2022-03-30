import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any = "";

  constructor(public infoservice: InfoService) { }

  ngOnInit(): void {
    this.infoservice.getInfoEquipo()
    .subscribe((resp:any) =>{
      this.equipo = resp;
      console.log(this.equipo);

    
    })
  };


}
