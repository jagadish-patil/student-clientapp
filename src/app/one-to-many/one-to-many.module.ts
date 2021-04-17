import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OneToManyRoutingModule } from './one-to-many-routing.module';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ReadStudentsComponent } from './components/read-students/read-students.component';
import { ReadStudentComponent } from './components/read-student/read-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';


@NgModule({
  declarations: [
    CreateStudentComponent,
    ReadStudentsComponent,
    ReadStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    OneToManyRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class OneToManyModule { }
