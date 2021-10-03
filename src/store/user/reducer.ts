import { IUserState, UserActionTypes, UserActions } from './types';

export const userInitialState: IUserState = {
    isLoading: false,
    user: null,
    subscription: {
        id: 'professional',
        expires: 5,
    },
    isAuthenticated: false,
    error: null,
};
export function userReducer(
    state = userInitialState,
    action: UserActionTypes
): IUserState {
    switch (action.type) {
        case UserActions.SetLoading:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case UserActions.SetUserData:
            return {
                ...state,
                user: action.user,
            };
        case UserActions.SetAuthenticated:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            };
        case UserActions.SetError:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
