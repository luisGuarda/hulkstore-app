import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { NextprodComponent } from './nextprod/nextprod.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './productos/form.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component'
import { ProductoService } from './productos/producto.service';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'nextprod', component: NextprodComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/form', component: FormComponent},
  {path: 'productos/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NextprodComponent,
    FormComponent,
    ProductosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }