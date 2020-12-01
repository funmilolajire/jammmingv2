import { LandingPage } from '../pages/Landing.pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPage} />
            </Switch>
        </Router>
    )
}