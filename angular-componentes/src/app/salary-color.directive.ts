import { Directive, ElementRef, Input } from '@angular/core';
import { EmployeeService } from './employee.service';

@Directive({
  selector: '[salaryColor]',
})
export class SalaryColorDirective {
  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService
  ) {
    // setTimeout(() => {
    //   const nativeElement: HTMLElement = this.element.nativeElement;
    //   const salary = parseFloat(this.salaryColor);
    //   nativeElement.style.color = employeeService.shouldReceiveBonus(salary)
    //     ? 'red'
    //     : 'green';
    // }, 500);
  }

  @Input() set salaryColor(value: string) {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.style.color = this.employeeService.shouldReceiveBonus(
      parseFloat(value)
    )
      ? 'red'
      : 'green';
  }
}
