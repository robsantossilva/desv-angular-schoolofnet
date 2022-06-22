import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
})
export class EmployeeNewComponent implements OnInit {
  name: string = '';
  salary: number = 0;
  bonus: number = 0;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmployee(event: MouseEvent): void {
    const bonus: number = this.employeeService.shouldReceiveBonus(this.salary)
      ? this.bonus
      : 0;

    this.employeeService.addEmployee({
      name: this.name,
      salary: this.salary,
      bonus: bonus,
    });

    this.name = '';
    this.salary = 0;
    this.bonus = 0;
  }
}
