import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-read-students',
  templateUrl: './read-students.component.html',
  styleUrls: ['./read-students.component.css']
})
export class ReadStudentsComponent implements OnInit {
  students = [];
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
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
