import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeserviceService} from "./employeeservice.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 public employees :Employee[];
 constructor(private employeeService: EmployeeserviceService) {
 }

 ngOnInit() {
   this.getEmployees();
 }
 //oninit  et ngOnit permet d'initilaiser le service une fois que le composant est initialiser

  public getEmployees():void{
   this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
        (error:HttpErrorResponse)=> {
          alert(error.message);

        }
   );
 }

}
