import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditModelComponent } from './employee-edit-model.component';

describe('EmployeeNewModelComponent', () => {
  let component: EmployeeEditModelComponent;
  let fixture: ComponentFixture<EmployeeEditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeEditModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
