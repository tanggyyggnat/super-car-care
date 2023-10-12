import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  // field: id, jobId, empName, empSurname, empPhone, empSalary, empHireDate, accountId
  // relation: account, jobRole
  // ?,[]: schedules

  getEmployee() {
    return this.http.get('http://localhost:3000/api/employee');
  }

  getEmployeeById(id: number) {
    return this.http.get(`http://localhost:3000/api/employee/${id}`);
  }

  //{ accountName, password, jobId, empName, empSurname, empPhone, empSalary }
  createEmployee(accountName:string, password:string, jobId:number, empName:string, empSurname:string, empPhone:string, empSalary:number){
    return  this.http.post(`http://localhost:3000/api/employee/`, { accountName, password, jobId, empName, empSurname, empPhone, empSalary });
  }
}
