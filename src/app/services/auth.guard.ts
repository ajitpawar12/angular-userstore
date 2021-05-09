import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRoles = next.data.allowedRoles;
    if (sessionStorage.getItem("accessToken") === null || sessionStorage.getItem("userRole") == null) {
      this.router.navigate(['/login']);

    }
    if (allowedRoles.includes(sessionStorage.getItem("userRole"))) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
