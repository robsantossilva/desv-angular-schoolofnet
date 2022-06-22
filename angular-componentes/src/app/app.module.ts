import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { SalaryColorDirective } from './salary-color.directive';
import { EmployeeNewModelComponent } from './employee-new-model/employee-new-model.component';
import { EmployeeEditModelComponent } from './employee-edit-model/employee-edit-model.component';
import { EmployeeDeleteModelComponent } from './employee-delete-model/employee-delete-model.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { MyCurrencyPipe } from './my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    EmployeeNewModelComponent,
    AlertSuccessComponent,
    EmployeeEditModelComponent,
    EmployeeDeleteModelComponent,
    MyCurrencyPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
