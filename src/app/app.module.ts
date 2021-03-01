import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    LayoutFooterComponent,
    LoginComponent,
    RegistrationComponent,
    ReportAnalyticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
