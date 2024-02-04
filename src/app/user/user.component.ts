import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  public userList = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUser();
  }


  getUser(){
    this.userService.getUserFromPlaceholder().subscribe(
      result => {
        this.userList = result;
        console.log(result);
      }
    )
  }

}
