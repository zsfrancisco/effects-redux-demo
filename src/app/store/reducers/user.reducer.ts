import {Action, createReducer, on} from "@ngrx/store";
import {loadUser, loadUserFailure, loadUserSuccess} from "../actions";
import {User} from "../../models";

export interface UserState {
  userId: string;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  userId: undefined,
  user: undefined,
  loaded: false,
  loading: false,
  error: undefined
}

const _userReducer = createReducer(userInitialState,
  on(loadUser, (state, {userId}) => ({...state, loading: true, userId})),
  on(loadUserSuccess, (state, {user}) => ({...state, loading: false, loaded: true, user})),
  on(loadUserFailure, (state, {payload}) => ({
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

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}
