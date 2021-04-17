import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: FormGroup;
  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.student = this.formBuilder.group({
      id: new FormControl(),
      studentName: new FormControl(),
      email: new FormControl(),
      mobileNumber: new FormControl(),
      courses: new FormArray([])
    });        
    var v1 = this.activatedRoute.snapshot.paramMap.get('studentId');
    this.studentService.read(v1).subscribe(
      results => {
        this.createCourses(results.courses.length);
        //this.employee = results;
        this.student.patchValue(results);
      }
    );
  }

  get courses(){
    return this.student.get('courses') as FormArray;
  }
  createCourses(length){
    for(var i = 0; i < length; i++){
      this.createCourse();
    }
  }
  createCourse(){
    this.courses.push(
      this.formBuilder.group({
        id: new FormControl(),
        name: new FormControl(),
        fees: new FormControl(),
      })
    );
  }
  createNewCourse($event){
    this.createCourse();
    $event.preventDefault;
  }
  update(){
    this.studentService.update(this.student).subscribe(
      results => {
        console.log(results);
        this.router.navigate(['readStudents']);
      }
    );
  }
  removeCourse(index){
    this.courses.removeAt(index);
  }

}
