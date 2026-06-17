import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { FormsModule } from '@angular/forms';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private service:CommonserviceService,private route:Router){}

  studentData={
    StudentName :'',
    StudentAge:0,
    StudentCourse:''
  }
  
  postStudentData(){
    this.service.postStudentData(this.studentData).subscribe((result)=>{
      console.log(result);
      alert("Data Added Successfully");
      this.studentData={
        StudentName :'',
        StudentAge:0,
        StudentCourse:''
      };
      this.route.navigate(['/read']);
    });
  }
}
