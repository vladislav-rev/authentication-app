import { IUser } from '../../types/user';

export interface IUserState {
    isLoading: boolean;
    user: IUser | null;
    isAuthenticated: boolean;
    subscription: {
        id: string;
        expires: number;
    };
    error: string | null;
}

export enum UserActions {
    SetLoading = 'SET_LOADING',
    SetAuthenticated = 'SET_AUTHENTICATED',
    SetUserData = 'SET_USER_DATA',
    SetError = 'SET_USER_ERROR',
}

interface SetLoadingAction {
    type: UserActions.SetLoading;
    isLoading: boolean;
}
interface SetAuthenticatedAction {
    type: UserActions.SetAuthenticated;
    isAuthenticated: boolean;
}
interface SetUserAction {
    type: UserActions.SetUserData;
    user: IUser | null;
}

interface SetErrorAction {
    type: UserActions.SetError;
    error: string | null;
}

export type UserActionTypes =
    | SetAuthenticatedAction
    | SetUserAction
    | SetLoadingAction
    | SetErrorAction;
