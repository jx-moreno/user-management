import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{

  form : FormGroup;

  gender: any[] = ['M','F'];

  constructor(private fb: FormBuilder, private _userService : UserService, private router: Router, private _snackBar : MatSnackBar){
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    
  }

  createUser(){
    //using it like this work as well
    // this._userService.addUser(this.form.value)
    //but we will try this now
    const user: User ={
      user: this.form.value.user,
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      gender: this.form.value.gender
    }

    this._userService.addUser(user)



    this.router.navigate(['/dashboard/users']);
    this._snackBar.open('User Successfully created','', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom'
    })
  }

}
