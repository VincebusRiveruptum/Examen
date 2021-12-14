import { Component, OnInit } from '@angular/core';
import { Productos, Carrito, carrito, Tienda, tienda, productos } from '../interfaces/productos';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  listaProductos=productos; 

  constructor() { }

  ngOnInit(): void {
  }
  contador(i: number) {
    return new Array(i);
  }
  obtenerProducto(producto:Productos):Productos{

    console.log(producto);

    tienda.idseleccionado = producto.id;

    return producto;
  }
}
