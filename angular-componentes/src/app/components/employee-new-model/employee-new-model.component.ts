import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import * as bootstrap from 'bootstrap';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-new-model',
  templateUrl: './employee-new-model.component.html',
  styleUrls: ['./employee-new-model.component.css'],
})
export class EmployeeNewModelComponent implements OnInit {
  name: string = '';
  salary: number = 0;
  bonus: number = 0;
  bootstrapModal!: bootstrap.Modal;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(
    private element: ElementRef,
    public employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.bootstrapModal = new bootstrap.Modal(this.getDivModal(), {
      keyboard: false,
    });
  }

  addEmployee(): void {
    const newEmployee: Employee = {
      name: this.name,
      salary: this.salary,
      bonus: this.bonus,
    };

    this.employeeService.addEmployee(newEmployee);

    this.name = '';
    this.salary = 0;
    this.bonus = 0;

    this.onSubmit.emit(newEmployee);

    this.hide();
  }

  hide(): void {
    this.bootstrapModal.hide();
  }

  show(): void {
    this.bootstrapModal.show();
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
