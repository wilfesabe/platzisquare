import { Component, OnInit } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  title = 'app';
  public listo:boolean = false;
  public nombre:string = '';


  lat: number = 11.000470;
  lng: number = -74.804246;
  lugares = null;
  personas:any[] = [
    {cercania: 1, distancia: 1, nombre: 'Wilfrido Salgado Bermudez ', edad: 32},
    {cercania: 1, distancia: 1.8, nombre: 'Alejandro Salgado', edad: 0},
    {cercania: 2, distancia: 5, nombre: 'Marcela Mercado', edad: 25},
    {cercania: 3, distancia: 10, nombre: 'Ana Bermudez', edad: 60},
    {cercania: 3, distancia: 35, nombre: 'Wilfrido Salgado Rodriguez', edad: 63},
    {cercania: 3, distancia: 120, nombre: 'manuel David Salgado', edad: 29},
  ];


  constructor(lugaresService: LugaresService){
    setTimeout(() => this.listo = true, 3000);
    this.nombre = '';
    this.lugares = lugaresService.getLugares();
  }

  public hacerAlgo():void{
    alert('Haciendo algo ' + this.nombre+ '.');
  }


  ngOnInit() {
  }

}
