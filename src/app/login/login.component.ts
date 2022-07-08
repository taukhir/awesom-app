import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public msg: string = '';
  public formGroup: FormGroup

  constructor(private httpClient: HttpClient, private router: Router, private store : Store) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required], []),
      pwd: new FormControl('', [Validators.required], []),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.formGroup.invalid) {
      this.msg = 'Please provide input';
      return;
    }

    const name = this.formGroup.get('name')?.value;
    const password = this.formGroup.get('pwd')?.value;
  

    this.httpClient
      .post<any>(environment.baseUrl + '/login', { name, password })
      .subscribe({
        next: (result) => {
          console.log("result", result);
          this.store.dispatch({type:"SET_AUTH",payload:{
            isAuthenticated : true,
            userName : name,
            accessToken : result.accessToken,
            refreshToken : result.refreshToken
          }});
          sessionStorage.setItem("isAuthenticated", "true");
          this.router.navigateByUrl("/home");
       },
       error: (err) => {
         console.log("err", err);
         this.msg = "Invalid credentials";
         this.store.dispatch({type:"SET_AUTH",payload:{
          isAuthenticated : false,
          userName : name,
          accessToken : "",
          refreshToken :""
        }});
         sessionStorage.setItem("isAuthenticated", "false");
       },
       complete: () => {}
      });
  }
}
