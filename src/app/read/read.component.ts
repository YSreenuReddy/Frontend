import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-read',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
constructor(private service:CommonserviceService){}

//get the student data from the service and store it in a variable
     studentData:any;
    ngOnInit(){
      this.service.getStudentData().subscribe((result)=>{
        console.log(result);
        this.studentData=result;
      });
    }
}
