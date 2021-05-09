import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutHeaderComponent } from './pages/layout-header/layout-header.component';
import { LayoutMenuComponent } from './pages/layout-menu/layout-menu.component';
import { LayoutFooterComponent } from './pages/layout-footer/layout-footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ReportAnalyticComponent } from './pages/report-analytic/report-analytic.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MasterUserComponent } from './pages/master-user/master-user.component';
import {ApiService} from 'src/app/services/api.service';
import { AuthGuard } from "src/app/services/auth.guard";
import {AlertService} from 'src/app/services/alert.service';
import { URL } from 'src/app/Helpers/APIUrl'



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    LayoutFooterComponent,
    LoginComponent,
    RegistrationComponent,
    ReportAnalyticComponent,
    MasterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module
    
  ],
  providers: [ApiService,AuthGuard,AlertService,URL],
  bootstrap: [AppComponent]
})
export class AppModule { }
