import { Component, ElementRef, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import * as bootstrap from 'bootstrap';

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
