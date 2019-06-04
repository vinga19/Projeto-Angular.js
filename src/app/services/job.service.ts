import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private urlAPI: string;


  constructor(private httpService: HttpService, private http: HttpClient) {
    this.urlAPI = this.httpService.getJobApi();
    
   }
   getJobs(){
     return this.http.get(this.urlAPI);
   }
  
}
