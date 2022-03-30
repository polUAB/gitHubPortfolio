import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/pages/about/about.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';

import{HomeComponent} from './components/pages/home/home.component';
import { ItemComponent } from './components/pages/item/item.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'item/:id', component:ItemComponent},
  {path: 'about', component:AboutComponent},
  {path: 'buscar/:textBusc', component: BusquedaComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
