import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
 private apiServeUrl='';
  constructor(private http :HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServeUrl}/employee/all`);
  }

  public  deleteEmployee(employeId :number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/employee/delete{employeId}`);
  }

  public  updateEmployee(employee :Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServeUrl}/employeeupdate`,employee);

  }

  public addEmployee(employee: Employee) :Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServeUrl}/employe/add, `, employee)
  }
}
