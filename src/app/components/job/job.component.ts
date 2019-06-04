import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public listJobs:any;
 
  constructor( private jobService: JobService, private router: Router) { }

  ngOnInit() {
    this.getAllJobs();
  } 
  getAllJobs(){
    this.jobService.getJobs().subscribe(data=>{
      console.log(data);
      this.listJobs = data; 
    })
  }
  
    
  getToHome(){
    this.router.navigate(['home']);
  }
}
