import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [
    {user: "jmoreno", name: 'Javier', lastname: "Moreno", gender: 'M'},
    {user: "pepe123", name: 'Pep', lastname: "Pepes", gender: 'M'},
    {user: "juanxx", name: 'Juan', lastname: "CX", gender: 'M'},
    {user: "raidboss123", name: 'Lenna', lastname: "Raid", gender: 'F'},
    {user: "joanLean", name: 'Joan', lastname: "Lean", gender: 'M'},
    {user: "vanderholl1455", name: 'Justine', lastname: "Holl", gender: 'F'},
  
  ];


  constructor() { }


  getUsers(){
    //return just a copy
    return this.userList.slice();
  }

  deleteUser(index : number){
    this.userList.splice(index,1);
  }

  addUser(user: User){
    this.userList.push(user);
  }

  editUser(user: User, index:number){
  
  this.userList[index].name = user.name;
  this.userList[index].lastname = user.lastname;
  this.userList[index].gender = user.gender;
  
  }

  getUserByIndex(index : number){
    return this.userList[index];
  }
}
