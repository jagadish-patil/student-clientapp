import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-read-student',
  templateUrl: './read-student.component.html',
  styleUrls: ['./read-student.component.css']
})
export class ReadStudentComponent implements OnInit {
  student;
  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var v1 = this.activatedRoute.snapshot.paramMap.get('studentId');
    this.studentService.read(v1).subscribe(
      results => {
        this.student = results;
      }
    );
  }

}
