import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  employee: any = { nombre: '', apellido: '', email: '', puesto: '', salario: 0 };
  id: string | null = null;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.employeeService.getEmployee(this.id).subscribe(data => {
        this.employee = data;
      });
    }
  }

  saveEmployee(): void {
    if (this.id) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
