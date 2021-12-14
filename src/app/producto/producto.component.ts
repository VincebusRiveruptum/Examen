import { Component, OnInit } from '@angular/core';
import { Productos, Carrito, carrito, Tienda, tienda, productos } from '../interfaces/productos';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  producto = productos[tienda.idseleccionado - 1];
  compra:FormGroup;
  estado:boolean=false;


  cantidadproducto=1;

  constructor(public form:FormBuilder) { 
    this.compra=this.form.group({
      inputcantidad:['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarProductoCarrito():void{
    let datos:any=[{
      "inputcantidad": this.compra.get("inputcantidad")?.value,
    }]; 

    let productocarrito:Carrito = {idproducto:this.producto.id, cantidad:datos[0]};
    console.log(productocarrito);
    if(carrito.push(productocarrito)){
      this.estado = true;
    };
  }

  verProductosCarrito():void{
    console.log(carrito);
  }

}
