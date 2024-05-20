import { Component } from '@angular/core';
import { ProyectoService } from '../../Services/proyecto.service';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {
  proyecto = {
    nombre: "Proyecto A",
    descripcion: "Descripción del Proyecto A",
    empleado: ""
  };
  empleados: any[] = [];

  constructor(private proyectoService: ProyectoService, private employeeService: EmployeeService, private router: Router) { }// Paso 2: Inyectar Router

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.crearProyecto();
  }

  obtenerEmpleados(): void {
    this.employeeService.getEmployees().subscribe({
      next: (empleados) => {
        this.empleados = empleados;
        this.proyecto.empleado = empleados.length > 0 ? empleados[0]._id : null;
      },
      error: (error) => console.error('Error al obtener empleados', error)
    });
  }

  crearProyecto(): void {
    if (this.proyecto.empleado) {
      this.proyectoService.crearProyecto(this.proyecto).subscribe({
        next: (response) => {
          console.log('Proyecto creado con éxito', response);
          this.router.navigate(['/proyectos']);
        },
        error: (error) => console.error('Error al crear el proyecto', error)
      });
    } else {
      console.error('No hay empleados disponibles para asignar al proyecto');
    }
  }
}

