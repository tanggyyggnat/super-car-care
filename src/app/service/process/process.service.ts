import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(
    private http: HttpClient
  ) { }

  getProcess() {
    return this.http.get('http://localhost:3000/api/process');
  }

  getProcesById(id: number) {
    return this.http.get(`http://localhost:3000/api/process/${id}`);
  }

  //{ bookingId, subserviceId }
  createProcess(data: any) {
    return this.http.post('http://localhost:3000/api/process', { data })
  }

  //update status and timeที่updateตอนนั้น ว่าProcess status (in process, complete)
  updateProcess(id: number, stepStatus: string) {
    return this.http.patch(`http://localhost:3000/api/process/${id}`, { stepStatus });
  }

  deleteProcess(id: number) {
    return this.http.delete(`http://localhost:3000/api/process/${id}`);
  }

}
