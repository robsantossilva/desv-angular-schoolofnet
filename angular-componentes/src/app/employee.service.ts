import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    { name: 'John', salary: 20000, bonus: 0 },
    { name: 'Jane', salary: 20001, bonus: 0 },
    { name: 'Mary', salary: 987, bonus: 0 },
  ];

  constructor() {}

  addEmployee(employee: Employee): void {
    const bonus = this.shouldReceiveBonus(employee.salary) ? employee.bonus : 0;

    this.employees.push({
      name: employee.name,
      salary: employee.salary,
      bonus: bonus,
    });
  }

  shouldReceiveBonus(salary: number): boolean {
    return salary < 1000;
  }
}
