import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  login(){
    //hardcoded, we are just trying angular material and responsive forms
    //not a real life scenario
    const user = this.form.value.user;
    const password = this.form.value.password;
    if (user == 'jmoreno' && password=='12345') {
      this.fakeLoading();
    }else{
      //show error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Invalid user or password','', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom'
    })
  }


  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, 1500);
  }

}
