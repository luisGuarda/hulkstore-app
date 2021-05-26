import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }
  delete(producto: Producto): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el producto ${producto.nombreProd} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.productoService.delete(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter(cli => cli !== producto)
            swal(
              'Producto Eliminado!',
              `${producto.nombreProd} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }


}
