import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

  listUsers: User[] = [];
  displayedColumns: string[] = ['user', 'name', 'lastname', 'gender','actions'];

  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _userService : UserService, private _snackBar : MatSnackBar){}



  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.listUsers = this._userService.getUsers();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }
    
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(index : number){
    this._userService.deleteUser(index);
    this.cargarUsuarios();
    this._snackBar.open('User has been succesfully deleted','', {
      horizontalPosition: 'center',
      duration: 1500,
      verticalPosition: 'bottom'
    })
  }

}
