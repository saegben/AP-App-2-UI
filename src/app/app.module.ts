import { NgModule } from '@angular/core';
import { ValidateEqualModule } from 'ng-validate-equal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CreateStudentAccComponent } from './create-student-acc';
import { SuccessComponent } from './success';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    ValidateEqualModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CreateStudentAccComponent,
    SuccessComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
