import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '../../node_modules/@agm/core/core.module';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './detalle/detalle.component';
import {RouterModule, Routes} from "@angular/router";
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ChildComponent } from './child/child.component';
import {LugaresService} from "./services/lugares.service";
const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
    , AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKkbnKjfzs9KHjZ1izZSaeJ5jeS828PUI'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
