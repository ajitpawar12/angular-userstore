import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, 
{
  path: 'register',
  component: RegistrationComponent
},
{
  path: '',
  component: LayoutComponent,
  data:{allowedRoles: ['Admin','Dealer']},
  children: [
    { 
      path: 'dashboard', component: LayoutComponent,
      data: { 
              allowedRoles: ['Admin','Dealer']
            }
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
