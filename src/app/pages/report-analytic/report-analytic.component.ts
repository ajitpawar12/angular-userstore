import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service'
import { URL } from 'src/app/Helpers/APIUrl'
import { AlertService } from 'src/app/services/alert.service'


@Component({
  selector: 'app-report-analytic',
  templateUrl: './report-analytic.component.html',
  styleUrls: ['./report-analytic.component.css']
})
export class ReportAnalyticComponent implements OnInit {

  public isTableDisplay: boolean = false;
  public userList: any[];
  public apiBaseUrl: string = 'https://reqres.in/api';

  constructor(private SpinnerService: NgxSpinnerService, private http: HttpClient, private apiservice: ApiService, private alert: AlertService,private url:URL) { }

  ngOnInit(): void {
  }

  displayAnalyticTable(number) {
    this.isTableDisplay = false;
    this.SpinnerService.show();    
    this.apiservice.GET(this.url.USER_LIST + number).subscribe((response: any) => {
      this.userList = response.data
      console.log(this.userList)

    },
      error => {

        this.alert.errorToast();
        console.log(error);
      });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.isTableDisplay = true;
      this.SpinnerService.hide();

    }, 1000);
  }


}


