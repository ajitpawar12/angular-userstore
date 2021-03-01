import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-report-analytic',
  templateUrl: './report-analytic.component.html',
  styleUrls: ['./report-analytic.component.css']
})
export class ReportAnalyticComponent implements OnInit {

  public isTableDisplay : boolean =false;
  public userList:any[];
  public apiBaseUrl:string = 'https://reqres.in/api';
  
  constructor(private SpinnerService: NgxSpinnerService,private http: HttpClient,) { }

  ngOnInit(): void {
  }

  displayAnalyticTable(number)
  {
    this.isTableDisplay=false;
    this.SpinnerService.show();
    this.getUsers('/users?page='+number).subscribe((response: any) => 
    {    
          this.userList=response.data
          console.log(this.userList)
    },
      error => {
        alert("Something went wrong !");
        console.log(error);
      });
      
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.isTableDisplay=true;
      this.SpinnerService.hide();

  }, 1000);
    
  }

  getUsers(url){
    return this.http.get(this.apiBaseUrl +url);
  }
  
}


