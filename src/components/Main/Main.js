import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainList from './MainRoutes/MainList/MainList';
import MainDetails from './MainRoutes/MainDetails/MainDetails';

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={MainList} />
                <Route path="/movie/:id" component={MainDetails} />
            </Switch>
        </main>
    )
}

export default Main;
