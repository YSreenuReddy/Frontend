import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import {Route, Router,ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private service:CommonserviceService,private route:Router,private activatedRoute:ActivatedRoute){}

  studentId=0
  studentData:any={};

  ngOnInit(){
    this.studentId =
                      Number(
                      this.activatedRoute.snapshot.params['id']
                      );
    const student = this.service.getStudentData().subscribe((result)=>{
      const data:any=result;
      this.studentData=data.find((x:any)=>x.studentId==this.studentId);
    });
  }
  deleteStudentData(){
    this.service.deleteStudentData(this.studentId).subscribe((result)=>{
      console.log(result);
      alert("Data Deleted Successfully");
      this.route.navigate(['/read']);
    });
  }

  cancel(){
    this.route.navigate(['/read']);
  }

}
