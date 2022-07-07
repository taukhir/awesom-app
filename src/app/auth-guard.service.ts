import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if(isAuthenticated && isAuthenticated === "true"){
      return true;
    }
    else{

      this.router.navigateByUrl("/login");
      return false;
    }
  }
}