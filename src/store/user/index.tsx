import * as React from 'react';
import { userInitialState, userReducer } from './reducer';
import { UserActionTypes, IUserState } from './types';
export * from './actions';
export * from './reducer';

interface IUserContextState {
    state: IUserState;
    dispatch: React.Dispatch<UserActionTypes>;
}
const contextInitialState = {
    state: userInitialState,
    dispatch: () => {},
};
const UserContext = React.createContext<IUserContextState>(contextInitialState);

export const UserProvider: React.FunctionComponent = (props) => {
    const [state, dispatch] = React.useReducer(userReducer, userInitialState);

    const сontext = React.useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch]
    );

    return (
        <UserContext.Provider value={сontext}>
            {props.children}
        </UserContext.Provider>
    );
};

export function useUserContext() {
    const context = React.useContext(UserContext);
    return context;
}
