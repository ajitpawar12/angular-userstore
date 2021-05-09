import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { RouterModule, Routes, Router } from '@angular/router';
import { map, catchError } from "rxjs/operators";
import { from, Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { AlertService} from 'src/app/services/alert.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient, private router: Router, private alert:AlertService) {

  }
  headers() {
    //Api for authentication
    if (sessionStorage.getItem("accessToken") != null) 
    {
      var token = sessionStorage.getItem("accessToken");
      //console.log(token);      
      const httpOptions = new HttpHeaders({
        'Authorization': "Bearer " + token
      })
      return httpOptions;
    }
  }

  GET(url) {
    return this.http.get(this.baseUrl + url, { headers: this.headers(), observe: 'response' })
      .pipe(map((data: any) => {
        return data.body;
      }),
        catchError(error => {
          console.log(error)
          if (error.status == 401) {
            alert("You session has expired, Please login again !");
            this.router.navigate(['/login'])
          } else {            
            this.alert.errorToast()
            return [];
          }
        })
      )
  }

  POST(url, data) {
    return this.http.post(this.baseUrl + url, data, { headers: this.headers(), observe: 'response' })
      .pipe(map((data: any) => {
        return data.body;
      }),
        catchError(error => {
          console.log(error)
          if (error.status == 401) {
            alert("You session has expired, Please login again !");
            this.router.navigate(['/login'])
          } else {
            this.alert.errorToast()
            return [];
          }
        })
      )
  }

  PUT(url, data) {
    return this.http.put(this.baseUrl + url, data, { headers: this.headers(), observe: 'response' })
      .pipe(map((data: any) => {
        return data.body;
      }),
        catchError(error => {
          console.log(error)
          if (error.status == 401) {
            alert("You session has expired, Please login again !");
            this.router.navigate(['/login'])
          } else {
            this.alert.errorToast()
            return [];
          }
        })
      )
  }

  DELETE(url) {
    return this.http.delete(this.baseUrl + url, { headers: this.headers(), observe: 'response' })
      .pipe(map((data: any) => {
        return data.body;
      }),
        catchError(error => {
          console.log(error)
          if (error.status == 401) {
            alert("You session has expired, Please login again !");
            this.router.navigate(['/login'])
          } else {
            this.alert.errorToast()
            return [];
          }
        })
      )
  }

}
