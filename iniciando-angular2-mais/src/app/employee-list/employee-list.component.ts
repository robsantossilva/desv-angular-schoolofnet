import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  getSalaryColor(employee: Employee): string | null {
    return employee.salary > 20000 ? 'green' : null;
  }

  colorSalary(employee: Employee) {
    return {
      'salary-expensive': employee.salary > 20000,
      'salary-cheap': employee.salary < 1000,
    };
  }
}
