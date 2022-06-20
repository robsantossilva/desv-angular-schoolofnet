import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { SalaryColorDirective } from './salary-color.directive';
import { EmployeeNewModelComponent } from './employee-new-model/employee-new-model.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeNewComponent, SalaryColorDirective, EmployeeNewModelComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
