import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SalaryColorDirective } from './directives/salary-color.directive';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { EmployeeNewModelComponent } from './components/employee-new-model/employee-new-model.component';
import { EmployeeEditModelComponent } from './components/employee-edit-model/employee-edit-model.component';
import { EmployeeDeleteModelComponent } from './components/employee-delete-model/employee-delete-model.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

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
