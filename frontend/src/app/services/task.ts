import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  private options() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getTasks() {
    return this.http.get(this.apiUrl, this.options());
  }

  createTask(task: any) {
    return this.http.post(this.apiUrl, task, this.options());
  }

  updateTask(id: string, task: any) {
    return this.http.put(`${this.apiUrl}/${id}`, task, this.options());
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.options());
  }
}