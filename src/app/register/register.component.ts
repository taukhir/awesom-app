import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AppValidators } from '../Validators/app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public message: string= "";
  public isFormValid: boolean = false;
  public cityOptions: string [];


  constructor(public appValidators : AppValidators) { 

    this.cityOptions = new Array<string>();
    this.cityOptions.push("Mumbai");
    this.cityOptions.push("Hyderabad");
    this.cityOptions.push("Bangalore");
    this.cityOptions.push("Chennai");
    this.cityOptions.push("Delhi");

    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required,Validators.minLength(3),AppValidators.forbiddenValues(["admin"])],[appValidators.unique]),
      pwd: new FormControl("", [Validators.required], []),
      mobile: new FormControl("",[AppValidators.mobile] , []),
      city: new FormControl("", [], []),
    })

  }

  ngOnInit(): void {
  }

  register(){

    console.log(this.formGroup.get('city')?.value)
    if(this.formGroup.valid){

      
      this.message= "Valid Form";
      this.isFormValid = true;
    }
    else{
      this.message = "Invalid Form";
      this.isFormValid = false;
    }

  }
}