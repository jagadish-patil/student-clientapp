import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: FormGroup;
  students = [];
  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder) { }

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
        this.student.reset();
        this.readAll();
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

}
