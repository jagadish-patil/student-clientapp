import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    var v1 = this.activatedRoute.snapshot.paramMap.get('studentId');
    this.studentService.delete(v1).subscribe(
      results => {
        console.log(results);
        this.router.navigate(['readStudents']);        
      }
    );
  }

}
