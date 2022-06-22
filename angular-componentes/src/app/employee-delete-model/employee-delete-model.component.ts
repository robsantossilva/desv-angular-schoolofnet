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
  selector: 'employee-delete-model',
  templateUrl: './employee-delete-model.component.html',
  styleUrls: ['./employee-delete-model.component.css'],
})
export class EmployeeDeleteModelComponent implements OnInit {
  @Input()
  employee!: Employee;

  bootstrapModal!: bootstrap.Modal;

  @Output()
  onDeleteEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(
    private element: ElementRef,
    public employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.bootstrapModal = new bootstrap.Modal(this.getDivModal(), {
      keyboard: false,
    });
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employee);
    this.onDeleteEmployee.emit(this.employee);
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
