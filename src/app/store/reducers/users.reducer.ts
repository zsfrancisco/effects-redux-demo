import {Action, createReducer, on} from "@ngrx/store";
import {loadUsers, loadUsersFailure, loadUsersSuccess} from "../actions";
import {User} from "../../models";

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: undefined
}

const _usersReducer = createReducer(usersInitialState,
  on(loadUsers, state => ({...state, loading: true})),
  on(loadUsersSuccess, (state, {users}) => ({...state, loading: false, loaded: true, users: [...users]})),
  on(loadUsersFailure, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: true,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    }
  }))
)

export function usersReducer(state: UsersState, action: Action) {
  return _usersReducer(state, action);
}
