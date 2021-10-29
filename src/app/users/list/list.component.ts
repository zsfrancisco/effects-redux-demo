import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../models";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {loadUsers} from "../../store/actions";
import {selectErrorUsers, selectIsLoadingUsers, selectUsers} from "../../store/selectors";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users$: Observable<User[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<any> = of();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getUsersInformation();
    this.getUsersSelectors();
  }

  getUsersInformation(): void {
    this.store.dispatch(loadUsers());
  }

  getUsersSelectors(): void {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectIsLoadingUsers);
    this.error$ = this.store.select(selectErrorUsers);
  }

}
