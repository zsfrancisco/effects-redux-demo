import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as usersActions from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(
        () => this.usersService.getUsers()
          .pipe(
            map(users => usersActions.loadUsersSuccess({users})),
            catchError(error => of(usersActions.loadUsersFailure({payload: error})))
          )
      )
    )
  )

  constructor(private actions$: Actions, private usersService: UserService) {
  }
}
