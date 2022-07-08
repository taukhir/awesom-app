import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../ngrx-store/auth-reducer';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private auth? : AuthState
  constructor(store : Store<{auth:AuthState}>) {

    store.select(state=>state.auth).subscribe(auth=>this.auth=auth);


   }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptop :: middleware :: TokenInterceptorService");
    if(this.auth && this.auth.isAuthenticated == true && this.auth.accessToken){
      return next.handle(req.clone({setHeaders:{Authorization : `Bearer ${this.auth.accessToken}`}}));
    } else {
      return next.handle(req);
    }
    
   
    
  }
}
