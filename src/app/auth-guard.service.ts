import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './ngrx-store/auth-reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private authState?: AuthState;
 

  constructor(private router: Router, store: Store<{ auth: AuthState }>) {
    store
      .select((state) => state.auth)
      .subscribe((auth) => {this.authState = auth});
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authState?.isAuthenticated;
    // const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated && isAuthenticated == true) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
