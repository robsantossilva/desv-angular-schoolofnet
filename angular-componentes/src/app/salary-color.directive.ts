import { Directive, ElementRef, Input } from '@angular/core';
import { EmployeeService } from './employee.service';

@Directive({
  selector: '[salaryColor]',
})
export class SalaryColorDirective {
  @Input()
  salaryColor: any;

  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService
  ) {
    setTimeout(() => {
      const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(this.salaryColor);
      nativeElement.style.color = employeeService.shouldReceiveBonus(salary)
        ? 'red'
        : 'green';
    }, 500);
  }
}
