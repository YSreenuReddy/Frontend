import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { FormsModule } from '@angular/forms';
import {Route, Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(private service:CommonserviceService,private route:Router,private activatedRoute:ActivatedRoute){}

  studentData={
    studentId:0,
    studentName :'',
    studentAge:0,
    studentCourse:''
  }
  studentId=0;

  ngOnInit(){
    this.studentId =
                      Number(
                      this.activatedRoute.snapshot.params['id']
                      );
    const student = this.service.getStudentData().subscribe((result)=>{
      const data:any=result;
      console.log(data);
      this.studentData=data.find((x:any)=>x.studentId==this.studentId);
    });
  }

  updateStudentData(){
    this.service.updateStudentData(this.studentData,this.studentId).subscribe((result)=>{
      console.log(result);
      alert("Data Updated Successfully");
      this.route.navigate(['/read']);
    });
  }

}
