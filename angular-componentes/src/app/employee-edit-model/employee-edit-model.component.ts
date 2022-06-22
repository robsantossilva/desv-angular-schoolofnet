import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'employee-edit-model',
  templateUrl: './employee-edit-model.component.html',
  styleUrls: ['./employee-edit-model.component.css'],
})
export class EmployeeEditModelComponent implements OnInit {
  @Input()
  employee!: Employee;

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
    const editedEmployee: Employee = Object.assign({}, this.employee);
    this.onSubmit.emit(editedEmployee);
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
