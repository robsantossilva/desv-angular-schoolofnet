import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteModelComponent } from './employee-delete-model.component';

describe('EmployeeNewModelComponent', () => {
  let component: EmployeeDeleteModelComponent;
  let fixture: ComponentFixture<EmployeeDeleteModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDeleteModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
