import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobRoleService {

  constructor(
    private http: HttpClient
  ) { }

  //{jobName}
  createJobRole(jobName: string){
    return  this.http.post(`http://localhost:3000/api/jobRole/`, jobName);
  }
  
}
