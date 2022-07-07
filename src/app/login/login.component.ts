import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public msg: string = '';
  public formGroup: FormGroup

  constructor(private httpClient: HttpClient, private router: Router) {
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
      .post(environment.baseUrl + '/login', { name, password })
      .subscribe({
        next: (result) => {
          console.log("result", result);
          sessionStorage.setItem("isAuthenticated", "true");
          this.router.navigateByUrl("/home");
       },
       error: (err) => {
         console.log("err", err);
         this.msg = "Invalid credentials";
         sessionStorage.setItem("isAuthenticated", "false");
       },
       complete: () => {}
      });
  }
}
