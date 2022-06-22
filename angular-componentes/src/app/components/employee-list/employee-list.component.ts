import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { EmployeeDeleteModelComponent } from '../employee-delete-model/employee-delete-model.component';
import { EmployeeEditModelComponent } from '../employee-edit-model/employee-edit-model.component';
import { EmployeeNewModelComponent } from '../employee-new-model/employee-new-model.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employee!: Employee;
  employeeToEdit!: Employee;
  employeeToDelete!: Employee;
  showMessageSuccess: boolean = false;

  @ViewChild(EmployeeNewModelComponent) //get element reference from the component
  employeeNewModel!: EmployeeNewModelComponent;

  @ViewChild(EmployeeEditModelComponent) //get element reference from the component
  employeeEditModel!: EmployeeEditModelComponent;

  @ViewChild(EmployeeDeleteModelComponent) //get element reference from the component
  employeeDeleteModel!: EmployeeDeleteModelComponent;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  openNewModal(): void {
    this.employeeNewModel.show();
  }

  openEditModal(employee: Employee): void {
    this.employeeToEdit = employee;
    this.employeeEditModel.show();
  }

  openDeleteModal(employee: Employee): void {
    this.employeeToDelete = employee;
    this.employeeDeleteModel.show();
  }

  onNewEmployee(employee: Employee): void {
    this.employee = employee;
    this.showMessageSuccess = true;

    setTimeout(() => {
      this.showMessageSuccess = false;
    }, 3000);
  }

  onEditEmployee(employee: Employee): void {
    //this.employee = employee;
    console.log(employee);
    this.employeeEditModel.hide();
  }

  onDeleteEmployee(employee: Employee): void {
    console.log(employee);
    this.employeeDeleteModel.hide();
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
