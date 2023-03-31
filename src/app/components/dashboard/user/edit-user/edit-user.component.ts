import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  user! : User;
  gender: any[] = ['M', 'F'];
  index! : number;

  constructor(private fb: FormBuilder, private _userService: UserService, private route: ActivatedRoute,private router :Router, private _snackBar: MatSnackBar) {
    
    var index = this.route.snapshot.paramMap.get('id');
    if (index != null) {
      this.index = parseInt(index);
      this.user = _userService.getUserByIndex(parseInt(index));
    }    
    
   
    this.form = this.fb.group({
      user: [this.user.user, Validators.required],
      name: [this.user.name, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      gender: [this.user.gender, Validators.required]

    })

    this.form.controls['user'].disable();

  }

  ngOnInit(): void {
    
  }

  editUser(){
    this._userService.editUser(this.form.value, this.index);

    this.router.navigate(['/dashboard/users']);
    this._snackBar.open('User Successfully edited','', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom'
    })
  }

}
