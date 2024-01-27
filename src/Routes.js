import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  from "./App.js";

export const Routes = () => {
    return  (
        <Router>
            <Switch>
                <Route path = "/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    )
}