import { AnimatePresence } from 'framer-motion';
import { Switch, Route } from 'react-router-dom';
import Community from '../pages/Community';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
    return (
        <AnimatePresence>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/comunidade">
                    <Community />
                </Route>
            </Switch>
        </AnimatePresence>
    );
};

export default Routes;
