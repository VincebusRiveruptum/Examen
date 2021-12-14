import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {"path":"",component:TiendaComponent},
  {"path":"tienda",component:TiendaComponent},
  {"path":"producto", component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
