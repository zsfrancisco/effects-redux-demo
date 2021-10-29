import {AppState} from "../app.reducers";
import {createSelector} from "@ngrx/store";

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(selectUsersFeature, state => state.users);
export const selectIsLoadingUsers = createSelector(selectUsersFeature, state => state.loading);
export const selectErrorUsers = createSelector(selectUsersFeature, state => state.error);
