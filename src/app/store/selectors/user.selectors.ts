import {AppState} from "../app.reducers";
import {createSelector} from "@ngrx/store";

export const selectUserFeature = (state: AppState) => state.user;

export const selectUser = createSelector(selectUserFeature, state => state.user);
export const selectIsLoadingUser = createSelector(selectUserFeature, state => state.loading);
export const selectErrorUser = createSelector(selectUserFeature, state => state.error);
