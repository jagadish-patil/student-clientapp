import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { ReadStudentComponent } from './components/read-student/read-student.component';
import { ReadStudentsComponent } from './components/read-students/read-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path: 'createStudent', component: CreateStudentComponent},
  {path: 'readStudents', component: ReadStudentsComponent},
  {path: 'readStudent/:studentId', component: ReadStudentComponent},
  {path: 'updateStudent/:studentId', component: UpdateStudentComponent},
  {path: 'deleteStudent/:studentId', component: DeleteStudentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneToManyRoutingModule { }
