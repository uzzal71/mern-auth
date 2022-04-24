import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LoginInPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserInfoPage />
                </Route>
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