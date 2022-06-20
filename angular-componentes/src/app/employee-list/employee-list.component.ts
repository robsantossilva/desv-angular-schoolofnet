import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeNewModelComponent } from '../employee-new-model/employee-new-model.component';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(EmployeeNewModelComponent) //get element reference from the component
  employeeNewModel!: EmployeeNewModelComponent;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  openModal(): void {
    this.employeeNewModel.show();
  }

  // getSalaryColor(employee: Employee): string | null {
  //   return employee.salary > 20000 ? 'green' : null;
  // }

  // colorSalary(employee: Employee) {
  //   return {
  //     'salary-expensive': employee.salary > 20000,
  //     'salary-cheap': employee.salary < 1000,
  //   };
  // }
}
