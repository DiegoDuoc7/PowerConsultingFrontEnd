import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Employee/employee-form/employee-form.component';
import { ProyectosListComponent } from './proyectos/proyectos-list/proyectos-list.component';
import { CrearProyectoComponent } from './proyectos/crear-proyecto/crear-proyecto.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'create', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'proyectos', component: ProyectosListComponent }, 
  { path: 'proyectos/crear-proyecto', component: CrearProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
