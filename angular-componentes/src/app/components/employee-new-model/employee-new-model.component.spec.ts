import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewModelComponent } from './employee-new-model.component';

describe('EmployeeNewModelComponent', () => {
  let component: EmployeeNewModelComponent;
  let fixture: ComponentFixture<EmployeeNewModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNewModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
