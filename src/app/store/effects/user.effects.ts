import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as userActions from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap(
        ({userId}) => this.usersService.getUserById(userId)
          .pipe(
            map(user => userActions.loadUserSuccess({user})),
            catchError(error => of(userActions.loadUserFailure({payload: error})))
          )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UserService) {
  }
}
