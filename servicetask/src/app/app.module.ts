import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';
import {ChildComponent} from './child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
