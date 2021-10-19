import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable, of} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users$: Observable<User[]> = of([]);

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsersInformation();
  }

  getUsersInformation(): void {
    this.users$ = this.userService.getUsers();
  }

}
