import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LoginInPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
            </Switch>
        </Router>
    );
}