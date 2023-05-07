import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

const getUserFeatureSelector = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureSelector,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureSelector,
    state => state.currentUser
);