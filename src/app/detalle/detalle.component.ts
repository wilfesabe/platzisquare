import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares:any[] = [{id:1, plan:'pagado', cercania: 1, distancia:1, nombre: 'Lugar 1', active: true, description: 'Texto con la descripcion del lugar'},
    {id:2, plan:'gratuito', cercania: 1, distancia:2, nombre: 'Lugar 2', active: true, description: 'Texto con la descripcion del lugar'},
    {id:3, plan:'pagado', cercania: 3, distancia:150, nombre: 'Lugar 3', active: false, description: 'Texto con la descripcion del lugar'},
    {id:4, plan:'pagado', cercania: 2, distancia:40, nombre: 'Lugar 4', active: true, description: 'Texto con la descripcion del lugar'},
    {id:5, plan:'gratuito', cercania: 3, distancia:120, nombre: 'Lugar 5', active: false, description: 'Texto con la descripcion del lugar'},
    {id:6, plan:'gratuito', cercania: 3, distancia:130, nombre: 'Lugar 6', active: true, description: 'Texto con la descripcion del lugar'}];

  id: number = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    console.log(`Action: ${this.route.snapshot.queryParams['action']} `);
    console.log(`Refer: ${this.route.snapshot.queryParams['refer']}`);
    console.log(`distancia: ${this.route.snapshot.queryParams['distancia']}`);

    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  buscarLugar(){
    return this.lugares.filter( (lugar) =>{ return lugar.id == this.id } )[0] || null;
  }

  ngOnInit() {

  }

}
