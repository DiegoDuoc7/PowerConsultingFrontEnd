import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../Services/proyecto.service';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-proyectos-list',
  templateUrl: './proyectos-list.component.html',
  styleUrls: ['./proyectos-list.component.css']
})
export class ProyectosListComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private proyectoService: ProyectoService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.proyectoService.obtenerTodosLosProyectos().subscribe(proyectos => {
      this.proyectos = proyectos;
      this.proyectos.forEach(proyecto => {
        if (proyecto.empleado) {
          this.employeeService.getEmployee(proyecto.empleado).subscribe(empleado => {
            proyecto.nombreEmpleado = empleado.nombre;
          });
        }
      });
    });
  }
}
