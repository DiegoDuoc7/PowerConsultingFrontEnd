import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Employee/employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Shared/footer/footer.component';
import { BarraComponent } from './Shared/barra/barra.component';
import { ProyectosListComponent } from './proyectos/proyectos-list/proyectos-list.component';
import { CrearProyectoComponent } from './proyectos/crear-proyecto/crear-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    FooterComponent,
    BarraComponent,
    ProyectosListComponent,
    CrearProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
