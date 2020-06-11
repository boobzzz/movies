import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainList from './MainRoutes/MainList/MainList';
import MainDetails from './MainRoutes/MainDetails/MainDetails';

const Main = (props) => {
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainList} />
                    <Route path="/movie/:id" component={MainDetails} />
                </Switch>
            </Router>
        </main>
    )
}

export default Main;
