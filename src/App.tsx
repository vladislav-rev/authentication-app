import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { useUserContext } from './store/user';
import { spaUrls } from './utils/apiHelper';
import { attemptAutomaticLogin } from './store/user';
import RootLayout from './components/layouts/RootLayout';

import LoadingPage from './pages/loadingPage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signUpPage';
import { Hello } from './components/Hello';

const originalLocation = {
    pathname: window.location.pathname,
    origin: window.location.origin,
    href: window.location.href,
} as const;

const App: React.FunctionComponent = (props) => {
    const { state, dispatch } = useUserContext();
    const history = useHistory();
    useEffect(() => {
        const errorCallback = () => history.push(spaUrls.login());
        const successCallback = () => history.push(originalLocation.pathname);
        history.push(spaUrls.progress());
        attemptAutomaticLogin(dispatch, errorCallback, successCallback);
    }, [dispatch, history]);

    if (!state.isAuthenticated) {
        return (
            <RootLayout>
                <Switch>
                    <Route exact path={spaUrls.login()} component={LoginPage} />
                    <Route
                        exact
                        path={spaUrls.signup()}
                        component={SignupPage}
                    />
                    <Route path={spaUrls.progress()} component={LoadingPage} />
                    <Redirect to={spaUrls.login()} />
                </Switch>
            </RootLayout>
        );
    } else {
        return (
            <RootLayout>
                <React.Suspense fallback={<LoadingPage />}>
                    <Switch>
                        <Route path={spaUrls.hello()} component={Hello} />
                        <Redirect to={spaUrls.hello()} />
                    </Switch>
                </React.Suspense>
            </RootLayout>
        );
    }
};

export default App;
