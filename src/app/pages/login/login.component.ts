import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'src/app/services/alert.service'
import { RouterModule, Routes,Router } from '@angular/router';
import { URL} from 'src/app/Helpers/APIUrl'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private spinner: NgxSpinnerService,private apiService: ApiService, private alert: AlertService,private url:URL) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({      
      UserName: ['', Validators.required],
      Password: ['', Validators.required] 
  });
  sessionStorage.clear(); 
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.LoginForm.invalid) { 
      return false;
  }

  this.spinner.show()
  var data={
    email: this.LoginForm.get('UserName').value,
    password: this.LoginForm.get('Password').value
  }
  
  this.apiService.POST(this.url.LOGIN,data).subscribe((response:any)=>{
   
    if(response.token!=="")
    {      
      var data=response;
     
      sessionStorage.setItem("userName",data.email);
      sessionStorage.setItem("accessToken",data.token);
      sessionStorage.setItem("userRole","Admin");     
      this.spinner.hide()
      this.router.navigate(['/report-analytic'])
    }
    else{
      this.spinner.hide()
      this.alert.errorToast();
      console.log(response)
    }
    
  },
  error=>{
    console.log(error);
  });
    

  }
}
