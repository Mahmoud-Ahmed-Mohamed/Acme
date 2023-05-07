import { User } from './../user';
import { createReducer, on, createFeatureSelector, createSelector} from '@ngrx/store';
import { UserPageActions } from './actions';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null
};

export const userReducer = createReducer(
    initialState,
    on(UserPageActions.maskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);