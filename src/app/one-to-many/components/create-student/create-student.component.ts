import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: FormGroup;
  students = [];
  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.student = this.formBuilder.group({
      id: new FormControl(),
      studentName: new FormControl(),
      email: new FormControl(),
      mobileNumber: new FormControl(),
      courses: new FormArray([])
    });
    //(this.student.get('courses') as FormArray).push(
      this.courses.push(
      this.formBuilder.group({
        id: new FormControl(),
        name: new FormControl(),
        fees: new FormControl()
      })      
    );

    this.readAll();
  }

  addCourse($event){
    //(this.student.get('courses') as FormArray).push(
      this.courses.push(
      this.formBuilder.group({
        id: new FormControl(),
        name: new FormControl(),
        fees: new FormControl()
      })      
    );
    $event.preventDefault();
  }

  get courses(){
    return this.student.get('courses') as FormArray;
  }

  save(){
    this.studentService.save(this.student).subscribe(
      results => {
        console.log(results);
        this.router.navigate(['createStudent']);
      }
    );
  }

  readAll(){
    this.studentService.readAll().subscribe(
      results => {
        this.students = results;
      }
    );
  }

  read(id){
    this.router.navigate(['readStudent', id]);
  }

  readForUpdate(id){
    this.router.navigate(['updateStudent', id]);
  }

  delete(id){
    this.router.navigate(['deleteStudent', id]);
  }

}
